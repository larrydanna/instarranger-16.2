/*          ___ __             __         __               
  ___  ____/ (_) /_____  _____/ /_  ___  / /___  ___  _____
 / _ \/ __  / / __/ __ \/ ___/ __ \/ _ \/ / __ \/ _ \/ ___/
/  __/ /_/ / / /_/ /_/ / /  / / / /  __/ / /_/ /  __/ /    
\___/\__,_/_/\__/\____/_(_)/_/ /_/\___/_/ .___/\___/_/     
                                       /_/                 
 */
function EditorHelper() { };

EditorHelper.prototype.say = function (message) {
    var text = 'editorIndex-Say: ' + message;
    console.log(text);
};

EditorHelper.prototype.element = function (name, css, html) {
    return "<{0} class='{1}'>{2}</{0}>"
    .replace(/\{0\}/g, name)
    .replace(/\{1\}/g, css)
    .replace(/\{2\}/g, html);
};

EditorHelper.prototype.div = function (cssClass, innerHtml) {
    return this.element('div', cssClass, innerHtml);
};

EditorHelper.prototype.span = function (cssClass, innerHtml) {
    return this.element('span', cssClass, innerHtml);
};

window.EditorHelper = new EditorHelper();