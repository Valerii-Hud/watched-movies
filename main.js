'use strict';

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt('How many films did you already seen?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films did you already seen?', '');
  }
  personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {
  const questionItems = 2;
  let i = 0;
  do {
    const questionOne = prompt('One of the last seen movie?', '');
    const questionTwo = prompt('How did you rate this movie?', '');

    if (
      questionOne != null &&
      questionTwo != null &&
      questionOne != '' &&
      questionTwo != '' &&
      questionOne.length < 50 &&
      questionTwo < 50
    ) {
      personalMovieDB.movies[questionOne] = questionTwo;
      console.log('!001 Ok');
    } else {
      console.error('!020 Error on input validator');
      i--;
    }
    i++;
  } while (i < questionItems);
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Too small films');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a great viewer');
  } else if (personalMovieDB.count >= 30) {
    console.log('You are a great viewer');
  } else {
    console.error('!021 Error on movie counter ');
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let question = 1; question <= 3; question++) {
    const genre = prompt(`Your favorite genre on number ${question}`);
    personalMovieDB.genres[question - 1] = genre;
  }
}

function main() {
  start();
  rememberMyFilms();
  detectPersonalLevel();
  showMyDB(personalMovieDB.privat);
  writeYourGenres();
}

main();
