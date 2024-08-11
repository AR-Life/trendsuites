/**
 * Created by Atasoy on 6.4.2015.
 */
//<![CDATA[
// this variable will collect the html which will eventually be placed in the side_bar
var side_bar_html = "";

var gmarkers = [];
var gicons = [];
var map = null;

var infowindow = new google.maps.InfoWindow(
    {
        size: new google.maps.Size(150,50)
    });


gicons["red"] = new google.maps.MarkerImage("img/mapIcons/marker_red.png",



    new google.maps.Size(45, 52),

    new google.maps.Point(0,0),

    new google.maps.Point(9, 34));


var iconImage = new google.maps.MarkerImage('img/mapIcons/marker_red.png',
    // This marker is 20 pixels wide by 34 pixels tall.
    new google.maps.Size(25, 52),
    // The origin for this image is 0,0.
    new google.maps.Point(0,0),
    // The anchor for this image is at 9,34.
    new google.maps.Point(25, 52));
var iconShadow = new google.maps.MarkerImage('http://www.google.com/mapfiles/shadow50.png',
    // The shadow image is larger in the horizontal dimension
    // while the position and offset are the same as for the main image.
    new google.maps.Size(25, 52),
    new google.maps.Point(0,0),
    new google.maps.Point(25, 52));
// Shapes define the clickable region of the icon.
// The type defines an HTML &lt;area&gt; element 'poly' which
// traces out a polygon as a series of X,Y points. The final
// coordinate closes the poly by connecting to the first
// coordinate.
var iconShape = {
    coord: [9,0,6,1,4,2,2,4,0,8,0,12,1,14,2,16,5,19,7,23,8,26,9,30,9,34,11,34,11,30,12,26,13,24,14,21,16,18,18,16,20,12,20,8,18,4,16,2,15,1,13,0],
    type: 'poly'
};

function getMarkerImage(iconColor) {
    if ((typeof(iconColor)=="undefined") || (iconColor==null)) {
        iconColor = "red";

    }
    if (!gicons[iconColor]) {
        gicons[iconColor] = new google.maps.MarkerImage("img/mapIcons/marker_"+ iconColor +".png",
            // This marker is 20 pixels wide by 34 pixels tall.
            new google.maps.Size(41, 52),
            // The origin for this image is 0,0.
            new google.maps.Point(0,0),
            // The anchor for this image is at 6,20.
            new google.maps.Point(25, 52));
    }
    return gicons[iconColor];

}

function category2color(category) {
    var color = "red";
    switch(category) {
        case "museum": color = "brown";
            break;
        case "restaurants": color = "red2";
            break;
        case "restaurants2": color = "red2";
            break;
        case "restaurants3": color = "red2";
            break;
        case "restaurants4": color = "red2";
            break;
        case "restaurants5": color = "red2";
            break;
        case "restaurants6": color = "red2";
            break;
        case "restaurants7": color = "red2";
            break;
        case "restaurants8": color = "red2";
            break;
        case "restaurants9": color = "red2";
            break;
        case "shopping":    color = "yellow";
            break;
        case "shopping2":    color = "green";
            break;
        case "hotel":    color = "orange";
            break;
        case "nightlife":    color = "pink";
            break;
        case "nightlife2":    color = "pink";
            break;
        case "airport":    color = "lightblue";
            break;
        case "otogar":    color = "darkblue";
            break;
        case "hospital":    color = "darkpink";
            break;
        case "beach":    color = "lightgreen";
            break;
        case "myplace":    color = "red";
            break;
        default:   color = "red";
            break;
    }
    return color;
}

gicons["restaurants"] = getMarkerImage(category2color("restaurants"));
gicons["restaurants2"] = getMarkerImage(category2color("restaurants2"));
gicons["restaurants3"] = getMarkerImage(category2color("restaurants3"));
gicons["restaurants4"] = getMarkerImage(category2color("restaurants4"));
gicons["restaurants5"] = getMarkerImage(category2color("restaurants5"));
gicons["restaurants6"] = getMarkerImage(category2color("restaurants6"));
gicons["restaurants7"] = getMarkerImage(category2color("restaurants7"));
gicons["restaurants8"] = getMarkerImage(category2color("restaurants8"));
gicons["restaurants9"] = getMarkerImage(category2color("restaurants9"));
gicons["shopping"] = getMarkerImage(category2color("shopping"));
gicons["shopping2"] = getMarkerImage(category2color("shopping2"));
gicons["hotel"] = getMarkerImage(category2color("hotel"));
gicons["nightlife"] = getMarkerImage(category2color("nightlife"));
gicons["nightlife2"] = getMarkerImage(category2color("nightlife2"));
gicons["museum"] = getMarkerImage(category2color("museum"));
gicons["airport"] = getMarkerImage(category2color("airport"));
gicons["otogar"] = getMarkerImage(category2color("otogar"));
gicons["hospital"] = getMarkerImage(category2color("hospital"));
gicons["beach"] = getMarkerImage(category2color("beach"));
gicons["myplace"] = getMarkerImage(category2color("myplace"));

// A function to create the marker and set up the event window
function createMarker(latlng,name,html,category) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        icon: gicons[category],
        shadow: iconShadow,
        map: map,
        title: name,
        zIndex: google.maps.Marker.MAX_ZINDEX + 1
    });
    // === Store the category and name info as a marker properties ===
    marker.mycategory = category;
    marker.myname = name;
    gmarkers.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map,marker);
    });
}

// == shows all markers of a particular category, and ensures the checkbox is checked ==
function show(category) {
    for (var i=0; i<gmarkers.length; i++) {
        if (gmarkers[i].mycategory == category) {
            gmarkers[i].setVisible(true);
        }
    }
    // == check the checkbox ==
    document.getElementById(category+"box").checked = true;
}

// == hides all markers of a particular category, and ensures the checkbox is cleared ==
function hide(category) {
    for (var i=0; i<gmarkers.length; i++) {
        if (gmarkers[i].mycategory == category) {
            gmarkers[i].setVisible(false);
        }
    }
    // == clear the checkbox ==
    document.getElementById(category+"box").checked = false;
    // == close the info window, in case its open on a marker that we just hid
    infowindow.close();
}

// == a checkbox has been clicked ==
function boxclick(box,category) {
    if (box.checked) {
        show(category);
    } else {
        hide(category);
    }
    // == rebuild the side bar
    //makeSidebar();
}

function myclick(i) {
    google.maps.event.trigger(gmarkers[i],"click");
}


// == rebuilds the sidebar to match the markers currently displayed ==
/*function makeSidebar() {
 var html = "";
 for (var i=0; i<gmarkers.length; i++) {
 if (gmarkers[i].getVisible()) {
 html += '<a href="javascript:myclick(' + i + ')">' + gmarkers[i].myname + '<\/a><br>';
 }
 }
 document.getElementById("side_bar").innerHTML = html;
 }*/

function initialize() {
    var myOptions = {
        styles: [{
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [
                { hue: '#e5e5e5' },
                { saturation: -100 },
                { lightness: 72 },
                { visibility: 'simplified' }
            ]
        },{
            featureType: 'water',
            elementType: 'all',
            stylers: [
                { hue: '#30a5dc' },
                { saturation: 47 },
                { lightness: -31 },
                { visibility: 'simplified' }
            ]
        },{
            featureType: 'road',
            elementType: 'all',
            stylers: [
                { hue: '#cccccc' },
                { saturation: -100 },
                { lightness: 44 },
                { visibility: 'on' }
            ]
        },{
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
                { hue: '#ffffff' },
                { saturation: -100 },
                { lightness: 100 },
                { visibility: 'on' }
            ]
        },{
            featureType: 'poi.park',
            elementType: 'all',
            stylers: [
                { hue: '#d2df9f' },
                { saturation: 12 },
                { lightness: -4 },
                { visibility: 'on' }
            ]
        },{
            featureType: 'road.arterial',
            elementType: 'all',
            stylers: [
                { hue: '#e5e5e5' },
                { saturation: -100 },
                { lightness: 56 },
                { visibility: 'on' }
            ]
        },{
            featureType: 'administrative.locality',
            elementType: 'all',
            stylers: [
                { hue: '#000000' },
                { saturation: 0 },
                { lightness: 0 },
                { visibility: 'on' }
            ]
        }],

        zoom: 12,
        center: new google.maps.LatLng(36.865325, 30.635438),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    if($("#map2").length){

      map = new google.maps.Map(document.getElementById("map2"), myOptions);


      google.maps.event.addListener(map, 'click', function() {
          infowindow.close();
      });
    }



    // Read the data
    downloadUrl("categories.xml", function(doc) {
        var xml = xmlParse(doc);
        var markers = xml.documentElement.getElementsByTagName("marker");

        for (var i = 0; i < markers.length; i++) {
            // obtain the attribues of each marker
            var lat = parseFloat(markers[i].getAttribute("lat"));
            var lng = parseFloat(markers[i].getAttribute("lng"));
            var point = new google.maps.LatLng(lat,lng);
            var address = markers[i].getAttribute("address");
            var distance = markers[i].getAttribute("distance");
            var name = markers[i].getAttribute("name");
            var image = markers[i].getAttribute("image");
            var html = "<a href='#'><p class='mapText'><b>"+name+"<\/b><br\/>"+address+"<\/b><br\/>"+distance+'<\/p> <img src="'+image+'" class="mapImage" ></a>';
            var category = markers[i].getAttribute("category");
            // create the marker
            var marker = createMarker(point,name,html,category,image);
        }

        // == show or hide the categories initially ==
        show("museum");
        show("shopping");
        show("shopping2");
        show("nightlife");
        show("nightlife2");
        show("hotel");
        show("restaurants");
        show("restaurants2");
        show("restaurants3");
        show("restaurants4");
        show("restaurants5");
        show("restaurants6");
        show("restaurants7");
        show("restaurants8");
        show("airport");
        show("otogar");
        show("beach");
        show("myplace");
        // == create the initial sidebar ==
        //makeSidebar();
    });
}


//]]>
