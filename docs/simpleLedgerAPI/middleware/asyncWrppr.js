// creates a try - catch "shortcut" for use in REST instead of repeating it every time


const asyncWrppr = (request) =>{
    return async (req,res,next) =>{
        try {
            await request(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrppr