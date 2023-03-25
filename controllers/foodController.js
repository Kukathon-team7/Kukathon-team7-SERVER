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
        const totalDetails = await FoodService.getDetail(searchWord);
        
        if(totalDetails === "" || totalDetails == null || (typeof totalDetails == "object" && !Object.keys(totalDetails).length)){
            return res.status(404).json({
                message:"not found",
                code : 404
            }) 
        }
    
        return res.status(200).json({
            code:200,
            message: "OK",
            ordinary_date:totalDetails[0],
            freeze_date : totalDetails[1]
        });
       
    } catch (error) {
        return res.status(500).json({
            code:500,
            message:"server error"
        })
    }
}
