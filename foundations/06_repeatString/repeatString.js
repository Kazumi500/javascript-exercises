const repeatString = function(text, num) {
    if ( num < 0 ) return "ERROR";
    let hasil = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            hasil += text;
        }
        
    };
    
    return hasil;
};


// Do not edit below this line
module.exports = repeatString;
