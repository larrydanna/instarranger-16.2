/*
   _____                  
  / ___/____  ____  ____ _
  \__ \/ __ \/ __ \/ __ `/
 ___/ / /_/ / / / / /_/ / 
/____/\____/_/ /_/\__, /  
                 /____/   
*/
function Song(userInput) {
    this.userInput = userInput;
    this.template = new SongTemplateHtml().toString();
    this.fieldNames = ['title', 'key', 'time', 'tempo', 'notes'];
};

Song.prototype.formatItems = function (items, usrTxt, template) {
    items.forEach(i => {
        var value = this.getValue(i, usrTxt);
        template = template.replace('{' + i + '}', value);
    });

    return template;
};

Song.prototype.toString = function () {
    // Formatter for 'special' fields
    var fields = new FieldsExtractor(this.fieldNames, this.userInput).toArray();

    // Format the stanza's
    var stanzas = new StanzaExtractor(this.userInput, this.fieldNames).toArray();
    var formattedStanzas = stanzas.map(s => new StanzaFormatter(s).toString());

    var songFormatted = new SongFormatter(this.template, fields, formattedStanzas).toString();

    return songFormatted;
};
