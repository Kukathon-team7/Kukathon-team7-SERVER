const AlertService = require("../services/alertService");
const FoodService = require("../services/foodService");

exports.postAlert = async (req, res, next) => {
    try {
        const {name, date, category} = req.body;
        console.log(name);

        var use_date = await FoodService.getDetail(name);
        console.log(use_date.ordinary_date);
        var result = new Date(date);
        if (category === '2') {
            result.setDate(result.getDate() + use_date.toInt());
            await AlertService.postAlert(name, result);
다
        } else if (category === '1' ) {
            result.setDate(result.getDate() + use_date.toInt());
            await AlertService.postAlert(name, result);

        } else {
            await AlertService.postAlert(name, date);

        }

        return res.status(200).json("ok");
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
