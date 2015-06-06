var _ = require('lodash');
var test = require('tape');
var EventEmitter = require('events').EventEmitter;
var gatherEvents = require('../lib');
var dummy_events = {
	'a': [1,2,3],
	'b': 'stringypoo',
	'c': {a: 'a', wtf: test}
};
var dummy_events_keys = _.keys(dummy_events);
test('works :p', function(t){
	var ee = new EventEmitter;
	var end = gatherEvents(ee, _.shuffle(dummy_events_keys));
	dummy_events_keys = _.shuffle(dummy_events_keys);
	_.forEach(dummy_events_keys, function(event_name){
		ee.emit(event_name, dummy_events[event_name]);
	});
	var events = end();
	t.ok(events.length==dummy_events_keys.length);
	for (var i = 0; i < events.length; i++){
		t.deepEqual(events[i], {name: dummy_events_keys[i], args: [dummy_events[dummy_events_keys[i]]]});
	}
	t.end();
});
test('shorthand option works', function(t){
	var ee = new EventEmitter;
	var end = gatherEvents(ee, _.shuffle(dummy_events_keys));
	dummy_events_keys = _.shuffle(dummy_events_keys);
	_.forEach(dummy_events_keys, function(event_name){
		ee.emit(event_name, dummy_events[event_name]);
	});
	var events = end(true);
	t.ok(events.length==dummy_events_keys.length);
	for (var i = 0; i < events.length; i++){
		var expected = {};
		expected[dummy_events_keys[i]] = [dummy_events[dummy_events_keys[i]]];
		t.deepEqual(events[i], expected);
	}
	t.end();
});