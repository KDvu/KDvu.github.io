var order = new Array();
for (i=0; i<4;i++){
	order[i]=1;
}

function sortTable(col,asc){
	
	tbody = document.getElementById("projects"); //Get the table body
	rows = tbody.rows; //Get the rows
	no_of_rows = rows.length; //Get the number of rows in the table
	values = getTableValues(values,rows,no_of_rows);
	var cells, no_of_cells; 
	
	//console.log(rows);
	
	for(i=0;i<no_of_rows;i++){
		cells = rows[i].cells; //Get the cells of the current row
		no_of_cells = cells.length; //Get the number of cells in the current row(number of columns)
		//alert(no_of_cells);
		values[i] = new Array(); //Create a new array inside the value array (i.e. a 2D array) 
		for(j=0;j<no_of_cells;j++){
			values[i][j] = cells[j].innerHTML; //Add text of each cell into the array (i=row, j=column)
			//alert(values[i][j]);
		}
	}
		
	values.sort(function(a,b){
       //return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1 * asc);

		if (a[col] < b[col])
			return -1 * asc;
		if (a[col] > b[col])
			return asc;
		else
			return 0;
	})
			
	/*for(y=0;y<values.length;y++){
		alert(values[y][0]);
	}*/
	
	for (i = 0; i < no_of_rows; i++) {
		rows[i].innerHTML = "";
	}
	
	for (i = 0; i < no_of_rows; i++) {
		if(values[i] != "")
			rows[i].innerHTML = "<td>" + values[i].join("</td><td>") + "</td>";
    }

	changeOrder(col);
}

function changeOrder(index){
	for(i=0;i<order.length;i++){
		if(i==index)
			order[i]*=-1;
		else
			order[i]=1;
	}
}
