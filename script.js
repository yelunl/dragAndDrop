const divs = document.querySelectorAll('div');
const img = document.querySelector('figure');

// on image that will be dragged. sets what data needs to be transferred. 
// and gives the image in the current position (not the dragged image that follows the mouse) 
// a class named dragend (sets the opacity))
img.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', img.id);
    img.classList.add('dragend');
})

// when the image is stopped being dragged and dropped to it's new location. 
// tells what image schould do ones it's released and needs to look like on the NEW LOCATION.
img.addEventListener('dragend', (e) => {
    img.classList.remove('dragend');
})

// ????
// it's a must to add this one.
for(let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('dragover', (e) => {
        e.preventDefault();
    });
}

// when image is entered in one (or many) of the dropzones. what should the dropzones do?
// but it's not released yet
for(let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('dragenter', (e) => {
        e.target.classList.add('dragenter');
    })} 

// whe image is dragged along multiple dropzones. what schould it do when it's leaving another drop zone?
// image is also not released yet.
    for(let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('dragleave', (e) => {
            e.target.classList.remove('dragenter');
        })}


// when image is being dropped (mouse is released) on dropzone. what should dropzone do?
    for(let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggableImg = document.getElementById(data);
        e.target.appendChild(draggableImg);
        e.target.classList.remove('dragenter');
    })}
