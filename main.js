const numberOfFilms = +prompt('How many films did you already seen?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionItems = 2;
for (let i = 0; i < questionItems; i++) {
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
}

if (personalMovieDB.count < 10) {
  console.log('Too small firms');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('You are a great viewer');
} else if (personalMovieDB.count >= 30) {
  console.log('You are a great viewer');
} else {
  console.error('!021 Error on movie counter ');
}

console.log(personalMovieDB);
