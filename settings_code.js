/*
    SETTINGS HANDLING
*/


// Function for motion toggle radio buttons.
const motionToggleButton = function(radioVal = "") {
    let motion_toggle = 0;
    if (radioVal == "on") {
        motion_toggle = 0;
    }
    else if (radioVal = "off") {
        motion_toggle = 1
    }
    let cookie_string = "motiontoggle=" + String(motion_toggle) // + "; domain=zugerujk.net"
    document.cookie = cookie_string;

}

// Give first radio group (motiontoggle) their function
var radios_group_type = document.forms["radio_group_motiontoggle"].elements["construct_group"];
for (var radio of radios_group_type) {
    radio.onclick = function() {
        motionToggleButton(radioVal=this.value);
    }
}