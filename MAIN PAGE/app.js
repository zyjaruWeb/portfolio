import { projects } from "./projectIndex.js"


const buttonsDisplaySel = document.querySelector(".buttonsClass")
const objectDisplaySel = document.querySelector(".sectionCentreClass")


//load code before interaction with user
window.addEventListener("DOMContentLoaded", function() {
    objectDisplayFunction(projects)//insert projects in order to be run thorugh the function 
    displayButtonsFunction()
})


//display array with objects in html
function objectDisplayFunction (projectItems) {
    let displayObj = projectItems.map(function(x) { //map accesses object parameters
        return `
        <article class="menuItemClass">
            <a href="${x.link}"><img src="${x.img}" class="photoClass" alt=${x.title}></a>
            <div class="itemInfoClass">
                <header>
                    <h4>${x.title}</h4>
                </header>
                <div id="underlineMenu"></div>
                <p class="itemTextClass">${x.description}</p>
            </div>
        </article>
        ` //return ends execution and gives back a html with specified object specififcs
    })
    displayObj = displayObj.join("") //make displayObj array add spaces between each array entry when accessed
    objectDisplaySel.innerHTML = displayObj //insert dirplayObj array in the .sectionCentreClass area
}

//CREATE BUTTONS BASED ON THE TYPE FROM OBJECTS IN ARRAY, HTML INSERT

//CREATE ALL BUTTON WHICH DISPLAY ALL TYPES, PART OF ABOVE

//FILTER THROUGH IF BUTTON PRESSED, EVENTLISTENER AND LOOP



    //use reduce to limit the array to category and id, make universal
    //map display array of buttons based on category of project array
    //filter based on ID of each button corresponding to the right array

function displayButtonsFunction() {
    //reduce objects array to categories
    const reduceObjects = projects.reduce(function(value, type) {
        
        //value is parameter, type is accumulator of each and every item
        //reduceObjects is newly declared array made of category types ex console log =['All', 'JavaScript', 'React', 'TypeScript', 'DataEngineer'], all is pre-declared by the end of if argument

        //value and type are dummies for argument purposes

            if (!value.includes(type.category)) {
                value.push(type.category)
            }
            return value
        }, 
        ["All"]
    )
    console.log(reduceObjects)

    //insert html code with variables from reduced objects array as per above
    const btndisplay = reduceObjects.map(function (category)/*use variable from reduce reduceObjects.map*/ {            
        return `<button class="filterBtn" type="button" data-id = ${category}>${category}</button>`//insert html with changable objects info
    }).join("")
    
    buttonsDisplaySel.innerHTML = btndisplay
    
    
    //create filtering 
    const filterBtn = buttonsDisplaySel.querySelectorAll(".filterBtn") //assign buttons to variable

    filterBtn.forEach(function (btn) {
        btn.addEventListener("click", function(filtr) {
            const category = filtr.currentTarget.dataset.id
            const projCatgry = projects.filter(function (projectCategory) {
                //console.log(projectCategory.category);

                if (projectCategory.category === category) {
                    return projectCategory
                }
            })
            
            if (category === "All") {
                objectDisplayFunction(projects)
            } else {
                objectDisplayFunction(projCatgry)
            }
        })
    });
}

