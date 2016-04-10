/*
   _____                   ______                           __  __            __  ____            __
  / ___/____  ____  ____ _/ ____/___  _________ ___  ____ _/ /_/ /____  _____/ / / / /_____ ___  / /
  \__ \/ __ \/ __ \/ __ `/ /_  / __ \/ ___/ __ `__ \/ __ `/ __/ __/ _ \/ ___/ /_/ / __/ __ `__ \/ / 
 ___/ / /_/ / / / / /_/ / __/ / /_/ / /  / / / / / / /_/ / /_/ /_/  __/ /  / __  / /_/ / / / / / /  
/____/\____/_/ /_/\__, /_/    \____/_/  /_/ /_/ /_/\__,_/\__/\__/\___/_/  /_/ /_/\__/_/ /_/ /_/_/   
                 /____/                                                                             
*/

String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

function SongFormatterHtml(data) {

    var sections = [];

    var tokens = {
        Title: "{title}",
        Key: "{key}",
        Time: "{time}",
        Tempo: "{tempo}",
        Arrangement: "{arrangement}",
        Stanza: "{stanza}",
        Label: "{label}",
        Line: "{line}",
        Measure: "{measure}",
        Notes: "{notes}"
    };

    var fieldNames = {
        Title: "title",
        Key: "key",
        Time: "time",
        Tempo: "tempo",
        Notes: "notes"
    };

    var parseData = function (data) {
        var splits = data.split(/(.+:)/g);

        for (var i = 1; i < splits.length; i = i + 2) {
            var section = splits[i] + splits[i + 1];

            sections.push(section);
        }
    }(data);

    var findSection = function (search) {
        var retVal = sections.find(i => i.toLowerCase().indexOf(search) === 0) || "";

        return retVal.replace(/title: /i, "");
    };

    var getFormattedOutput = function (template, title, key, time, tempo, notes, arrangement) {
        var retVal = template
            .replace(tokens.Title, title.toTitleCase())
            .replace(tokens.Key, key.toTitleCase())
            .replace(tokens.Time, time.toTitleCase())
            .replace(tokens.Tempo, tempo.toTitleCase())
            .replace(tokens.Notes, notes)
            .replace(tokens.Arrangement, arrangement);

        return retVal;
    };

    var isSpecial = function (data) {
        var list = ["title", "key", "tempo", "time","notes"];

        var retVal = list.some(i => data.toLowerCase().indexOf(i) === 0);

        return retVal;
    };

    var getFormattedMeasure = function (measure) {
        var template = "<span class='song-sections-stanza-measure'>{measure}</span>";

        var retVal = template.replace(tokens.Measure, measure);

        return retVal;
    };

    var getFormattedStanzaLine = function (line) {
        var template = "<div class='song-sections-stanza-line'>{line}</div>";

        var measures = line.split(/\s+/);

        var measuresFormatted = measures.map(m => getFormattedMeasure(m));

        var retVal = template.replace(tokens.Line, measuresFormatted.join(''));

        return retVal;
    };

    var getFormattedStanzaLabel = function (label) {
        var template = "<div class='song-sections-stanza-label'>{label}</div>";

        var retVal = template
            .replace(tokens.Label, label);

        return retVal;
    };

    var getFormattedStanza = function (stanza) {
        var template = "<div class='song-sections-stanza'>{stanza}</div>";

        var lines = stanza
            .split('\n')
            .filter(i => i.length > 0);

        var label = lines.shift();

        var labelFormatted = getFormattedStanzaLabel(label.toTitleCase());

        var linesFormatted = lines.map(l => getFormattedStanzaLine(l));

        var stanzaFormatted = template.replace(tokens.Stanza, labelFormatted.concat(linesFormatted.join('')));

        return stanzaFormatted;
    };

    var getArrangement = function () {
        var retVal = sections
            .filter(i => !isSpecial(i))
            .map(x => getFormattedStanza(x))
            .join('');

        return retVal;
    };

    this.getOutput = function () {
        var template = $('#divTemplate').html();

        var title = findSection(fieldNames.Title);
        var key = findSection(fieldNames.Key);
        var time = findSection(fieldNames.Time);
        var tempo = findSection(fieldNames.Tempo);
        var notes = findSection(fieldNames.Notes);
        var arrangement = getArrangement();

        var result = getFormattedOutput(template, title, key, time, tempo, notes, arrangement);

        return result;
    };
};
