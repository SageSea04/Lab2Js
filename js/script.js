/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].oninput = function () { 
        var whichSlider = this.getAttribute("id");
        var sliderValue = this.value;
        var newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Function to update the RGB values */
function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    return rgb;
}

/* Function to generate the CSS RGB string */
function writeCSS(newRgb) {
    var newColor = "rgb(";
    
    // Loop through the RGB array and build the string
    for (var i = 0; i < newRgb.length; i++) {
        newColor += newRgb[i] + ","; 
    }

    newColor = newColor.slice(0, -1) + ")";
    
    return newColor;
}
