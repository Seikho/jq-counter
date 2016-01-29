class Counter {
    constructor(public options: { element: HTMLElement, start: number, end: number, intervalMs: number }) {
        this.increment = this.options.start > this.options.end
            ? -1
            : 1;
    }

    increment = 1;
    counter: number = 0;
    timer: number;

    start = () => {
        
        // Do not allow multiple intervals to run concurrently
        this.stop();
        
        var tick = () => {
            if (this.counter === this.options.end) {
                return this.stop();
            }
            this.counter += this.increment;
            this.update();
        }
        this.timer = setInterval(tick, this.options.intervalMs)
    }

    stop = () => {
        clearInterval(this.timer);
    }

    update = () => {
        this.options.element.innerHTML = `<span>${this.counter}</span>`;
    }
}