﻿/*
   _____                   ______                           __  __           
  / ___/____  ____  ____ _/ ____/___  _________ ___  ____ _/ /_/ /____  _____
  \__ \/ __ \/ __ \/ __ `/ /_  / __ \/ ___/ __ `__ \/ __ `/ __/ __/ _ \/ ___/
 ___/ / /_/ / / / / /_/ / __/ / /_/ / /  / / / / / / /_/ / /_/ /_/  __/ /    
/____/\____/_/ /_/\__, /_/    \____/_/  /_/ /_/ /_/\__,_/\__/\__/\___/_/     
                 /____/                                                      
*/
var namespace = namespace || {};

(function (ns) {
    var module = ns["song"] = ns["song"] || {};

    module.SongFormatter = function(template, fields, stanzas) {
        this.template = template;
        this.fields = fields;
        this.stanzas = stanzas;
    };

    module.SongFormatter.prototype.toString = function () {
        return this.template
            .replace('{title}', this.getValue('title').toTitleCase())
            .replace('{key}', this.getValue('key').toTitleCase())
            .replace('{time}', this.getValue('time').toTitleCase())
            .replace('{tempo}', this.getValue('tempo'))
            .replace('{notes}', this.getValue('notes'))
            .replace('{arrangement}', this.stanzas.join(''));
    };

    module.SongFormatter.prototype.getValue = function (key) {
        var obj = this.fields.find(function(i) { return i.key === key; }) || {};
        var retVal = obj.value || "";
        return retVal;
    };

})(namespace);