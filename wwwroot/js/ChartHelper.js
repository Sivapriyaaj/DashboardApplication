function loadgraphdata ()
{
	debugger
	$.ajax
		( {
			url: '/Dashboard/GetGraphData',
			//headers: { "RequestVerificationToken": $('input[name="__RequestVerificationToken"]').val() },
			datatype: 'json',
			cache: false,
			//async: true,
			contentType: 'application/json; charset=utf-8',
			success: function ( result )
			{
				debugger
				alert( "123" )
				var datasource = [];
				var chartdatareult = JSON.parse( result )
				//for ( var n = 0; n < chartdatareult.length-1; n++)
				for ( var n = 0; n < 10; n++ )
				{
					datasource.push( {
						y: chartdatareult[ n ].qty, label: chartdatareult[n].Productname
                    })
				}
				var chart = new CanvasJS.Chart( "flot-dashboard-chart", {
					animationEnabled: true,
					title: {
						text: "Desktop Search Engine Market Share - 2016"
					},
					data: [ {
						type: "pie",
						startAngle: 240,
						yValueFormatString: "##0.00\"%\"",
						indexLabel: "{label} {y}",
						dataPoints: datasource
					} ]
				} );
				chart.render();
				//var chart = new CanvasJS.Chart( "flot-dashboard-chart", {
				//	animationEnabled: true,
				//	theme: "light2", // "light1", "light2", "dark1", "dark2"
				//	title: {
				//		text: "Top Products"
				//	},
				//	axisY: {
				//		title: "Products",
				//		interval: 4000,
				//		minimum: 1000
				//	},
				//	data: [ {
				//		type: "column",
				//		showInLegend: true,
				//		legendMarkerColor: "grey",
				//		legendText: "Top selling product list",
				//		//dataPoints: [
				//		//	{ y: 300878, label: "Venezuela" },
				//		//	{ y: 266455, label: "Saudi" },
				//		//	{ y: 169709, label: "Canada" },
				//		//	{ y: 158400, label: "Iran" },
				//		//	{ y: 142503, label: "Iraq" },
				//		//	{ y: 101500, label: "Kuwait" },
				//		//	{ y: 97800, label: "UAE" },
				//		//	{ y: 80000, label: "Russia" }
				//		//]
				//		dataPoints:datasource
				//	} ]
				//} );
				//chart.render();

			},
			error: function ( er )
			{

			},
		} );

}