'use strict'

var gMap

console.log('controller connected')

function showAge(value){
    document.querySelector('.showAge').innerText = value 
}

function setBGColor(value){
    document.querySelector('body').style.backgroundColor = value
}


function setTxtColor(value){
    document.querySelector('body').style.color = value
}

function myFunction(ev) {
    ev.preventDefault()
    saveUserInfo()
  }


function showMap() {
    var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    }   
    var map = new google.maps.Map(document.querySelector('.googleMap'),mapProp)
    initMap()
}


function initMap(lat, lng) {
    if (!lat) lat = 29.56441893221061;
    if (!lng) lng = 34.92213914890008;
    var elMap = document.querySelector('.googleMap')
    var options = {
        center: { lat, lng },
        zoom: 10
    }

    gMap = new google.maps.Map(
        elMap,
        options
    )

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title: 'My Location'
    })
}


function getPosition() {
    console.log('getting position')
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser")
        return
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
    // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    console.log(position)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    gMap.setCenter(new google.maps.LatLng( lat, lng ) )
    new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title: 'My Location'
    })

 }

 function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}



