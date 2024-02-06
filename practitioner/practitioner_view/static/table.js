$(document).ready(function() {
    // Initialize DataTable
    var userTable = $('#userTable').DataTable({
      "paging": false,
      "ordering": false,
      "info": false
      
    });

 
    // Add User button click event
    $('#addUserBtn').on('click', function() {

       if (userTable.data().count() > 10){
         alert('Max limit reached cant add new user.');
         return;
       }

       var userName = $('#userName').val();
       var userEmail = $('#userEmail').val();

       var userTestArray = [];
       $('input[name="userTest[]"]:checked').each(function(){
         userTestArray.push($(this).val());
       })

       var userTest = userTestArray.join(', ');

       var userType = $('#userType').val();
       
       if (userType === 'Group'){
        var groupID = prompt('Enter Group ID:');
        userType = groupID;
        if (groupID === null || groupID === ''){
           $(this).val('Individual');
        }
      }


       var newRow = userTable.row.add([userName, userEmail, userTest, userType,'<button class="removeBtn"> Remove </button>']).draw().node();

      //  var newRow = userTable.row.add([userName, userEmail, userTest, '<button class="reportBtn"> Generate Report</button>']).draw().node();
       
    
 
       // Clear the form
       $('#userName').val('');
       $('#userEmail').val('');
       $('input[name="userTest[]"]').prop('checked', false);

       $(newRow).find('.removeBtn').on('click', function(){

         // userTable.row(this).delete();
         var row = userTable.row($(this).parents('tr'));
         row.remove().draw();

         alert('removing user')
       })
    });

    // $('#editTable').on('click', function() {

    //     var editMode = userTable.settings()[0].oFeatures.bAutoWidth;

    //     userTable.settings()[0].oFeatures.bAutoWidth = !editMode;
    //     userTable.draw();

    //     $(this).text(editMode ? 'Edit' : 'Save Changes');

    // });
 });
 