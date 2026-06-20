const fibonacci = function(n) {
    n = parseInt(n);
    if (isNaN(n) || n < 0) return 'OOPS';
    if (n === 0) return 0;
    if (n <= 2) return 1;
    
    let [a, b] = [1, 1];
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
