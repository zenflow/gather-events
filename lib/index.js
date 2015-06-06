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
	return function(shorthand){
		if (event_listeners){
			for (var i = 0; i < possible.length; i++){
				eventemitter.removeListener(possible[i], event_listeners[possible[i]]);
			}
			event_listeners = null;
		}
		var result;
		if (shorthand){
			result = [];
			for (var i = 0; i < gathered.length; i++){
				var e = {};
				e[gathered[i].name] = gathered[i].args;
				result.push(e);
			}
		} else {
			result = gathered;
		}
		return result;
	}
};
module.exports = gatherEvents;