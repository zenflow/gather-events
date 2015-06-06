# gather-events
Listen to an EventEmitter for some events and then return an ordered array of events that were emitted.

[![build status](https://travis-ci.org/zenflow/gather-events.svg?branch=master)](https://travis-ci.org/zenflow/gather-events?branch=master)
[![dependencies](https://david-dm.org/zenflow/gather-events.svg)](https://david-dm.org/zenflow/gather-events)
[![dev-dependencies](https://david-dm.org/zenflow/gather-events/dev-status.svg)](https://david-dm.org/zenflow/gather-events#info=devDependencies)

[![npm](https://nodei.co/npm/gather-events.svg?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/gather-events)


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

// --- or /w shorthand option---
var gathered = endGather(true);
console.log(JSON.stringify(gathered));
// -> [{"foo":[{"a":1},2],{"bar": [3]}]
```

### changelog

#### v1.1.0
- added shorthand option
- enhanced tests

#### v1.0.2
- enhanced readme
- enhanced package.json