/* 
1 colour = white
2 click button -> run function
3 function generates random simple colour
4 the function uses only colours previously set in array of simple colours
5 display the colour -> change the simple theme
6 display the colour -> show in the background : color name/code
*/


//store simple colors
const simpleColors = ["Red", "Green", "Orange", "Blue", "Yellow"] 

//changes colour of background simple
function clickBtnFunction() {

    var themeSimpleColor = simpleColors[Math.floor(Math.random()*
        (simpleColors.length))] //variable to store one color from the array
    
        console.log(themeSimpleColor) //check color change randomly
//grab and swithc css color
    document.getElementById("simpleTheme").style.backgroundColor = themeSimpleColor
    document.getElementById("backgroundDescr").innerHTML = "Background: " + themeSimpleColor
}



