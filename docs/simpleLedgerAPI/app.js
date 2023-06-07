const express = require("express")
const app = express()
const routes = require("./routes/router")
const connectDB = require("./dbConnect/connect")
require("dotenv").config()

//middleware
app.use(express.static("./public"))//connect to html
app.use(express.json())


app.use("/api/v1/entries", routes)


const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()