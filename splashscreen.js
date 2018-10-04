var splashscreenPlugin = {
    version : '1.0.0',

    //
    properties2HTML : function (outputElementId) {
        var splashscreenStuff = "No properties available.";

        document.getElementById(outputElementId).innerHTML = splashscreenStuff;
    },
    //
    hide : function () {
        return navigator.splashscreen.hide();
    },
    //
    show : function () {
        return navigator.splashscreen.show();
    }
}
