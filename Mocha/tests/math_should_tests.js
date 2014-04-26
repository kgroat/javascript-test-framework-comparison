var math = require('../math');
var should = require('chai').should();

describe("math", function(){
    describe("pow", function(){
        it("should raise 2 to the power of 2", function(){
            var result = math.pow(2, 2);
            result.should.equal(4);
        })
        it("should raise 2 to the power of 3", function(){
            var result = math.pow(2, 3);
            result.should.equal(8);
        })
        it("should raise 2 to the power of -1", function(){
            var result = math.pow(2, -1);
            result.should.equal(0.5);
        })
    })
})