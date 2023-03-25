const BoardService = require('../services/foodService')

exports.getList = async (req, res, next) => {
    let { foodName } = req.params
    try {
        let rows = await BoardService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getDetail = async (req, res, next) => {
    let { boardId } = req.params
    try {
        let rows = await BoardService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getSearch=(req,res,next)=>{ // 상품 찾기
    const searchWord = req.query.searchWord; // 쿼리에 담아온
    console.log(searchWord);
    let totalDetails;
    Product.find({ $text : {$search: searchWord}}).countDocuments() // 전체 아이템 수
        .then(itemsNum=>{
            totalDetails=itemsNum;
            return Product.find({ $text : {$search: searchWord}})
                .skip((pageNum-1)*POST_PER_PAGE) // 앞 페이지 product skip
                .limit(POST_PER_PAGE) // 현재 페이지에 와야할 product 수
        })
        .then(products=>{
            res.render('shop/searchingResult', {
                pageTitle: 'searching result',
                path:'/search?searchWord='+searchWord,
                prods: products,
                currentPage:pageNum, // 현재 페이지
                hasNextPage: POST_PER_PAGE*pageNum < totalDetails, // 다음 페이지가 있는가?
                hasPreviousPage: pageNum>=2, // 이전 페이지가 있는가?
                nextPage: pageNum+1, // 다음페이지
                previousPage:pageNum-1, //이전페이지
                lastPage: Math.ceil(totalDetails/POST_PER_PAGE) //마지막 페이지
            })
        })
        .catch(err =>console.log(err));
}
