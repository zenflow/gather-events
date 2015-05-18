var gatherEvents = function (eventemitter, possible){
	var event_listeners = {};
	var gathered = [];
	for (var i = 0; i < possible.length; i++){ (function(i){
		eventemitter.on(possible[i], event_listeners[possible[i]] = function(){
			gathered.push({
				name: possible[i],
				args: Array.prototype.slice.call(arguments)
			});
		});
	})(i); }
	return function(){
		for (var i = 0; i < possible.length; i++){
			eventemitter.removeListener(possible[i], event_listeners[possible[i]]);
		}
		return gathered;
	}
};
module.exports = gatherEvents;