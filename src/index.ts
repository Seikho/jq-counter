class Counter {
    constructor(public element: HTMLElement, public counterLimit, public incrementMs: number) {
    }
    
    counter: number = 0;
    timer: number;
    
    start = () => {
        var tick = () => {
            if (this.counter === this.counterLimit) {
                return this.stop();
            }
            
            this.counter++;            
            this.update();
        }
        this.timer = setInterval(tick, this.incrementMs)
    }
    
    
    
    stop = () => {
        clearInterval(this.timer);
    }
    
    update = () => {
        this.element.innerHTML = `<span>${this.counter}</span>`;
    }
}