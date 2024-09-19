const boulevardButton = document.getElementById('boulevard-button');
const controlContainer = document.getElementById('control-container');
const plusButton = controlContainer.querySelector('.plus');
const buttonsContainer = controlContainer.querySelector('.buttons-container');

const showControl = () => {
    controlContainer.style.display = 'flex'; 
};

const toggleDirectionButtons = () => {
    const directionButtons = document.querySelectorAll('.direction-button');
    const buttonsVisible = Array.from(directionButtons).some(button => button.style.display === 'flex');
    
    directionButtons.forEach(button => {
        button.style.display = buttonsVisible ? 'none' : 'flex';
    });
};

boulevardButton.addEventListener('click', showControl);

plusButton.addEventListener('click', toggleDirectionButtons);

let showingParts = false;
let showingInteractiveMap = false;
let showingZonesOfInterest = false; 
function showParts() {
    const partsButtons = document.getElementById('parts-buttons');
    const otherButtons = document.querySelectorAll('.buttons-container button:not(:first-child)');
    
    if (showingParts) {
        partsButtons.style.display = 'none';
        otherButtons.forEach(button => button.style.display = 'block');
    } else {
        partsButtons.style.display = 'block';
        otherButtons.forEach(button => button.style.display = 'none');
    }
    showingParts = !showingParts; 
}

function showZonesOfInterest() {
    const zonesButtons = document.getElementById('zones-buttons');
    const otherButtons = document.querySelectorAll('.buttons-container button:not(:nth-child(2))'); 

    if (showingZonesOfInterest) {
        zonesButtons.style.display = 'none';
        otherButtons.forEach(button => button.style.display = 'block');
    } else {
        zonesButtons.style.display = 'block';
        otherButtons.forEach(button => button.style.display = 'none');
    }
    showingZonesOfInterest = !showingZonesOfInterest; 
}

function showInteractiveMap() {
    const interactiveMapButtons = document.getElementById('interactive-map-buttons');
    const otherButtons = document.querySelectorAll('.buttons-container button:not(:nth-child(3))');
    
    if (showingInteractiveMap) {
        interactiveMapButtons.style.display = 'none';
        otherButtons.forEach(button => button.style.display = 'block');
    } else {
        interactiveMapButtons.style.display = 'block';
        otherButtons.forEach(button => button.style.display = 'none');
    }
    showingInteractiveMap = !showingInteractiveMap; 
}


function showDoors() {
    document.getElementById('doors-buttons').style.display = 'block';
    document.getElementById('parts-buttons').style.display = 'none';
    document.getElementById('google-map').style.display = 'none';
    document.getElementById('main-map').style.display = 'block';
}

function changeMap(image) {
    document.getElementById('main-map').src = image;
    document.getElementById('main-map').style.display = 'block';
    document.getElementById('google-map').style.display = 'none';
}

function showGoogleMaps() {
    var iframe = document.getElementById('google-map');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1866.6716221012316!2d-103.32547288095878!3d20.65561000000002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1723669773976!5m2!1ses-419!2smx";
    iframe.style.display = 'block';
    document.getElementById('main-map').style.display = 'none';
    document.getElementById('parts-buttons').style.display = 'none';
    document.getElementById('interactive-map-buttons').style.display = 'none';
    document.getElementById('doors-buttons').style.display = 'none';
}

function showMainMap() {
    document.getElementById('main-map').src = 'images/mapa-udg.jpg';
    document.getElementById('main-map').style.display = 'block';
    document.getElementById('google-map').style.display = 'none';
    document.getElementById('parts-buttons').style.display = 'none';
    document.getElementById('interactive-map-buttons').style.display = 'none';
    document.getElementById('doors-buttons').style.display = 'none';
}

const mainMap = document.getElementById('main-map');

const images = {
    right: [
        'images/derecha1.jpg',
        'images/derecha2.jpg',
        'images/derecha3.jpg',
        'images/derecha4.jpg',
        'images/derecha5.jpg',
        'images/derecha6.jpg',
        'images/derecha7.jpg',
        'images/derecha8.jpg',
        'images/derecha9.jpg',
        'images/derecha10.jpg',
        'images/derecha11.jpg',
        'images/derecha12.jpg',
    ],
    left: [
        'images/izquierda1.jpg',
        'images/izquierda2.jpg',
     
    ],
    up: [
        'images/adelante1.jpg',
        'images/adelante2.jpg',
        'images/adelante3.jpg',
    ],
    down: [
        'images/atras1.jpg',
        'images/atras2.jpg',
        'images/atras3.jpg',
    ],
};

const currentIndices = {
    right: 0,
    left: 0,
    up: 0,
    down: 0,
};

let horizontalOffset = 0;

const changeImage = (direction) => {
    if (direction === 'right') {
        if (currentIndices.left > 0) {
            currentIndices.left--; 
            mainMap.src = images.left[currentIndices.left]; 
        } else {
            mainMap.src = images.right[horizontalOffset]; 
            horizontalOffset++; 
            if (horizontalOffset >= images.right.length) {
                horizontalOffset = 0; 
            }
        }
    } else if (direction === 'left') {
        if (horizontalOffset > 0) {
            horizontalOffset--; 
            mainMap.src = images.right[horizontalOffset]; 
        } else {
            mainMap.src = images.left[currentIndices.left]; 
            currentIndices.left++; 
            if (currentIndices.left >= images.left.length) {
                currentIndices.left = 0; 
                
                
            }
        }
    }else if (direction === 'up') {
        if (currentIndices.down > 0) {
            currentIndices.down--; 
            mainMap.src = images.down[currentIndices.down];
        } else {
            mainMap.src = images.up[verticalOffset];
            verticalOffset++;
            if (verticalOffset >= images.up.length) {
                verticalOffset = 0; 
            }
        }
    } else if (direction === 'down') {
        if (verticalOffset > 0) {
            verticalOffset--; 
            mainMap.src = images.up[verticalOffset];
        } else {
            mainMap.src = images.down[currentIndices.down];
            currentIndices.down++;
            if (currentIndices.down >= images.down.length) {
                currentIndices.down = 0; 
            }
        }
    }
};



document.getElementById('right').addEventListener('click', () => changeImage('right'));
document.getElementById('left').addEventListener('click', () => changeImage('left'));

document.getElementById('up').addEventListener('click', () => changeImage('up'));
document.getElementById('down').addEventListener('click', () => changeImage('down'));
