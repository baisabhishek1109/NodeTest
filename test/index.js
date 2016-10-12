var request = require('request');
describe('first suite',function(){

    beforeEach(function(){
       request('http://192.168.0.9:3000/start',function(error,res,body){
           if(error)
               console.log(error);

           console.log(res);
           console.log(body);
       });
    });

    it('first test',function(){
        console.log('testing!!!!');
    });

    afterEach(function () {
        request('http://192.168.0.9:3000/quit',function(error,res,body){
           if(error)
               console.log(error);

            console.log(res);
            console.log(body);
        });
    })

});