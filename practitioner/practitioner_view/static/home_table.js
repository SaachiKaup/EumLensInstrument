$(document).ready(function() {
    // Initialize DataTable

    var userTable = $('#userTable').DataTable({
        "paging": false,
        "ordering": false,
        "info": false
      
    });
 
    // Sample data
    userTable.row.add(['John Doe', 'john@gmail.com', 'Test Taken']).draw();
    userTable.row.add(['Jane Doe', 'john@example.com', 'Test not Taken']).draw();


    $('#userTable').on('click', '.reportBtn', function() {

        $('#reportModal').show();
    })

    $('#generateReports').on('click', function(){
        var reports = [];
        $('input[name="reportType"]:checked').each(function (){
            reports.push($(this).val());
        });

        alert('generating: ' + reports.join(', '));

        $('input[name="reportType"]').prop('checked', false);

        $('#reportModal').hide();
    })

    $('#userTable').on('click', '.NotifyBtn', function() {

        alert('Notifying user')
    })

});
 