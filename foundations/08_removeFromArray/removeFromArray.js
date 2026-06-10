const removeFromArray = function(arr, ...remove) {
    const items = arr.filter(function (text){return !remove.includes(text)});
    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
