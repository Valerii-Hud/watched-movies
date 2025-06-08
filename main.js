'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    this.count = +prompt('How many films did you already see?', '');
    while (this.count === '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('How many films did you already see?', '');
    }
  },

  rememberMyFilms: function () {
    const questionItems = 2;
    let i = 0;
    while (i < questionItems) {
      const questionOne = prompt('One of the last seen movies?', '').trim();
      const questionTwo = prompt('How did you rate this movie?', '');

      if (
        questionOne !== null &&
        questionTwo !== null &&
        questionOne !== '' &&
        questionTwo !== '' &&
        questionOne.length < 50 &&
        questionTwo.length < 50
      ) {
        this.movies[questionOne] = questionTwo;
        console.log('✅ Movie saved');
      } else {
        console.error('❌ Invalid input, please try again');
        i--;
      }
      i++;
    }
  },

  detectPersonalLevel: function () {
    if (this.count < 10) {
      console.log('You’ve watched quite a few movies');
    } else if (this.count >= 10 && this.count < 30) {
      console.log('You are a classic viewer');
    } else if (this.count >= 30) {
      console.log('You are a movie buff!');
    } else {
      console.error('❌ Error determining movie level');
    }
  },

  toggleVisibleMyDB: function () {
    this.privat = !this.privat;
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(this);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favorite genre number ${i}`)
        .trim()
        .toLowerCase();
      if (!genre) {
        console.log('You enter bad data or dont write it');
        i--;
      } else {
        this.genres[i - 1] = genre;
        this.genres.sort();
      }
    }

    this.genres.forEach((genre, index) => {
      console.log(`Favorite genre ${index + 1} — ${genre}`);
    });
  },

  main: function () {
    this.start();
    this.rememberMyFilms();
    this.detectPersonalLevel();
    this.toggleVisibleMyDB();
    this.showMyDB(this.privat);
    this.writeYourGenres();
  },
};

personalMovieDB.main();
