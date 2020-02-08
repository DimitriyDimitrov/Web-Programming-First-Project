$(document).ready(function(){
  /* Command Variables */
  var $mainNav = $('#mainNavigation');
  var isMenuVisible = false;
  $('.burgerMenu').click(function () {
  if(isMenuVisible) {
    SmainNav.hide(300);
    isMenuVisible = false;
  } else{
    $mainNav.show(300);
    isMenuVisible = true;
  }
  });
  /* Projects Select */
  var $projects = $('.projects');
  $projects.isotope({
      itemSelector: '.projects_item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid_sizer'
      }
    }
  );
  /* ProjectsFilter Get */
  $('.projectsFilterItem').click(function(event){
    event.preventDefault();
    var type = $(this).data('type');
    $('.projectsFilterItem').removeClass('selected');
    $(this).addClass('selected');
    if(type!=='*'){
      type = '.'+type
    }
  /* ProjectsFlterIsotope */
  $projects.isotope({
    filter: '.'+type
  });
  });



});