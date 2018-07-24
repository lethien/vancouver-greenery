function initRelaxedMap() {
    // Local Parks map
    var vancouverCenter = {lat: 49.256721, lng: -123.113517};
    var localParksMap = new google.maps.Map(
        document.getElementById('local-parks').getElementsByClassName('attraction-map')[0], 
        {zoom: 10, center: vancouverCenter});

    // Vandusen Garden
    var vandusenGarden = {lat: 49.2385595, lng: -123.1309107};
    var vandusenGardenMap = new google.maps.Map(
        document.getElementById('vandusen-garden').getElementsByClassName('attraction-map')[0], 
        {zoom: 15, center: vandusenGarden});
    var vandusenGardenMarker = new google.maps.Marker({position: vandusenGarden, map: vandusenGardenMap});

    // Queen Elizabeth Park
    var queenElizabethPark = {lat: 49.2417605, lng: -123.114808};
    var queenElizabethParkMap = new google.maps.Map(
        document.getElementById('queen-elizabeth-park').getElementsByClassName('attraction-map')[0], 
        {zoom: 15, center: queenElizabethPark});
    var queenElizabethParkMarker = new google.maps.Marker({position: queenElizabethPark, map: queenElizabethParkMap});
}

function initMovingMap() {
    // Stanley Park
    var stanleyPark = {lat: 49.3050477, lng: -123.1447221};
    var stanleyParkMap = new google.maps.Map(
        document.getElementById('stanley-park').getElementsByClassName('attraction-map')[0], 
        {zoom: 14, center: stanleyPark});
    var stanleyParkMarker = new google.maps.Marker({position: stanleyPark, map: stanleyParkMap});

    // Deer Lake Park
    var deerLakePark = {lat: 49.2356384, lng: -122.9816739};
    var deerLakeParkMap = new google.maps.Map(
        document.getElementById('deer-lake-park').getElementsByClassName('attraction-map')[0], 
        {zoom: 14, center: deerLakePark});
    var deerLakeParkMarker = new google.maps.Marker({position: deerLakePark, map: deerLakeParkMap});

    // Capilano Suspension Bridge
    var capilanoBridge = {lat: 49.3428644, lng: -123.1171131};
    var capilanoBridgeMap = new google.maps.Map(
        document.getElementById('capilano-suspension-bridge').getElementsByClassName('attraction-map')[0], 
        {zoom: 16, center: capilanoBridge});
    var capilanoBridgeMarker = new google.maps.Marker({position: capilanoBridge, map: capilanoBridgeMap});
}

function initChallengeMap() {
    // Burnaby Mountain
    var burnabyMountain = {lat: 49.273568, lng: -122.9112989};
    var burnabyMountainMap = new google.maps.Map(
        document.getElementById('burnaby-mountain').getElementsByClassName('attraction-map')[0], 
        {zoom: 14, center: burnabyMountain});
    var burnabyMountainMarker = new google.maps.Marker({position: burnabyMountain, map: burnabyMountainMap});

    // Lynn Canyon Park
    var lynnCanyonPark = {lat: 49.3434031, lng: -123.0211865};
    var lynnCanyonParkMap = new google.maps.Map(
        document.getElementById('lynn-canyon-park').getElementsByClassName('attraction-map')[0], 
        {zoom: 15, center: lynnCanyonPark});
    var lynnCanyonParkMarker = new google.maps.Marker({position: lynnCanyonPark, map: lynnCanyonParkMap});

    // Grouse Mountain
    var grouseMountain = {lat: 49.3712199, lng: -123.1015232};
    var grouseMountainMap = new google.maps.Map(
        document.getElementById('grouse-mountain').getElementsByClassName('attraction-map')[0], 
        {zoom: 13, center: grouseMountain});
    var grouseMountainMarker = new google.maps.Marker({position: grouseMountain, map: grouseMountainMap});
}