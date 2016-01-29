# Usage
```javascript
var Counter = require('jq-counter');
var element = document.getElementById('my-counter');
var start = 10;
var end = 0;
var intervalMs = 500; // milliseconds

var myCounter = new Counter({ element, start, end, interval });
myCounter.start();
```