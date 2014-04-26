var math = require('../math');

describe("pow", function(){
    it("should raise 2 to the power of 2", function(){
        var result = math.pow(2, 2);
        expect(result).toBe(4);
    })
    it("should raise 2 to the power of 3", function(){
        var result = math.pow(2, 3);
        expect(result).toBe(8);
    })
    it("should raise 2 to the power of -1", function(){
        var result = math.pow(2, -1);
        expect(result).toBe(0.5);
    })
})