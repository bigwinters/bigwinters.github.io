// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    //var responseString = JSON.stringify(response, '', 2);
    //document.getElementById('response').innerHTML = responseString
    document.getElementById('video').src = "https://www.youtube.com/embed/" + response.items[response.items.length-1].id.videoId;

}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded.
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCDVoSkVz-eAdA-FDGgzSIJ-Tl2-D9tJcg');
    
}

function search() {
    // Uses the JavaScript client library to create a search.list() API call.
    var userSearch = document.getElementById('userSearch').value;
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: userSearch,
        videoDuration: 'short',
        type: 'video',
        maxResults: 50,
        videoEmbeddable: true
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}


//Getting search to fire when Enter is pressed 
window.onload=function(){  
    var input = document.getElementById("userSearch");
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            search();
        }
    });
}

//Google Map Api
 var map;
 function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
                  zoom: 8
                });
    }

