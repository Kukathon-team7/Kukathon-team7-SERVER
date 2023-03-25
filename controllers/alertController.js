const alertService = require("./alertController");

exports.postAlert = async (req, res, next) => {
    try {
        var alert = new alert();
        alert.name = req.body.name;
        alert.expiration_date = req.body.expiration_date;
        let rows = await alertService.postAlert("", alert)
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
