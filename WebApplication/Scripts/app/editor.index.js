﻿/*
            ___ __             _           __         
  ___  ____/ (_) /_____  _____(_)___  ____/ /__  _  __
 / _ \/ __  / / __/ __ \/ ___/ / __ \/ __  / _ \| |/_/
/  __/ /_/ / / /_/ /_/ / /  / / / / / /_/ /  __/>  <  
\___/\__,_/_/\__/\____/_(_)/_/_/ /_/\__,_/\___/_/|_|  
                                                      
 */

(function (win, $, eh) {

    if (!$) {
        console.log("Big problem here... jQuery is not available");
        return;
    }

    if (!eh) {
        console.log("Big problem here... EditorHelper is not available");
        return;
    }

    var doFormatting = function () {
        var src = $('#textEditor').val();

        var song = new Song(src);

        $('#divOutput').html(song.toString());
    };

    var bindInputControls = function () {
        $('#textEditor').bind('keyup', null, function () {
            setTimeout(function () {
                doFormatting();
            }, 500);
        });
    };

    eh.say('App started');

    bindInputControls();

    doFormatting();

})(window, jQuery, window.EditorHelper);