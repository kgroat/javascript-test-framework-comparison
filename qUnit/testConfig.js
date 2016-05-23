var testrunner = require("qunit");

testrunner.run({
    code: "math.js",
    tests: "tests\\math_tests.js"
},
function(err, stats) {
    process.exit(stats.failed > 0 ? 1 : 0);
}
);

