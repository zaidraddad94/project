// var d = new Date()
// var h = d.getHours() + ":" + d.getMinutes();

var name
var det
var main = [];

function each(coll, func) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			func(coll[i], i);
		}
	} else {
		for (var key in coll) {
			func(coll[key], key);
		}
	}
}


function filter(array, predicate) {
	var acc = [];
	if (!Array.isArray(array)) {
		acc = {};
	}
	each(array, function (elem, i) {
		if (predicate(elem, i)) {
			if (!Array.isArray(array)) {
				acc[i] = elem;
			} else {
				acc.push(elem);
			}
		}
	})
	return acc;
}



////////////////////////////////////////////////////////////////////



$("#btn").on('click', function (e) {
	var n = $("#n").val()
	var d = $("#ddd").val()


	main.push({
		name: n,
		det: d,
		done: false,
		date: new Date().getHours() + ":" + new Date().getMinutes()
	})

	
x()


})


function x (){
	$("#list").html('');
	for (var i = 0; i < main.length; i++) {


		var $main = $('<div class="di" id="'+i+ '"></div>')

		$main.html(main[i]['name'] + '  ' + `<button class = "${i}"></button>`)
		


		$main.prependTo($("#list"))
	

		
	}


}
// $("button.123").click(function () {
// 	$("button.123").parent().css("background-color", "red")
// })
//$( "p" ).parent( ".selected" )
/*$(document).click(function(){
	$('.di').hide();
})
*/