/*
   _____                  ______                     __      __       __  ____            __
  / ___/____  ____  ____ /_  __/__  ____ ___  ____  / /___ _/ /____  / / / / /_____ ___  / /
  \__ \/ __ \/ __ \/ __ `// / / _ \/ __ `__ \/ __ \/ / __ `/ __/ _ \/ /_/ / __/ __ `__ \/ / 
 ___/ / /_/ / / / / /_/ // / /  __/ / / / / / /_/ / / /_/ / /_/  __/ __  / /_/ / / / / / /  
/____/\____/_/ /_/\__, //_/  \___/_/ /_/ /_/ .___/_/\__,_/\__/\___/_/ /_/\__/_/ /_/ /_/_/   
                 /____/                   /_/                                               
*/
var namespace = namespace || {};

(function (ns) {
    var module = ns["song"] = ns["song"] || {};

    module.SongTemplateHtml = function () { };

    module.SongTemplateHtml.prototype.toString = function () {
        var eh = namespace.html;

        return eh.div("song",
            eh.div('song-header',
                eh.div('song-header-title', '{title}') +
                eh.div('song-header-key',
                    eh.span('song-notes-label', 'Key:') + '{key}') +
                eh.div('song-header-time',
                    eh.span('song-notes-label', 'Time:') + '{time}') +
                eh.div('song-header-tempo',
                    eh.span('song-notes-label', 'Tempo:') + '{tempo}') +
                eh.div('song-header-clear', '&nbsp;')) +
            eh.div('song-sections', '{arrangement}') +
            eh.div('song-notes',
                eh.span('song-notes-label', 'Notes:') + '{notes}'));
    };

})(namespace);
