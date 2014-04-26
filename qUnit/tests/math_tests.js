var math = require('../math');

test("pow(2, 2) should return 4", function(){
    var result = math.pow(2, 2);
    equal(result, 4, "result was " + result);
});

test("pow(2, 3) should return 8", function(){
    var result = math.pow(2, 3);
    equal(result, 8, "result was " + result);
});

test("pow(2, -1) should return 0.5", function(){
    var result = math.pow(2, -1);
    equal(result, 0.5, "result was " + result);
});