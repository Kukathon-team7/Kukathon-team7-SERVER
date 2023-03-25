
exports.postAlert = async (req, res, next) => {
    let { boardId } = req.params
    try {
        //let rows = await FoodService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getAlert = async (req, res, next) => {
    let { foodName } = req.params
    try {
        //let rows = await FoodService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}
