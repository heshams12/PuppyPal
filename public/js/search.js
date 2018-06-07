$(document).ready(function () {
    if (window.location.pathname === "/search") {
        $("#searchForm").on("submit", function (e) {
            e.preventDefault();
            let id = parseInt($("#idNumber").val().trim());
            sessionStorage.setItem('deleteId', id);
            insertParam('puppies', id);

        });
        
        let puppyId = findGetParameter('puppies');
        if (puppyId !== null) {
            $.get("/api/puppies/" + puppyId, function (data) {
                searchAndDelete(data);
            });
        }
    }
});

function insertParam(key, value) {
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i = kvp.length; var x; while (i--) {
        x = kvp[i].split('=');

        if (x[0] == key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    } 

    if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

    document.location.search = kvp.join('&');
}
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function searchAndDelete(data) {
    let searchDiv = $('<div>').addClass('uk-grid-small uk-child-width-1-6@s uk-flex-center uk-text-center');
    let searchCard = $('<div>').addClass('uk-card uk-card-default uk-card-body').attr('id', 'searchCard');
    let searchData = $('<p>').addClass('returnedData');
    let searchPhoto = $('<img>').attr('id', 'searchImage'); 
    let deleteButton = $('<button>').addClass('uk-button uk-button-secondary').attr('id', 'deleteButton').text('Delete');

    searchDiv.appendTo($('#searchResults'));
    searchCard.appendTo(searchDiv);
    searchData.html('Name: ' + data.name + '<br> ' + 'ID: ' + data.id + '<br>' + data.location).appendTo(searchCard);
    searchPhoto.attr('src', data.image).appendTo(searchCard); 
    deleteButton.appendTo(searchCard);

    $('#deleteButton').on('click', function(evt) {
        evt.preventDefault(); 
        let deleteId = sessionStorage.getItem('deleteId'); 
        
        $.ajax({
            method: "delete",
            url: "/api/delete/" + deleteId
        })
        .then(
            function(delData) {
                let deleted = $('<div>').addClass('uk-alert-success').attr('uk-alert', '').attr('id', 'deletedDiv');
                deleted.appendTo($('#alertHere'));
                let anchor = $('<a>').addClass('uk-alert-close').attr('uk-close', '');
                anchor.appendTo(deleted);
                let successMessage = $('<p>').text("Your dog has been deleted");
                $('#searchResults').hide();
                successMessage.appendTo(deleted);
                setTimeout(function () {
                    window.location.href = "http://localhost:3000/search";
                 }, 3000);
            }
          );
    });
}
