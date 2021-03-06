﻿/*
    _______      __    __     ______     __                  __            
   / ____(_)__  / /___/ /____/ ____/  __/ /__________ ______/ /_____  _____
  / /_  / / _ \/ / __  / ___/ __/ | |/_/ __/ ___/ __ `/ ___/ __/ __ \/ ___/
 / __/ / /  __/ / /_/ (__  ) /____>  </ /_/ /  / /_/ / /__/ /_/ /_/ / /    
/_/   /_/\___/_/\__,_/____/_____/_/|_|\__/_/   \__,_/\___/\__/\____/_/     
                                                                           
*/
var namespace = namespace || {};

(function(ns) {
    var module = ns["song"] = ns["song"] || {};

    module.FieldsExtractor = function(fieldNames, userInput) {
        this.fieldNames = fieldNames;
        this.userInput = userInput;
    };

    module.FieldsExtractor.prototype.toArray = function () {
        var self = this;
        var result = this.fieldNames.map(function(key) {
            var retVal = {};

            var regex = eval("/" + key + ": (.*)/i");

            if (regex.test(self.userInput)) {
                var value = self.userInput.match(regex)[1];
                retVal = { "key": key, "value":value }
            }

            return retVal;
        });

        return result;
    };

})(namespace);
