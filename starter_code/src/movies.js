/* eslint no-restricted-globals: 'off' */

// const movies = require('./data');

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    let HoursToMinutesMovies = JSON.parse(JSON.stringify(movies));

    var HoursToMinutesMoviesCopy = HoursToMinutesMovies.map(function(num) {
        if((num.duration).length === 8 || (num.duration).length === 7 ){
            let hourDuration = parseInt(num.duration.substr(0,1)) * 60;
            hourDuration += parseInt((num.duration.substr(2)));
            num.duration = hourDuration;
            return num; 
        } else if ( (num.duration).indexOf("h") !== -1){
            num.duration = parseInt(num.duration) * 60;
            return num;
        } else {
            num.duration = parseInt(num.duration);
            return num;
        }

    });

    return HoursToMinutesMoviesCopy;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    var sum = movies.reduce(function(accumulator, num){
      num.rate = parseFloat(num.rate);

      return (accumulator + num.rate);
    },0 );
    result = (sum/(movies.length)).toFixed(2);
    return parseFloat(result);
}

ratesAverage(movies)

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
