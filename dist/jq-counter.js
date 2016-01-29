var Counter = (function () {
    function Counter(element, counterLimit, incrementMs) {
        var _this = this;
        this.element = element;
        this.counterLimit = counterLimit;
        this.incrementMs = incrementMs;
        this.counter = 0;
        this.start = function () {
            var tick = function () {
                if (_this.counter === _this.counterLimit) {
                    return _this.stop();
                }
                _this.counter++;
                _this.update();
            };
            _this.timer = setInterval(tick, _this.incrementMs);
        };
        this.stop = function () {
            clearInterval(_this.timer);
        };
        this.update = function () {
            _this.element.innerHTML = "<span>" + _this.counter + "</span>";
        };
    }
    return Counter;
}());
