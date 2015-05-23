# gather-events
Listen to an EventEmitter for some events and then return an ordered array of events that were emitted.

### example usage
```js
var EventEmitter = require('events').EventEmitter;
var gatherEvents = require('./lib');

var event_emitter = new EventEmitter;
var endGather = gatherEvents(event_emitter, ['foo', 'bar']);

event_emitter.emit('foo', {a: 1}, 2);
event_emitter.emit('bar', 3);

var gathered = endGather();
console.log(JSON.stringify(gathered));
// -> [{"name":"foo","args":[{"a":1},2]},{"name":"bar","args":[3]}]
```

### changelog

#### v1.0.2
- enhanced readme
- enhanced package.json