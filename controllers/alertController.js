const AlertService = require("../services/alertService");

exports.postAlert = async (req, res, next) => {
    try {
        console.log(req.body.name)
        console.log(req.body.expiration_date)
        await AlertService.postAlert("",req.body.name,req.body.expiration_date);

        return res.status(200).json();
    } catch (error) {
        return res.status(500).json({
            code:500,
            message: error
        })
    }
}

exports.getAlert = async (req, res, next) => {
    try {
        console.log("getAlert")
        const totalDetails = await AlertService.getAlert();
        console.log(totalDetails);
        if(totalDetails){
            return res.status(200).json(totalDetails);
        }
        return res.status(404).json({
            message:"not found",
            code : 404
        })
    } catch (error) {
        return res.status(500).json({
            code:500,
            message:"server error"
        })
    }
}
