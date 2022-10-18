function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combineNames = combine('Arsen ', 'Davtyan', 'as-text');
console.log(combineNames);
