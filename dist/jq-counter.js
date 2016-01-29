var Counter = (function () {
    function Counter(options) {
        var _this = this;
        this.options = options;
        this.increment = 1;
        this.counter = 0;
        this.start = function () {
            // Do not allow multiple intervals to run concurrently
            _this.stop();
            var tick = function () {
                if (_this.counter === _this.options.end) {
                    return _this.stop();
                }
                _this.counter += _this.increment;
                _this.update();
            };
            _this.timer = setInterval(tick, _this.options.intervalMs);
        };
        this.stop = function () {
            clearInterval(_this.timer);
        };
        this.update = function () {
            _this.options.element.innerHTML = "<span>" + _this.counter + "</span>";
        };
        this.increment = this.options.start > this.options.end
            ? -1
            : 1;
        this.counter = options.start;
        this.update();
    }
    return Counter;
}());
