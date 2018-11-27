var sports = ["rafting", "bodyboarding", "skateboarding", "hiking", "hockey", "BMX", "Football"]

function showGif(){

    $("button").on("click", function() {
        var sports = $(this).attr("data-sport");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=2KWYmlHzKmh2dcxrkR28QRn8lSeOuhDf&limit=10";

        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            var results = response.data;
            $("#sportGif").text(JSON.stringify(response));

            for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var sportImage = $("<img>");
            sportImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(sportImage);

            $("#sportsGif").prepend(gifDiv);
            }
        });
    });
    addButton();

}
$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});

function alertGifName() {
    var sportsName = $(this).attr("data-sport");

    // alert(sportsName);
};

function renderButtons(){
    $("#currentButtons").empty();

    for (var i = 0; i < sports.length; i++){
        var a = $("<button>");
        a.addClass("sport");
        a.attr("data-sport", sports[i]);
        a.text(sports[i]);
        $("#currentButtons").append(a);
    }
};

function addButton(){
    $("#addSport").on("click", function(event){
        event.preventDefault();

        var sport = $("#sportInput").val().trim();
        sports.push(sport);

        renderButtons();
    });

};

$(document).on("click", ".sport", alertGifName);




// function clear();{
//     clear
// }
    



renderButtons();

showGif();

// addButton();