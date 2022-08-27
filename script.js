const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
});

function dragStart() {
	console.log('drag Start');
	this.className += ' hold';
	setTimeout(() => {
		this.className = 'invisible';
	}, 0);
	// fill.classList.add('hold');
}

function dragEnd() {
	console.log('drag End');
	this.className = 'fill';
}

function dragOver(e) {
	e.preventDefault();
	console.log('drag Over');
}

function dragEnter(e) {
	e.preventDefault();
	console.log('drag Enter');
	this.className += ' hovered';
}

function dragLeave() {
	console.log('drag Leave');
	this.className = 'empty';
}

function dragDrop() {
	console.log('drag Drop');
	this.className = 'empty';
	this.append(fill);
}
