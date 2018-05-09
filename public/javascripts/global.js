
$(document).ready(function() {
    populateTable();
});

function populateTable() {

    // Empty content string
    var tableContent = '';
    console.log("asdas");
    // jQuery AJAX call for JSON
    $.getJSON( '/api/v1/users', function( data ) {
  
      // Stick our user data array into a userlist variable in the global object
      userListData = data;
      console.log(userListData);
      // For each item in our JSON, add a table row and cells to the content string
    //   $.each(data, function(){
    //     tableContent += '<tr>';
    //     tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.FirstName + '">' + this.FirstName + '</a></td>';
    //     tableContent += '<td>' + this.EmailId + '</td>';
    //     tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
    //     tableContent += '</tr>';
    //   });
  
    //   // Inject the whole content string into our existing HTML table
    //   $('#userList table tbody').html(tableContent);
    });
  };