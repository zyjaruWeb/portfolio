
const inputDate = document.querySelector(".dateInput")
const inputFrom = document.querySelector(".fromToInput")
const inputDescr = document.querySelector(".descriptionInput")
const inputAmount = document.querySelector(".amountInput")

const formContainer = document.querySelector(".formContainer")
const buttonContainer = document.querySelector(".buttonsContainer")
const submitBtn = document.querySelector(".submitBtn")
const tableInfoContainer = document.querySelector(".table")
const errorMsg = document.querySelector(".errorMsg")
const totalContainer = document.querySelector(".totalContainer")
const deleteButton = document.querySelector(".xButton")
const totalAmount = 500


//sort function

function sortByDate() {
    collection.find().sort({datefield: 1}).toArray(function(err, docs) {});
}








console.log()

//display all entries from database

const showEntries = async () => {
    tableInfoContainer.style.visibility = "visible"
    try {
        const {
            data: { entries },
        } = await axios.get("/api/v1/entries")
        if (entries.length < 1) {
            errorMsg.innerHTML = '<h3>Server: You need to enter information</h3>'
            tableInfoContainer.style.visibility = 'hidden'
            return
        }
        const allEntries = entries
            .map((entry) => {
                const {
                    _id: entryID,
                    date,
                    from,
                    description,
                    amount
                } = entry



                return `



                <tr class="tableInfo" id="tableRes">
                    <th class="idNo">${entryID}</th>
                    <th class="date">${date}</th>
                    <th class="fromTo">${from}</th>
                    <th class="description">${description}</th>
                    <th class="amount" id="amountId${entryID}">${amount}</th>
                    <th class="xButton" data-id="${entryID}"><button>X</button></th> <!-- data id connect individual buttons with their array entries --!>
                </tr>

                `
            })
            .join('')

        tableInfoContainer.innerHTML = `
            <tr class="tableHead">
            <th>ID</th>
            <th>Date</th>
            <th>From/To</th>
            <th>Description</th>
            <th>Amount (£)</th>
            
            </tr>` + allEntries + `

       
            <tr class="totalContainer">
                <th class="thTotal"></th>
                <th class="thTotal"></th>
                <th class="thTotal"></th>
                <th class="totalClass">Total:</th>
                <th class="amountClass">£ ${totalAmount}</th>

            </tr>
             `

    } catch (error) {
        errorMsg.innerHTML = '<h3>Server: You need to enter information</h3>'
    }
    tableInfoContainer.style.visibility = 'visible'

}

showEntries()



// add a new entry

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const date = inputDate.value
    const from = inputFrom.value
    const description = inputDescr.value
    const amount = inputAmount.value

    try {
        await axios.post('/api/v1/entries', { date, from, description, amount })
        showEntries()
        // showEntries()    implement to displayy all entries with freshly added
        inputDate.value = ''
        inputFrom.value = ''
        inputDescr.value = ''
        inputAmount.value = ''


    } catch (error) {
        console.log("error")
    }
})

//app.delete("/api/simpleLedger/entry/:id")   -delete entry
//app.delete("/api/simpleLedger/entry")       -delete entries

//delete entry

tableInfoContainer.addEventListener('click', async (e) => {
    const el = e.target

    if (el.parentElement.classList.contains("xButton")) {
        tableInfoContainer.style.visibility = "visible"
        const id = el.parentElement.dataset.id
        try {
            await axios.delete(`/api/v1/entries/${id}`)
            showEntries()
        } catch (error) {
            console.log(error);
        }
        tableInfoContainer.style.visibility = "hidden"
    }
})



// total grab amounts from MongoDB and push them to local array, would be more efficient if this process would be run on the mongoDB and request and response in here ---- see mongoDBQueries folder

