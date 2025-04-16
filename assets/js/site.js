// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function callMessagePost() {
    event.preventDefault();
    var settings = {
        "url": "/home/message",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "Name": $("#name").val(),
            "Email": $("#email").val(),
            "Message": $("#message").val(),
            "Contact": $("#contact").val()
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}