const numberOfFilms = +prompt('How many films did you already seen?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionOne = prompt('One of the last seen movie?', '');
const questionTwo = prompt('How did you rate this movie?', '');
const questionThree = prompt('One of the last seen movie?', '');
const questionFour = prompt('How did you rate this movie?', '');

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB);
