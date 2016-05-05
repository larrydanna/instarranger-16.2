/*
    __  ____            __
   / / / / /_____ ___  / /
  / /_/ / __/ __ `__ \/ / 
 / __  / /_/ / / / / / /  
/_/ /_/\__/_/ /_/ /_/_/   
*/
(function (ns) {
    var module = ns["html"] = ns["html"] || {};

    module.element = function (name, css, html) {
        return "<{0} class='{1}'>{2}</{0}>"
        .replace(/\{0\}/g, name)
        .replace(/\{1\}/g, css)
        .replace(/\{2\}/g, html);
    };

    module.div = function (cssClass, innerHtml) {
        return this.element('div', cssClass, innerHtml);
    };

    module.span = function (cssClass, innerHtml) {
        return this.element('span', cssClass, innerHtml);
    };

})(namespace);
