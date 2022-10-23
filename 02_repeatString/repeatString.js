const repeatString = function(s, n) {
    if (n < 0){
        return "ERROR";
    }
    if (n == 0){
        return "";
    }
    let string = s;

    // start counting from 1, since we copied the value of the 
    // string the first time already
    for (let i=1; i<n; i++){
        string += s;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
