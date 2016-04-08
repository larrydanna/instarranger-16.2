function Song(text) {
    this.Title = text.match(/(title:)(.*)\n/i)[2].trim();
    this.Key = text.match(/(key:)(.*)\n/i)[2].trim();
    this.Tempo = text.match(/(tempo:)(.*)\n/i)[2].trim();
    this.Time = text.match(/(time:)(.*)\n/i)[2].trim();
    this.Sections = text.match(/(.+:)\n((.+\n)*)/g);

    //this.getHtml = function () {
    //    var retVal = '';

    //    retVal += '<span class="song-title">' + this.Title + '</span>';
    //    retVal += '<span class="song-infoblock">';
    //    retVal += '<span class="song-key">Key: ' + this.Key + '</span>';
    //    retVal += '<span class="song-tempo">Tempo: ' + this.Tempo + '</span>';
    //    retVal += '<span class="song-time">Time: ' + this.Time + '</span>';
    //    retVal += '</span>';

    //    for (var i = 0; i < this.Sections.length; i++) {
    //        retVal += '<span class="song-section">' + this.Sections[i].replace(/\n/g, '<br>') + '</span>';
    //    }

    //    return retVal;
    //};
};



