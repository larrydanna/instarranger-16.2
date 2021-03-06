﻿/*
    _           __              _     
   (_)___  ____/ /__  _  __    (_)____
  / / __ \/ __  / _ \| |/_/   / / ___/
 / / / / / /_/ /  __/>  <_   / (__  ) 
/_/_/ /_/\__,_/\___/_/|_(_)_/ /____/  
                         /___/                                                              
 */
(function ($, app) {

    if (!$) {
        console.log("Big problem here... jQuery is not available");
        return;
    }

    var doFormatting = function () {
        var src = $('#textEditor').val();

        var song = new app.song.Song(src);

        var html = song.toString();

        $('#divOutput').html(html);
    };

    $('#textEditor').bind('keyup', null, function () {
        setTimeout(function () {
            doFormatting();
        }, 500);
    });

    doFormatting();

})(jQuery, instArranger);
