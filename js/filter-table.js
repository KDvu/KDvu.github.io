function filterTable(){
	/*
	var project_name = document.getElementById("project_name").value;
	alert(project_name);
	*/	
	
	try{
		//Arrays to store values matching the search critera
		var matchedNames = new Array();
		var matchedLanguage = new Array();
		var matchedProgress = new Array();
		
		//Boolean variables used to check if the user select specfic checkboxes
		var language_selected = false;
		var progress_selected = false;
		
		//Boolean variable used to check if nothing matches the search critera
		var nothingFound = true;
		
		var project_name = $("#project_name").val(); //Stores the user's text input 
		var language = getSelectedLanguage();	//An array that stores the list of languages selected
		var progress = getSelectedProgress();	//An array that stores the list of progress options selected
		
		if (language.length != 0){
			language_selected = true;
		} 
		
		if (progress.length != 0){
			progress_selected = true;
		}

		//(Not case sensitive) compares the table values under project names to the user's text input 
		for(i = 0; i < no_of_rows;i++){
			if(values[i][0].toLowerCase().indexOf(project_name.toLowerCase()) > -1){
				matchedNames.push(values[i]);	//Stores in an array if it matches
			}
		}	
		
		/*The way the search works depend on whether or not languages/progress options were selected or not.
		  The search methods are all similar but with different arguments and functions used*/
		if(language_selected && !progress_selected){
			//A language was selected, but no progress option was selected
			matchedLanguage = insertLanguageValues(matchedNames,language,matchedLanguage,1);
			displayResults(matchedLanguage);		
		}else if (!language_selected && progress_selected){
			//A progress option was selected, but no language was selected
			matchedProgress = insertProgressValues(matchedNames,progress,matchedProgress,2);
			displayResults(matchedProgress);		
		}else if(language_selected && progress_selected){
			//A language and progress option was selected
			matchedLanguage = insertLanguageValues(matchedNames,language,matchedLanguage,1);
			matchedProgress = insertProgressValues(matchedLanguage,progress,matchedProgress,2);
			displayResults(matchedProgress);			
		}else if(!language_selected && !progress_selected && project_name =="")
			//No search critera was given
			alert("You did not enter any information!");
		 else
			//Only a name is given
			displayResults(matchedNames);

		
		//testArray(matchedNames);
		//testArray(matchedLanguage);
		//testArray(matchedProgress);
		
	} catch(err){
		for (i = 0; i < no_of_rows; i++) {		
			rows[i].innerHTML = "";
		}		
		alert(err.message);
	}
}

function testArray(array){
	for(i = 0; i < array.length;i++){
		console.log(array[i]);
	}
}

//This function compares the values in array a to the values in array b
function insertLanguageValues(a,b,c,colNo){
	for(i = 0; i < a.length;i++){
		for(j = 0; j < b.length;j++){
			if(a[i][colNo] == b[j]){
				c.push(a[i]); //If the values match the that value is pushed into a new array, c
				break;
			}
		}
	}		
	return c;
}

//This function compares the values in array a to the values in array b
function insertProgressValues(a,b,c,colNo){
	for(i = 0; i < a.length;i++){
		for(j = 0; j < b.length;j++){
			if(a[i][colNo].toLowerCase().indexOf(b[j].toLowerCase()) > -1){
				c.push(a[i]); //If the values match the that value is pushed into a new array, c
				break;
			}
		}
	}	
	return c;
}

//This function displays the results of the search
function displayResults(a){
	for (i = 0; i < no_of_rows; i++) {
		rows[i].innerHTML = "";
	}
		
	for (i = 0; i < a.length; i++) {
		rows[i].innerHTML = "<td>" + a[i].join("</td><td>") + "</td>";
	}
}

//This function goes through checkboxes to see which languages the user selected
function getSelectedLanguage(){
	var language = $("input:checkbox[name=language]:checked");
	
	var selected_language = new Array();
	
	language.each(function(){
		selected_language.push($(this).val());
	})

	return selected_language;
}

//This function goes through checkboxes to see which progress options the user selected
function getSelectedProgress(){
	var progress = $("input:checkbox[name=status]:checked");
	//console.log(progress);		
	
	var selected_progress = new Array();
	
	progress.each(function(){
		//alert($(this).val());
		selected_progress.push($(this).val());
	})
	
	/*for(i=0;i<selected_progress.length;i++){
		alert(selected_progress[i]);
	}*/
	return selected_progress;
}

//This function gets all the values in the table
function getTableValues(values,rows,no_of_rows){
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
	return values;
}