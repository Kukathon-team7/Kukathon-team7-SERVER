const Food = require("../model/foodSchema");


module.exports = {
    getDetail: async (searchWord) => { 
        try {  
                const foodData = await Food.findOne({name:searchWord});
                return foodData;          
          } catch (err) {
            throw err;
          }  
    },  
  };