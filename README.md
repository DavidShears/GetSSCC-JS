# GetSSCC-JS
Node implementation of calculation to generate SSCC check digit, using behaviour explained on GS1 website: https://www.gs1.org/services/how-calculate-check-digit-manually

## Requirements

* Yargs is used to handle the arguments passed in the command line
* Express is used to handle the web interface (coming soon)

## Command Line
node app --vendor=<your vendor ID number> --shipnumb=<pallet identifier>

Example would be --vendor=1234567 --shipnumb=876543210

This will run a calculation and return a check digit of 5 to be appended to the end of your string to complete the full SSCC barcode
  
## To-do
1. Implement web interface
