const dataID = sessionStorage.getItem('key');
$(document).ready(function () {
    if (window.location.pathname === "/puppies") {
        $.get("/api/puppies", function (data) {
            addSlides(data);
            $('.likeButton').on('click', function (evt) {
                evt.preventDefault();
                sessionStorage.setItem('key', (this.id));
            });
        })
    } else if (window.location.pathname === "/adopt") {
        $.get("/api/puppies/" + dataID, function (data) {
            renderToPage(data);
        })
    }
});

function addSlides(data) {
    for (let i = 0; i < data.length; i++) {
        let likeButton = $('<button>');
        let slides = $('<li>');
        let image = $('<img>');
        let nameDiv = $('<div>');
        let nameText = $('<h3>');
        slides.addClass('photoSlides').appendTo($('#slideshow'));
        image.attr('src', data[i].image).addClass('slideshowPhotos');
        image.appendTo(slides);
        nameDiv.addClass('uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom').attr('id', 'overlay');
        nameDiv.appendTo(slides);
        nameText.addClass('uk-margin-remove').text(data[i].name);
        nameText.appendTo(nameDiv);
        likeButton.addClass('likeButton uk-button uk-button-default').attr('id', data[i].id).attr('aria-hidden', 'false').text('Choose me!');
        likeButton.attr('onclick', "location.href='../adopt';");
        likeButton.appendTo(nameDiv);
    }
}

function renderToPage(data) {
    let heading = $('<h2>').addClass('aboutHeading');
    let photo = $('<img>');
    let gender = $('<p>').addClass('aboutText');
    let breed = $('<p>').addClass('aboutText');
    let age = $('<p>').addClass('aboutText');
    let info = $('<p>').addClass('aboutText');
    let location = $('<p>').addClass('aboutText');
    heading.text(data.name).appendTo($('#cardOne'));
    photo.attr('src', data.image).addClass('dogPhoto').attr('id', 'profileImageOnPage').appendTo($('#cardOne'));
    gender.text('Gender: ' + data.gender).appendTo($('#cardOne'));
    breed.text('Breed: ' + data.breed).appendTo($('#cardOne'));
    age.text('Age: ' + data.age).appendTo($('#cardOne'));
    if (data.info !== null) {
        info.text('Additional Info: ' + data.info).appendTo($('#cardOne'));
    }
    location.text('Shelter: ' + data.location).appendTo($('#cardOne'));
}


