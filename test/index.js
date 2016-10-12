var request = require('request');
describe('first suite',function(){

    beforeEach(function(){
       request('http://localhost:3000/start',function(error,res,body){
           if(error)
               console.log(error);
       });
    });

    it('first test',function(){
        console.log('testing!!!!');
    });

    afterEach(function () {
        request('http://localhost:3000/quit',function(error,res,body){
           if(error)
               console.log(error);
        });
    })

});