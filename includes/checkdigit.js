// Check digit is calculated by taking the vendor number and shipping number
// multiply first digit by 3, second digit by 1, repeat until end
// The total of these 16 calculations then needs to get to the next multiple of 10
// Currently this is done by subtracting the remainder of total/10 from 10

// For example if --vendor=123456789 and --shipnumb=87654321
// total = 163
// 163/10 gives a remainder of 3
// 10 - 3 = 7
// 7 is the check digit

function GetCheck(digits) {
    var total = (parseInt(digits[0]) * 3) +
    (digits[1] * 1) + (digits[2] * 3) +
    (digits[3] * 1) + (digits[4] * 3) +
    (digits[5] * 1) + (digits[6] * 3) +
    (digits[7] * 1) + (digits[8] * 3) +
    (digits[9] * 1) + (digits[10] * 3) +
    (digits[11] * 1) + (digits[12] * 3) +
    (digits[13] * 1) + (digits[14] * 3) +
    (digits[15] * 1) + (digits[16] * 3) 
    if (total % 10 == 0) {
        return('0');
    } else {
        var checkdigit = 10 - (total % 10)
        return (checkdigit);
    }
}

module.exports = {GetCheck};