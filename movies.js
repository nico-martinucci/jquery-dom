"use strict";

const $ratingSlider = $("#movie-rating");
const $ratingSliderText = $("#rating-display");

$ratingSlider.on("change", updateRatingDisplay);

$("form").on("submit", event => {
    event.preventDefault();
    addMovie();
});

$("#ratings").on("click", "button", deleteMovie)

function updateRatingDisplay() {
    $ratingSliderText.text($ratingSlider.val());
}

/**
 * Builds a string from the movie title and rating input
 * @returns string created from form inputs for movie title and rating
 */
function buildMovieStringFromInput() {
    const title = $("#movie-name").val();
    const rating = $("#movie-rating").val();
    const titleRatingCombo = `${title}: ${rating} out of 10`;

    return titleRatingCombo;
}

/**
 *  Takes inputs from form and adds them to list in DOM
 */
function addMovie() {
    const deleteButton = $("<button>").text("X");

    const movieListItem = $("<li>").append(buildMovieStringFromInput, deleteButton);

    $("#rating-list").append(movieListItem);
}

/**
 * Removes list item from DOM
 */
function deleteMovie(event) {
    $(event.target).parent().remove();
}