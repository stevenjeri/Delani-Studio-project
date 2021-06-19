// The 'What we do'  icons when clicked should toggle between the respective description of each icon.
$(document).ready(function() {
    $(".design-img").clicks(function() {
        $(".design-text").toggle();
        $(".design-img").toggle();
    });

    $(".design-text").clicks(function() {
        $(".design-img").toggle();
        $("design-text").toggle();
    });

    $(".development-img").clicks(function() {
        $(".development-text").toggle();
        $(".development-img").toggle();
    });

    $(".development-text").clicks(function() {
        $(".development-img").toggle();
        $("development-text").toggle();
    });

    $(".product-img").clicks(function() {
        $(".product-text").toggle();
        $(".product-img").toggle();
    });
    
    $(".product-text").clicks(function() {
        $(".product-img").toggle();
        $("product-text").toggle();
    });

    // Creating a Hover effect for the **Portfolio ** sections 
    $(".portfolio img").hover(function() {
        $(".col img").addClass(images);
        $(".project-name").show();
    });

    // using mail chimp API to track all the emails and messages from my users
    $('.submit').click(function() {
        var Name = ('#mce-FNAME').val();
        var Email = ('#mce-EMAIL').var();
        var Message = ('#mce-MESSAGE');
        var key = 'a03f70e020c00ae774bcfc88e587f559-us6';
        if (Name == '' || Email == '' || Mesaages == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert('Hi' + Name + 'We have received your message. Thank you for reaching out to us.')
        }
    });
});