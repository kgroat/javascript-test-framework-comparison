var math = require('../math');
var expect = require('chai').expect;

describe("math", function(){
    describe("pow", function(){
        it("should raise 2 to the power of 2", function(){
            var result = math.pow(2, 2);
            expect(result).to.equal(4);
        })
        it("should raise 2 to the power of 3", function(){
            var result = math.pow(2, 3);
            expect(result).to.equal(8);
        })
        it("should raise 2 to the power of -1", function(){
            var result = math.pow(2, -1);
            expect(result).to.equal(0.5);
        })
    })
})