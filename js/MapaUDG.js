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
    const otherButtons = document.querySelectorAll('.buttons-container button:not(:nth-child(2))'); // Asumiendo que el nuevo botón es el quinto

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



