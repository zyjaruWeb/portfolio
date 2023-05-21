/* 
1 colour = white
2 click button -> run function
3 function generates random hex colour
4 the function uses only colours from array of hex colours
5 display the colour -> change the simple theme
6 display the colour -> show in the background : color name/code
*/





//changes colour of background hex function
function clickBtnFunctionHex() {
    const hexColors = Math.floor(Math.random()*16777215 /*total number of hex colors 16777216 - 1 */
    ).toString(16);
    //genereate random hex color

    document.getElementById("hexTheme").style.backgroundColor = "#" + hexColors
//grab and swithc css color
    document.getElementById("backgroundDescrHex").innerHTML = "Background: " + "#" + hexColors
}




    


