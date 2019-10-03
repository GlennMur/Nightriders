// $(document).ready(function () {
 

// var options = '';

// for (var i = 0; i < 5; i++)
// { 
//   options += '<option value="' + i + '">' + i + '</option>';
// }
// options += '<option value="H2H_include-html=1V4_Team.html">"HTML_head.html"</option>'
//     console.log('Options: ' + options)  

// $('#TeamList').append(options);

// });
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    // return http.status!=404;
    return http.status;
}

function DisplayHTML(){
	var selNo1 = document.getElementById("Team");
	var selTeamNo = selNo1.options[selNo1.selectedIndex].value;
	var selNo2 = document.getElementById("Versus");
	var selVersusNo = selNo2.options[selNo2.selectedIndex].value;

    // Original string 
    var str = 'H2H_files/'; 
  
    // Joining the strings together 
    var value = str.concat(selTeamNo,'V',selVersusNo,'_Team.html');
    if (UrlExists(value) != 404)
    {
     console.log('Value: ' + value)  
	 window.location = value;
   }
   else
   	{	 window.location = '404Page.html'; }
 	
	// document.getElementById("result").innerHTML = result;
}

// function GetSelectedText(){
// 	var e = document.getElementById("country");
// 	var result = e.options[e.selectedIndex].text;
	
// 	document.getElementById("result").innerHTML = result;
// }


// const button = document.querySelector('input');
// const paragraph = document.querySelector('p');

// button.addEventListener('click', updateButton);

// function updateButton() {
// //	filename1()
// }

(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
    

})(jQuery);
