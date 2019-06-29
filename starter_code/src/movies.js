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
<<<<<<< HEAD
    let index = 0;
    var sum = movies.reduce(function(accumulator, num){
      index ++;
      return accumulator + parseFloat(num.rate);
    },0 );

    let result = (sum/index).toFixed(2);
=======
    var sum = movies.reduce(function(accumulator, num){
      num.rate = parseFloat(num.rate);

      return (accumulator + num.rate);
    },0 );
    result = (sum/(movies.length)).toFixed(2);
>>>>>>> f1fcf6c43158035270db79109b9b285e062895ba
    return parseFloat(result);
}



// Get the average of Drama Movies
function dramaMoviesRate(movies){
    let index = 0;

    var arrayGenre = movies.filter(function(num){
        return (num.genre).indexOf("Drama") !== -1;
    });



    // var sum = movies.reduce(function(accumulator, num){
    //     if((num.rate) !== undefined){ 
    //         index ++;
    //         num.rate = parseFloat(num.rate)
    //         return accumulator + num.rate;
    //     }
    //   },0 );

    let result = ( ratesAverage(arrayGenre)/index).toFixed(2);
    return parseFloat(result);
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
