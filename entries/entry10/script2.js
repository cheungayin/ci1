// gothungry.html javascript

var pan = document.getElementById('pan');
var egg = document.getElementById('egg');
pan.style.width = '80%';
egg.style.width = '20%';

egg.onmousedown = function(ev){
	let shiftX = ev.clientX - egg.getBoundingClientRect().left;
	let shiftY = ev.clientY - egg.getBoundingClientRect().top;

	egg.style.position = 'absolute';
	egg.style.zIndex = 1000;
	
	document.body.append(egg);
	moveAt(ev.pageX, ev.pageY);
	
	function moveAt(pageX, pageY) {
    	egg.style.left = pageX - shiftX + 'px';
    	egg.style.top = pageY - shiftY + 'px';
	}
	
	let currentDropzone = null;
	
	function onMouseMove(ev) {
		moveAt(ev.pageX, ev.pageY);

		egg.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		egg.hidden = false;
		if (!elemBelow) return;

		let dropzoneBelow = elemBelow.closest('.dropzone');

		if (currentDropzone != dropzoneBelow) {
		if (currentDropzone) {
			leaveDropzone(currentDropzone);
		}
		currentDropzone = dropzoneBelow;
		if (currentDropzone) {
			enterDropzone(currentDropzone);
		}
		}
	}
	
	document.addEventListener('mousemove', onMouseMove);
	egg.onmouseup = function(){
		document.removeEventListener('mousemove', onMouseMove);
		egg.onmouseup = null;
		if (pan.classList.contains('cooked')){
			pan.src="imgs/cooked.png";
			pan.classList.remove('cooked');
			egg.style.display = 'none';
			document.body.style.background = '#c9ecff';
		}; 
	}
	};

 	function enterDropzone(elem) {
		elem.classList.add('cooked');
    }

    function leaveDropzone(elem) {
      	elem.classList.remove('cooked');
    }

	egg.ondragstart = function(){
	return false;
}
