$(document).ready(function() {
    $('#contactUsButton').click(function() {
        $('#contactFormContainer').slideToggle();
    });
});

$(document).ready(function() {
    $('.text-item').on('click', function() {
        var newImage = $(this).data('image');
        $('#displayed-image').attr('src', newImage);
    });
});

$(document).ready(function(){
    var $elements = $('.column img');
  
    function scrollToImage(index) {
      var $target = $elements.eq(index);
      var scrollPosition = $target.offset().left - $('.column').offset().left;
      $('.row').animate({
        scrollLeft: scrollPosition
      }, 800);
    }
  
    // Scroll to the first image initially
    scrollToImage(0);
  
    $('#btnOne').click(function() {
      scrollToImage(0);
    });
  
    $('#btnTwo').click(function() {
      var middleIndex = Math.floor($elements.length / 2);
      scrollToImage(middleIndex);
    });
  
    $('#btnFour').click(function() {
      scrollToImage($elements.length - 1);
    });
  
    // Add active class to the current button (highlight it)
    $('.btn').click(function() {
      $('.btn').removeClass('active');
      $(this).addClass('active');
    });
  });