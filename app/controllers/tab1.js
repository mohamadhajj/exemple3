var args = arguments[0] || {};
var tbl_data = [];
for (var i = 0; i < 6; i++) {
	var row = Ti.UI.createTableViewRow({
		id : 'row' + (i + 1),
		height : "155"
	});
	

	var view1 = Titanium.UI.createView({
		width : "40%",
		left : "0",
		top : "5",
		bottom : "5",
		layout : "vertical"
	});
	var view2 = Titanium.UI.createView({
		width : "60%",
		right : "5",
		backgroundColor : "#efefef",
		top : "5",
		bottom : "5",
		layout : "vertical"
	});

	var image = Ti.UI.createImageView({
		width : "100",
		height : "100",
		//backgroundImage : "/images/iTunesConnect.png"
	});

	var label1 = Ti.UI.createLabel({
		top : 0,
		text : 'label' + (i + 1)
	});
	var label2 = Ti.UI.createLabel({
		top : 0,
		text : 'label' + (i + 1)
	});

	view1.add(image);
	// add image to view1
	view2.add(label1);
	// add the first label to view2
	view2.add(label2);
	//add the second label to view2

	row.add(view1);
	row.add(view2);
	tbl_data.push(row);
}

var table = Titanium.UI.createTableView({

});

table.setData(tbl_data);

table.addEventListener('click', function(e) {
		//alert('row clicked: ' + e);
		alert(e.index+"");
	});

$.tabw1.add(table);

