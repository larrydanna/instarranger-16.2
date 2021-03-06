﻿/*
   _____ __                          ______     __                  __            
  / ___// /_____ _____  ____  ____ _/ ____/  __/ /__________ ______/ /_____  _____
  \__ \/ __/ __ `/ __ \/_  / / __ `/ __/ | |/_/ __/ ___/ __ `/ ___/ __/ __ \/ ___/
 ___/ / /_/ /_/ / / / / / /_/ /_/ / /____>  </ /_/ /  / /_/ / /__/ /_/ /_/ / /    
/____/\__/\__,_/_/ /_/ /___/\__,_/_____/_/|_|\__/_/   \__,_/\___/\__/\____/_/     
                                                                                  
*/
var namespace = namespace || {};

(function (ns) {
    var module = ns["song"] = ns["song"] || {};

    module.StanzaExtractor = function (userInput, ignoreList) {
        this.userInput = userInput;
        this.ignoreList = ignoreList;
        this.list = [];
    };

    module.StanzaExtractor.prototype.toArray = function () {
        var self = this;
        this.parseSections();

        var filteredList = this.list.filter(function (i) { return self.include(i); });

        return filteredList;
    };

    module.StanzaExtractor.prototype.parseSections = function () {
        var splits = this.userInput.split(/(.+:)/g);

        for (var i = 1; i < splits.length; i = i + 2) {
            var section = splits[i] + splits[i + 1];

            this.list.push(section);
        }
    };

    module.StanzaExtractor.prototype.include = function (stanza) {
        var retVal = this.ignoreList.every(function (i) { return stanza.toLowerCase().search(i.toLowerCase()) < 0; });
        return retVal;
    };

})(namespace);
