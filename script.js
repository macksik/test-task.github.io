/* google map script */
function myMap() {
    const myLatLng = { lat: 43.4527883, lng: -80.5178437 };
    const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 15,
    disableDefaultUI: true,
    center: myLatLng,
    styles: [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#878787"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f9f5ed"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-35"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "3.01"
                    },
                    {
                        "hue": "#0096ff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#aee0f4"
                    }
                ]
            }
        ]
});
const contentString =
        '<div id="bodyContent" class="bodyContent">' +
            '<p id="firstHeading" class="firstHeading">Voodoo</p>' +
            '<p class="text-content">137 Glasgow St., Unit 115 <br> Kitchener, ON N2G 4X8 <br> Ukraine </p>' +
            '<p class="contact-phone" style="color: #858585"> <img src="img/phone.png" /> 1-800-480-9597 </p>'+
            '<p class="contact-email" style="color: #858585;"> <img src="img/email.png" /> info@voodoo.com </p>'+                    
        "</div>";
const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Inter",
});



const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "VooDoo",
    icon: 'img/point.png',
});



infowindow.open({
    anchor: marker,
    map,
    
});


window.initMap = myMap;
}
