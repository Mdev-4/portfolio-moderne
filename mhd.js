const $aboutLink = $('a.about');
const $aboutSection = $('#about');
const $portfolioLink = $('a.portfolio');
const $portfolioSection = $('#portfolio');
const $contactLink = $('a.contact');
const $contactSection = $('#contact');

// ajouter un gestionnaire d'événement de clic sur les liens
$aboutLink.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: $aboutSection.offset().top}, 500, function() {
    $aboutSection.addClass('active');
  });
});

$portfolioLink.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: $portfolioSection.offset().top}, 500, function() {
    $portfolioSection.addClass('active');
  });
});

$contactLink.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: $contactSection.offset().top}, 500, function() {
    $contactSection.addClass('active');
  });
});

// ajouter un gestionnaire d'événement de clic sur les icônes de fermeture
$('.fa-solid').on('click', function() {
  $(this).closest('section').removeClass('active');
});




