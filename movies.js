"use strict";

$("form").on("submit", addMovie);

/**
 * Removes list item from DOM
 */
$("#ratings").on("click","button",function(event){
    $(event.target).parent().remove();
})

/**
 *  Takes inputs from form and adds them to list in DOM
 */
function addMovie(event) {
    event.preventDefault();
    const title = $("#movie-name").val();
    const rating = $("#movie-rating").val();
    const titleRatingCombo = `${title}: ${rating} out of 10`;

    const deleteButton = $("<button>").text("X");

    const movieListItem = $("<li>").append(titleRatingCombo, deleteButton);
    $("#rating-list").append(movieListItem);
}