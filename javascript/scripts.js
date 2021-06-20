// The 'What we do'  icons when clicked should toggle between the respective description of each icon.
$(document).ready(function() {
    $(".what-we-do .col-md-4").click(function() {
        $(this).find("img").toggle();
        $(this).find(".description").toggle();
    });

    // Creating a Hover effect for the **Portfolio ** sections 
    $(".portfolio .col").mouseenter(function() {
        $(this).find(".hover").show();
    });

    $(".portfolio .col").mouseleave(function() {
        $(this).find(".hover").hide();
    });

    $("form").submit(function(event){
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (name == '' || email == '' || message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert('Hi ' + name + ' We have received your message. Thank you for reaching out to us.')
        }
    });
});