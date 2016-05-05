/*
   _____ __                          __    _            ______                           __  __           
  / ___// /_____ _____  ____  ____ _/ /   (_)___  ___  / ____/___  _________ ___  ____ _/ /_/ /____  _____
  \__ \/ __/ __ `/ __ \/_  / / __ `/ /   / / __ \/ _ \/ /_  / __ \/ ___/ __ `__ \/ __ `/ __/ __/ _ \/ ___/
 ___/ / /_/ /_/ / / / / / /_/ /_/ / /___/ / / / /  __/ __/ / /_/ / /  / / / / / / /_/ / /_/ /_/  __/ /    
/____/\__/\__,_/_/ /_/ /___/\__,_/_____/_/_/ /_/\___/_/    \____/_/  /_/ /_/ /_/\__,_/\__/\__/\___/_/     
                                                                                                          
*/
var namespace = namespace || {};

(function (ns) {
    var module = ns["song"] = ns["song"] || {};

    module.StanzaLineFormatter = function (line) {
        this.line = line;
    };

    module.StanzaLineFormatter.prototype.toString = function () {

        var measures = this.line.split(/\s+/);

        var measuresFormatted = measures.map(m => new module.StanzaMeasureFormatter(m).toString());

        var retVal = namespace.html.div('song-sections-stanza-line', measuresFormatted.join(''));

        return retVal;
    };

})(namespace);

