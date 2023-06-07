const express = require("express")
const router = express.Router()

const {
    getAllEntries,
    createEntry,
    deleteEntry,
    deleteAllEntries,
} = require("../REST/paths")

router.route("/").get(getAllEntries).post(createEntry).delete(deleteAllEntries)
router.route("/:id").delete(deleteEntry)

module.exports = router