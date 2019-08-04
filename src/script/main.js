var mainContent = document.querySelector('#main');
var eventsLink = document.querySelector('.events-link');

eventsLink.addEventListener('click', function (e) {
  e.preventDefault();
  mainContent.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
});



