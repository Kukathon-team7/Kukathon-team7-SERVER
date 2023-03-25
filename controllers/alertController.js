const alertService = require("./alertController");

exports.postAlert = async (req, res, next) => {
    try {
        var alert = new alert();
        alert.name = req.body.name;
        alert.expiration_date = req.body.expiration_date;
        let rows = await alertService.postAlert("", alert)
        console.log("postAlert check")
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getAlert = async (req, res, next) => {
    try {
        const alert = await alertService.getAlert({
            where: {
                snsId: userId,
            },
        });
        return user;
    } catch (error) {
        throw error;
    }
    try {
        console.log("dksjfld")
        let alerts = await alertService.getAlert()
        return res.json(alerts)
    } catch (err) {
        return res.status(500).json(err)
    }
}
