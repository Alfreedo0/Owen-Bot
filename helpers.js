/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#
# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/

function successfullMessage(msg) {
    return "β ```" + msg + "```"
}
function errorMessage(msg) {
    return "π ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
