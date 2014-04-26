module.exports = {
    pow: function(base, power){
        var output = 1;
        for(var i=0; i<power; i++){
            output *= base;
        }
        return output;
    },
    sum: function(){
        var output = 0;
        for(var i=0; i<arguments.length; i++){
            output += arguments[i];
        }
        return output;
    }
}