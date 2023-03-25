const Alert = require("../model/alertSchema");

module.exports = {
    postAlert: async (name, date) => {
        try {

            const alert = new Alert({
                name: name,
                expiration_date: date,
            })
            await alert.save();
            return alert
            // console.log(name)
            // console.log(date)
            // let target_token =
            //     'e5p9Ul2BRc-MgZHP8Dx_wB:APA91bG9pnGqSJQLGrazz3tq0JkPKJlTY5cHmylMiR8dAdGAdKi9o_rf9y55H1mmvvAgHj0ZKjZyk23Q_trNrmgQx1A6h3LaoADdlPV-kX5czoDnL1F-gc2DOZJucEmf4To6hje4AfHl'
            // //target_token은 푸시 메시지를 받을 디바이스의 토큰값입니다
            // alert.name = name
            // alert.expiration_date = date
            // alert.save(function (err) {
            //     if (err) {
            //         console.error(err);
            //         throw err;
            //     }
            //     console.log("hello its alert save")
            // });
            //
            // // time 만큼 스케줄러 설정
            // let message = {
            //     data: {
            //         title: '테스트 데이터 발송',
            //         body: '데이터가 잘 가나요?',
            //         style: '굳굳',
            //     },
            //     token: target_token,
            // }
            //
            // admin
            //     .messaging()
            //     .send(message)
            //     .then(function (response) {
            //         console.log('Successfully sent message: : ', response)
            //     })
            //     .catch(function (err) {
            //         console.log('Error Sending message!!! : ', err)
            //     })
        } catch (err) {
            console.log(err)
            throw Error(err)
        }
    },

    getAlert: async () => {
        try {
            return await Alert.find({});
        } catch (err) {
            throw err;
        }
    },
};

