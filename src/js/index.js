
/** @namespace RUR */         // for jsdoc
window.RUR = RUR || {};

RUR._NB_IMAGES_TO_LOAD = 0;
RUR._NB_IMAGES_LOADED = 0;
RUR._BASE_URL = '';


/** @namespace private
* @memberof RUR */   // for jsdoc

require("./utils/key_exist.js");


RUR.show_feedback = function (element, content) {
    $(element).html(content).dialog("open");
};


/* require two modules that will automatically modify two global objects */
require("./utils/cors.js");
require("./utils/supplant.js");

require("./z_commands.js");
require("./zzz_doc_ready.js");
