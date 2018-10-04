// declired variables
var name
var det
var main = [];
var day = new Date().toString().split(" ")[0]

//function delete the checked item 
$("#del").on('click', function () {
	for (var i = 0; i < main.length; i++) {
		$('input[type="checkbox"]:checked').closest("div").remove();
		main.splice(i, 1);
	}
})

//factory function to make note object and push it to main
$("#btn").on('click', function (e) {
	var n = $("#n").val()
	var d = $("#ddd").val()
	main.push({
		name: n,
		det: d,
		done: false,
		date: new Date().getHours() + ":" + new Date().getMinutes()
	})

	x();

})

//function add the note after write it 
function x() {
	$("#list").html('');
	for (var i = 0; i < main.length; i++) {
		var $main = $('<div class="di" id="' + i + '"></div>')
		$main.html("Note Tittle : " + main[i]['name'] + '<br>' + "Detailes : " + main[i]['det'] + '  ' + '<br>' + main[i].date + " " + day + ` <input type="checkbox" class=${i} style="margin-left:500px;" >` + " check to delete")
		$main.prependTo($("#list"))
		$('input').val("");
	}


}