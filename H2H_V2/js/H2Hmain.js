// H2Hmain.js

$(document).ready(function () {
 
// document.getElementById('TeamList').Options = '1';
// var list1 = document.getElementById('TeamList');
 
// list1.options[0] = new Option('--Team--', '');
// list1.options[1] = new Option('Snacks', 'Snacks');
// list1.options[2] = new Option('Drinks', 'Drinks');

var options = '';
// var data = '';

// $.each(data, function(index, value) {
//     options += '<option value="' + 1 + '" text="' + 2 + '" />';
// });

// $('.Input').append(options);
//     console.log('Options: ' + options)  

for (var i = 0; i < 5; i++)
{ 
  options += '<option value="' + i + '">' + i + '</option>';
}
    console.log('Options: ' + options)  

$('#TeamList').append(options);

});



