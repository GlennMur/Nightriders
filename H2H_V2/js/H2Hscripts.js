
// Set the filename - execute HTML statement
function filename1() { 
 
 // get value from dropdowns
	var selNo1 = document.getElementById("Team");
	var selTeamNo = selNo1.options[selNo1.selectedIndex].value;
	var selNo2 = document.getElementById("Versus");
	var selVersusNo = selNo2.options[selNo2.selectedIndex].value;


    // Original string 
    var str = '<div H2H_include-html="'; 
  
    // Joining the strings together 
    var value = str.concat(selTeamNo,'V',selVersusNo,'_Team_Summary.html"></div>'); 
    document.write(value);  
   
}; 
// Set the filename - execute HTML statement
function filename2() { 
 
 // get value from dropdowns
	var selNo1 = document.getElementById("Team");
	var selTeamNo = selNo1.options[selNo1.selectedIndex].value;
	var selNo2 = document.getElementById("Versus");
	var selVersusNo = selNo2.options[selNo2.selectedIndex].value;


    // Original string 
    var str = '<div H2H_include-html="'; 
  
    // Joining the strings together 
    var value = str.concat(selTeamNo,'V',selVersusNo,'_Team.html"></div>'); 
    document.write(value);  
   
};