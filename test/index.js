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
	_.forEach(dummy_events_keys, function(event_name){
		ee.emit(event_name, dummy_events[event_name]);
	});
	var events = end();
	t.ok(events.length==dummy_events_keys.length);
	for (var i = 0; i < events.length; i++){
		t.ok(events[i].name==dummy_events_keys[i]);
		t.ok(events[i].args[0]==dummy_events[dummy_events_keys[i]]);
	}
	t.end();
});