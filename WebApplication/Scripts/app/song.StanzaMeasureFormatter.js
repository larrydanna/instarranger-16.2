/*
   _____ __                          __  ___                                ______                           __  __           
  / ___// /_____ _____  ____  ____ _/  |/  /__  ____ ________  __________  / ____/___  _________ ___  ____ _/ /_/ /____  _____
  \__ \/ __/ __ `/ __ \/_  / / __ `/ /|_/ / _ \/ __ `/ ___/ / / / ___/ _ \/ /_  / __ \/ ___/ __ `__ \/ __ `/ __/ __/ _ \/ ___/
 ___/ / /_/ /_/ / / / / / /_/ /_/ / /  / /  __/ /_/ (__  ) /_/ / /  /  __/ __/ / /_/ / /  / / / / / / /_/ / /_/ /_/  __/ /    
/____/\__/\__,_/_/ /_/ /___/\__,_/_/  /_/\___/\__,_/____/\__,_/_/   \___/_/    \____/_/  /_/ /_/ /_/\__,_/\__/\__/\___/_/     
                                                                                                                              
*/
var namespace = namespace || {};

(function(ns) {
    var module = ns["song"] = ns["song"] || {};

    module.StanzaMeasureFormatter = function (measure) {
        this.measure = measure;
    };

    module.StanzaMeasureFormatter.prototype.toString = function () {

        // TODO: Re-Visit this logic, add advanced measure formatting.

        return namespace.html.div('song-sections-stanza-measure', this.measure);
    };


})(namespace);
