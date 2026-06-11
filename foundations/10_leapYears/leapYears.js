const leapYears = function(tahun) {
    return tahun % 4 === 0 && tahun % 100 !== 0 || tahun % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
