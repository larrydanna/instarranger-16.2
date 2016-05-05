/*
   _____ __                          ______                           __  __           
  / ___// /_____ _____  ____  ____ _/ ____/___  _________ ___  ____ _/ /_/ /____  _____
  \__ \/ __/ __ `/ __ \/_  / / __ `/ /_  / __ \/ ___/ __ `__ \/ __ `/ __/ __/ _ \/ ___/
 ___/ / /_/ /_/ / / / / / /_/ /_/ / __/ / /_/ / /  / / / / / / /_/ / /_/ /_/  __/ /    
/____/\__/\__,_/_/ /_/ /___/\__,_/_/    \____/_/  /_/ /_/ /_/\__,_/\__/\__/\___/_/     
                                                                                       
*/
var namespace = namespace || {};

(function (ns) {
    var module = ns["song"] = ns["song"] || {};

    module.StanzaFormatter = function (stanza) {
        this.stanza = stanza;
    };

    module.StanzaFormatter.prototype.toString = function () {
        var lines = this.stanza
            .split('\n')
            .filter(i => i.length > 0);

        var label = lines.shift();

        var labelFormatted = this.getFormattedStanzaLabel(label);

        var linesFormatted = lines.map(l => new module.StanzaLineFormatter(l).toString());

        var stanzaFormatted = namespace.html.div('song-sections-stanza', labelFormatted.concat(linesFormatted.join('')));

        return stanzaFormatted;
    };

    module.StanzaFormatter.prototype.getFormattedStanzaLabel = function (label) {
        var retVal = namespace.html.div('song-sections-stanza-label', label.toTitleCase());
        return retVal;
    };

})(namespace);
