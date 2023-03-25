import alertService from "../services/alertService";


exports.postAlert = async (req, res, next) => {
    let { boardId } = req.params
    try {
        let alert = await alertService.postAlert(boardId)
        return res.json(alert)
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getAlert = async (req, res, next) => {
    try {
        let alerts = await alertService.getAlert()
        return res.json(alerts)
    } catch (err) {
        return res.status(500).json(err)
    }
}
