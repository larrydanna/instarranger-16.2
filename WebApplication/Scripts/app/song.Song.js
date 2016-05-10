/*
   _____                  
  / ___/____  ____  ____ _
  \__ \/ __ \/ __ \/ __ `/
 ___/ / /_/ / / / / /_/ / 
/____/\____/_/ /_/\__, /  
                 /____/   
*/
var namespace = namespace || {};

(function (ns) {
    var module = ns["song"] = ns["song"] || {};

    module.Song = function(userInput) {
        this.userInput = userInput;
        this.template = new module.SongTemplateHtml().toString();
        this.fieldNames = ['title', 'key', 'time', 'tempo', 'notes'];
    };

    module.Song.prototype.formatItems = function (items, usrTxt, template) {
        items.forEach(function (i) {
            var value = this.getValue(i, usrTxt);
            template = template.replace('{' + i + '}', value);
        });

        return template;
    };

    module.Song.prototype.toString = function () {
        // Formatter for 'special' fields
        var fields = new module.FieldsExtractor(this.fieldNames, this.userInput).toArray();

        // Format the stanza's
        var stanzas = new module.StanzaExtractor(this.userInput, this.fieldNames).toArray();
        var formattedStanzas = stanzas.map(function(s){return new module.StanzaFormatter(s).toString()});

        var songFormatted = new module.SongFormatter(this.template, fields, formattedStanzas).toString();

        return songFormatted;
    };

})(namespace);
