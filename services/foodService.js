const Food = require("../model/foodSchema");


module.exports = {
    getDetail: async (searchWord) => { 
        try {  
                console.log(searchWord);
                const foodData = await Food.findOne({
                    name: searchWord
                });
                return [foodData.ordinary_date, foodData.freeze_date];
          } catch (err) {
            throw err;
          }  
    },  
  };