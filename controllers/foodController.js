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

exports.getSearch=async (req, res, next) => { // 상품 찾기
    const searchWord = req.query.searchWord; // 쿼리에 담아온
    console.log(searchWord);
    //let totalDetails = await FoodService.getDetail(searchWord);
}
