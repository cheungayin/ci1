// original code: Let's Fry an Egg | Drag 'n' Drop by Lauren https://codepen.io/naturalhanglider/pen/jQMWoq

// index.html javascript

var door = document.getElementById('door');
var key = document.getElementById('key');
door.style.width = '80%';
key.style.width = '20%';

key.onmousedown = function(ev){
	// ^ when mousedown on the key...
	let shiftX = ev.clientX - key.getBoundingClientRect().left;
	let shiftY = ev.clientY - key.getBoundingClientRect().top;

	//^ setting variables that will also consider where on the object the user is clicking reltibve to the page.
	key.style.position = 'absolute';
	key.style.zIndex = 1000;
	
	// ^ the key is prepared to be moved absolutely on the page and above (most forward on the screen) everything else.`
	document.body.append(key);
	moveAt(ev.pageX, ev.pageY);
	
	// ^ move the key where ever the event, mousedown in this case, is happening

	function moveAt(pageX, pageY) {
		// key.style.left = pageX - key.offsetWidth / 2 + 'px';
		// key.style.top = pageY - key.offsetHeight / 2 + 'px';
		// ^ we would use this code if we aren't worried about where on the object the user is clicking
    	key.style.left = pageX - shiftX + 'px';
    	key.style.top = pageY - shiftY + 'px';
	}
	
	let currentDropzone = null;
	//^ setting this to define as the dropezone
	
	function onMouseMove(ev) {
		//^ this is nested within the onmousedown event, so it'll only fire when the mose is down
		moveAt(ev.pageX, ev.pageY);

		key.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		key.hidden = false;
		if (!elemBelow) return;

		// potential droppables are labeled with the class "droppable" (can be other logic)
		let dropzoneBelow = elemBelow.closest('.dropzone');

		if (currentDropzone != dropzoneBelow) {
		if (currentDropzone) {
			leaveDropzone(currentDropzone);
		}
		currentDropzone = dropzoneBelow;
		if (currentDropzone) {
			// the logic to process "flying in" of the droppable
			enterDropzone(currentDropzone);
		}
		}
	}
	
	document.addEventListener('mousemove', onMouseMove);
	key.onmouseup = function(){
		document.removeEventListener('mousemove', onMouseMove);
		key.onmouseup = null;
		if (door.classList.contains('stealing')){
			door.src="imgs/stealing.png";
			door.classList.remove('stealing');
			key.style.display = 'none';
			document.body.style.background = '#c9ecff';
		}; 
	}
	};

 	function enterDropzone(elem) {
		elem.classList.add('stealing');
    }

    function leaveDropzone(elem) {
      	elem.classList.remove('stealing');
    }

	// prevents default behavior of dragging a clone/ghost and allows use to drag to original
	key.ondragstart = function(){
	return false;
}

