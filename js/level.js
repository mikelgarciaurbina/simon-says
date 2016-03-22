function handleClick(radioButtonSelected) {
	showLevel(parseInt(radioButtonSelected.value));
}

function showLevel(num) {
	var simonCircle = document.getElementById('circle');
    while( simonCircle.firstChild ){
      simonCircle.removeChild( simonCircle.firstChild );
    }
    
    for(var i = 0; i < num; i++) {
    	var circleItem = document.createElement('li');
	    circleItem.dataset.id = i;
	    var rotate = 360/num * i;
	    var skewY = 0;
	    if(num === 6) skewY = -30;
	    if(num === 12) skewY = -60;
	    circleItem.style.transform = "rotate(" + rotate + "deg) skewY(" + skewY + "deg)";

	    simonCircle.appendChild(circleItem);
    }
}