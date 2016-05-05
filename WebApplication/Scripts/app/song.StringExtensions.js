/*
   _____ __       _             ______     __                  _                 
  / ___// /______(_)___  ____ _/ ____/  __/ /____  ____  _____(_)___  ____  _____
  \__ \/ __/ ___/ / __ \/ __ `/ __/ | |/_/ __/ _ \/ __ \/ ___/ / __ \/ __ \/ ___/
 ___/ / /_/ /  / / / / / /_/ / /____>  </ /_/  __/ / / (__  ) / /_/ / / / (__  ) 
/____/\__/_/  /_/_/ /_/\__, /_____/_/|_|\__/\___/_/ /_/____/_/\____/_/ /_/____/  
                      /____/                                                     
*/
(function () {
    // ReSharper disable once NativeTypePrototypeExtending
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
})();
