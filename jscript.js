var turn = 1

function whosTurn(where) {
	if (turn == 1 || turn == 3 || turn == 5) {
		turn = turn + 1;
		addAnX(where);
	}
	else {
		turn = turn + 1;
		addAnO(where);
}
}

function addAnX(where) {
	console.log(where)
	document.getElementById(where).innerHTML="<img src='ximg.gif'>";
	didIWinYet(where);
};


function addAnO(where) {
	console.log(where)
	document.getElementById(where).innerHTML="<img src='oimg.jpeg'>";
	didIWinYet(where);
};

function didIWinYet(where) {
	if (trleft.innerHTML && trmiddle.innerHTML == trright.innerHTML) {
		document.getElementById('thewinneris').innerHTML=(where);
	}
	else if (mrleft.innerHTML && mrmiddle.innerHTML == mrright.innerHTML) {
		alert('You Win')
	}
	else if (brleft.innerHTML == brmiddle.innerHTML == brright.innerHTML) {
		alert('X Wins')
	}
	else {
		
	}
}