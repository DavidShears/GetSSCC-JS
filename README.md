# GetSSCC-JS
Node implementation of calculation to generate SSCC check digit, using behaviour explained on GS1 website: https://www.gs1.org/services/how-calculate-check-digit-manually

## Requirements

* Yargs is used to handle the arguments passed in the command line
* Express & EJS are used to handle the web interface (coming soon)

## Command Line
node app --vendor=<your vendor ID number> --shipnumb=<pallet identifier>

Example would be --vendor=1234567 --shipnumb=9876543210

This will run a calculation and return a check digit of 3 to be appended to the end of your string to complete the full SSCC barcode

## Browser

node webapp

This will generate a local instance on port 3008 with two boxes for input of the vendor & shipping number, on clicking 'submit' the checkdigit will be output along with the full barcode.

## To-do
1. Improve calculation - perhaps use array and loop rather than specifying each individual digit.
