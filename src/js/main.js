var modal = document.getElementById("modal_to_open");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementById("close_modal");

var cancel = document.getElementsByClassName("cancel")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}


//send mail with ajax

$('#send_email').click(function (e) {
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        firstname: $('#firstname').val(),
        message: $('#message').val()
    };
    //ajax
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function (data) {
            $('#js_alert_success').css({ 'display': 'block' });
            setTimeout(function () {
                $('#js_alert_success').css({ 'display': 'none' });
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("")
            }, 3000);
        },
        error: function (data) {
            $('#js_alert_danger').css({ 'display': 'block' });
            setTimeout(function () {
                $('#js_alert_danger').css({ 'display': 'none' });
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("")
            }, 3000);
        }
    });
});