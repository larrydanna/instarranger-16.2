/*
    ______                           __  __           
   / ____/___  _________ ___  ____ _/ /_/ /____  _____
  / /_  / __ \/ ___/ __ `__ \/ __ `/ __/ __/ _ \/ ___/
 / __/ / /_/ / /  / / / / / / /_/ / /_/ /_/  __/ /    
/_/    \____/_/  /_/ /_/ /_/\__,_/\__/\__/\___/_/     
                                                      
*/

function Formatter(pInput) {
    var input = pInput;
    var formatters = [];

    this.getOutput = function () {
        var retVal = input;

        for (var i = 0; i < formatters.length; i++) {
            retVal = formatters[i](retVal);
        }

        return retVal;
    };

    this.addFormatter = function (fn) {
        formatters.push(fn);
    };
};
