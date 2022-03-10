function gensscc() {

    var vendor = document.getElementById("VendorID").value;
    var shipnumb = document.getElementById("ShipID").value;

    if (vendor == 0 || shipnumb == 0) {
        document.getElementById("output").value = "Error: Both Vendor and Container required";
        return;
    }

    var digits = vendor.toString() + shipnumb.toString();

    if (digits.length != 17) {
        document.getElementById("output").value = "Invalid string length, should be 17 but is " + digits.length;
        return;
    }

    var checkdigit = GetCheck(digits);

    document.getElementById("output").value = "Checkdigit: " + checkdigit + "\n" + "barcode: " + digits + checkdigit;
}