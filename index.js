// datepicker
$(function() {
    $("#datepicker2").datepicker({
        dateFormat: "yy-mm-dd",
        maxDate: "+1Y +10D",
        minDate: 1
    });

    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",

        minDate: 0,
        maxDate: "+1Y +10D",
        daysOfWeekDisabled: "0,6"
    });
});

// search button
function graball() {
    var places = document.getElementById("place_searching").value;
    var checkIn = document.getElementById("datepicker").value;
    var checkOut = document.getElementById("datepicker2").value;
    var guestnum = document.getElementById("showguest").value;

    var price = document.getElementById("amount").value;
    alert("Search: " + places + "\n\n" + "Checkin: " + checkIn + "\n\n" + "Checkout: " + checkOut + "\n\n" + "Guests: " + guestnumber + "\n\n" + "range: " + price);

}


// get price 
function rangeprice() {
    var price = document.getElementById("amount").value;
    document.getElementById("showprice").innerHTML = price;
}

// guest code start
var guestnumber = 0;

function increment() {
    guestnumber++;
    document.getElementById("updateGuestInfo").innerHTML = guestnumber;
}

function decrement() {
    if (guestnumber > 0) {
        guestnumber--;
        document.getElementById("updateGuestInfo").innerHTML = guestnumber;
    }
}
// guest code end 
function guestupdate() {
    var guest = document.getElementById("updateGuestInfo").innerText;

    document.getElementById("showguest").innerHTML = guest;
}
// price slider
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 150000,
        values: [0, 9000],
        slide: function(event, ui) {
            $("#amount").val(" ৳ " + ui.values[0] + " -  ৳ " + ui.values[1]);
        }
    });
    $("#amount").val(" ৳ " + $("#slider-range").slider("values", 0) +
        " -  ৳ " + $("#slider-range").slider("values", 1));
});
// page vanish
function vanish() {

    var x = document.getElementById("gone");
    var togglerbutton = document.getElementById("tooglebutton");
    var y = document.getElementById("divtwo");

    if (x.style.display === "none") {

        x.style.display = "block";
        togglerbutton.innerHTML = "Show Map <i class='fas fa-map'></i>"
        y.style.display = "none";

    } else {

        x.style.display = "none";
        togglerbutton.innerHTML = "Hide Map <i class='fas fa-map'></i>"
        y.style.display = "block";

    }
}
// map
var placesearch = 'place_searching';

function getlength() {
    var valu = (document.getElementById('place_searching').value);
    console.log("intial: " + valu.length);
    var count = valu.length + 1;
    console.log(count);
    if (count >= 3) {
        var acomplete = new google.maps.places.Autocomplete((document.getElementById(placesearch)), {
            types: ['geocode'],

        });

        google.maps.event.addListener(acomplete, 'place_changed', function() {

            console.log(valu.length);
            var near_place = acomplete.getplace();

        });
    } else {
        // $(document).abort();
    }
}


const hotels = [
    [-33.890542, 151.274856],
    [33.923036, 151.259052],
    [-34.028249, 151.157507],
    [-33.80010128657071, 151.28747820854187],
    [-33.950198, 151.259302],
    [-33.718234, 150.363181],
    [-31.56391, 147.154312],
    [-33.727111, 150.371124],
    [-33.848588, 151.209834],
    [-33.851702, 151.216968],
    [-34.671264, 150.863657],
    [-35.304724, 148.662905],
    [-36.817685, 175.699196],
    [-36.828611, 175.790222],
    [-38.75, 145.116667],
    [-37.7, 145.128708],
    [-39.76, 145.133858],
    [-36.77, 145.143299],
    [-37.7737, 145.145187],
    [-37.774785, 145.137978],
    [-37.819616, 144.968119],
    [-38.330766, 144.695692],
    [-39.927193, 175.053218],
    [-41.330162, 174.865694],
    [-42.734358, 147.439506],
    [-42.734358, 147.501315],
    [-42.735258, 147.438],
    [-43.999792, 170.463352]

];
const price_hotel = ["৳16,000", "৳10,000", "৳12,000", "৳10,000", "৳12,000",
    "৳16,000", "৳12,000", "৳14,000", "৳16,000", "৳12,000",
    "৳10,000", "৳16,000", "৳14,000", "৳12,000", "৳12,000",
    "৳16,000", "৳12,000", "৳16,000", "৳12,000", "৳12,000",
    "৳10,000", "৳12,000", "৳10,000", "৳12,000", "৳16,000",
    "৳12,000", "৳16,000", "৳12,000"
];

function setMarkers(map) {
    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.

    for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];
        const infowindow = new google.maps.InfoWindow({
            content: price_hotel[i],
        });

        const marker = new google.maps.Marker({
            position: { lat: hotel[0], lng: hotel[1] },
            map,
            title: "Hotelprice"

        });
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });

    }
}


function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(-28.024, 140.887),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    setMarkers(map);

}