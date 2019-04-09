//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  //$('#getting-started').remove();
  // $('#affirm-core').remove();
  // $('#affirm-cards').remove();
  // $('#telesales').remove();
  // $('#on-site-messaging').remove();
  // $('#dashboard').remove();
  // $('#reporting').remove();
  // $('#development').remove();
  // $('#partners').remove();
  // $('#legal').remove();
  // $('#api-reference').remove();
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};