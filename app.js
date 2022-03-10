// Try using yargs to handle combinations of parameters
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

var functions = require('./includes/checkdigit.js');
var GetCheck = functions.GetCheck;

if ((!argv.vendor) || (!argv.shipnumb)) {
    console.log('Both vendor and shipping number required to process');
    return;
}

if (isNaN(argv.vendor)) {
    console.log('Invalid vendor number specified');
    return;
}

if (isNaN(argv.shipnumb)) {
    console.log('Invalid shipping number specified');
    return;
}

var vendor = argv.vendor;
var shipnumb = argv.shipnumb;
var digits = vendor.toString() + shipnumb.toString();

if (digits.length != 17) {
    console.log('Invalid string length, should be 17 but is ' + digits.length)
    return;
}

var checkdigit = GetCheck(digits);
console.log(digits + checkdigit.toString());