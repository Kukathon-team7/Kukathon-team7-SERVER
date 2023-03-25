const Food = require("../model/foodSchema");


module.exports = {
    getDetail: async (searchWord) => { 
        try {  
                console.log(searchWord);
            return await Food.findOne({
                    name: searchWord
                });
          } catch (err) {
            throw err;
          }  
    },  
  };