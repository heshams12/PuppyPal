$(document).ready(function () {
    if (window.location.pathname === "/shelter") {
        $("#shelForm").on("submit", function (e) {
            e.preventDefault();
            let newData =
            {
                name: $("#name").val().trim(),
                breed: $("#breed").val().trim(),
                gender: $("#gender").val().trim(),
                age: $("#age").val().trim(),
                info: $("#info").val().trim(),
                location: $("#location").val().trim(),
                image: $("#image").val().trim()

            };
                $.ajax({
                    type: "POST",
                    url: "api/puppies",
                    data: newData
                }).then(function (data) {
                    successMessage(data); 
                });
        });
        

    }
    function successMessage(data) {
        let success = $('<div>').addClass('uk-alert-success').attr('uk-alert', '').attr('id', 'successDiv');
        success.appendTo($('#alertGoesHere'));
        let anchor = $('<a>').addClass('uk-alert-close').attr('uk-close', '');
        anchor.appendTo(success);
        let successMessage = $('<p>').text("Your dog's ID number is " + data.id + ". Please make sure to save this id number for future reference.");
        successMessage.appendTo(success);
    }
});