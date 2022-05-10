"use strict";
const numberOFilms = prompt("Сколько фильмов вы уже посмторели?", " ");
// console.log(numberOFilms);
let personalMovieDB = {
    count: numberOFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let x = prompt("Один из последних просмотренных фильмов ?", " ");
let g = prompt("На сколько оцените его?", " ");
let h = prompt("Один из последних просмотренных фильмов ?", " ");
let y = prompt("На сколько оцените его?", " ");
personalMovieDB.movies = {
    [x]:g, 
    [h]:y
};
// personalMovieDB.movies[x] = g;
// personalMovieDB.movies[h] = y;
console.log(personalMovieDB)
