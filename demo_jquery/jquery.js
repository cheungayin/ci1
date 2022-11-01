// try playing with this ALERT - 
$(document).ready(function() {alert("[greetings earthlings!]"); })

// JS files comment with two backslash lines 
$(document).ready(function() {$("#ufo").draggable();})

$(document).ready(function() {$("#cat").draggable();})

$(document).ready(function() {$("#grapes").draggable();})

$(document).ready(function() {$("#diamond").draggable();})

$(document).ready(function() {$("#bananas").draggable();})

$(document).ready(function() {$("#bananas").hover(function(){$("#cat").show();});})

$(document).ready(function() {$("#kirbystar").draggable();})
$(document).ready(function() {$("#kirbystar").hover(function(){$(this).hide();});})
$(document).ready(function() {$("#grapes").click(function(){$("#kirbystar").show();});})

$(document).ready(function() {$("#ufo").hover(function(){$("#earthling").append("we come in peace :) ");});})