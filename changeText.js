function printTillPos(ele, msg, pos) { 
	ele.innerHTML = msg.substring(0, pos+1);
}

function startLoop(ele, msg, pos, time) {
	if (pos == msg.length) {
		pos = 0;
		time = 2000;
	}
	else {
		time = 50;
	}
	setTimeout(function() { 
		printTillPos(ele, msg, pos);
		startLoop(ele, msg, pos+1);
	}, time); 
}
