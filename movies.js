"use strict";

$("form").on("submit", function(event){
    event.preventDefault();
    const title = $("movie-name").val();
    const rating = $("movie-rating").val();
    const titleRatingCombo = `${title}: ${rating} out of 10`;

    const deleteButton = $("<button>").text("X");

    const movieListItem = $("<li>").append(titleRatingCombo, deleteButton);
    $("#rating-list").append(movieListItem);
})