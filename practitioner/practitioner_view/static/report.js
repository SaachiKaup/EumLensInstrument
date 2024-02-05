$(document).ready(function() {
    // Initialize DataTable
    var userTable = $('#userTable').DataTable({
      
    });
 
    // Sample data
    userTable.row.add(['John Doe', 'john@gmail.com', '<button class="reportBtn"> Generate Report</button>']).draw();
    userTable.row.add(['Jane Doe', 'john@example.com', '<button class="NotifyBtn"> Notify User</button>']).draw();


    $('#userTable').on('click', '.reportBtn', function() {

        alert('Generating report')
    })

    $('#userTable').on('click', '.NotifyBtn', function() {

        alert('Notifying user')
    })

});
 