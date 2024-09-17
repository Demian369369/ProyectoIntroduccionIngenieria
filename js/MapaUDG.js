function showParts() {
    document.getElementById('parts-buttons').style.display = 'block';
    document.getElementById('doors-buttons').style.display = 'none';
    document.getElementById('google-map').style.display = 'none';
    document.getElementById('main-map').style.display = 'block';
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
    document.getElementById('doors-buttons').style.display = 'none';
}

function showMainMap() {
    document.getElementById('main-map').src = 'images/mapa-udg.jpg';
    document.getElementById('main-map').style.display = 'block';
    document.getElementById('google-map').style.display = 'none';
    document.getElementById('parts-buttons').style.display = 'none';
    document.getElementById('doors-buttons').style.display = 'none';
}