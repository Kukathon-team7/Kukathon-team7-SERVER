const FoodService = require("../services/foodService");

exports.getList = async (req, res, next) => {
    let { foodName } = req.params
    try {
        //let rows = await FoodService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getDetail = async (req, res, next) => {
    let { boardId } = req.params
    try {
        //let rows = await FoodService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getSearch = async (req, res, next) => { // 상품 찾기
    try {
        const searchWord = req.query.searchWord; // 쿼리에 담아온
        const foodDate = await FoodService.getDetail(searchWord);
        console.log(foodDate)
        var ordinary_date = foodDate.ordinary_date;
        var freeze_date = foodDate.freeze_date;
        console.log(freeze_date)
        return res.status(200).json({
            code:200,
            message: "OK",
            ordinary_date: ordinary_date,
            freeze_date : freeze_date
        });
       
    } catch (error) {
        return res.status(500).json({
            code:500,
            message:"server error"
        })
    }
}
