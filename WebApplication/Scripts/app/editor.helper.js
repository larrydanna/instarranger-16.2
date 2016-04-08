/*          ___ __             __         __               
  ___  ____/ (_) /_____  _____/ /_  ___  / /___  ___  _____
 / _ \/ __  / / __/ __ \/ ___/ __ \/ _ \/ / __ \/ _ \/ ___/
/  __/ /_/ / / /_/ /_/ / /  / / / /  __/ / /_/ /  __/ /    
\___/\__,_/_/\__/\____/_(_)/_/ /_/\___/_/ .___/\___/_/     
                                       /_/                 
 */
(function () {
    var editorHelper = function () { };

    editorHelper.say = function (message) {
        var text = 'editorIndex-Say: ' + message;
        console.log(text);
    };

    editorHelper.forEach = function(fn) {
        return fn();
    };

    window.EditorHelper = editorHelper;
})();
