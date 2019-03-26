"use strict";

function getDogImages() {
  let breed = $('input').val();
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    // .then(responseJSON => console.log(responseJSON))
    .then(responseJSON => displayResults(responseJSON))
    .catch(error => alert("Dog breed not found!"));
}

function displayResults(responseJSON) {
  console.log(responseJSON);
  $('.images').append(`<img class="results-img" src="${responseJSON.message}">`)
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.images').empty();
    console.log('form submitted!');
    getDogImages();
  })
}


$(function() {
  console.log('Page loaded. Enter a number!');
  watchForm();
})