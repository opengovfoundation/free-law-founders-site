$(document).ready(function() {
  // We do some content juggling on the "Who we are" page.
  if($('.who-we-are').length > 0) {
    // Hide the members' content
    $('.member .content').hide();

    setupMembersContent();
    $('.member').click(revealContent)

    // Stop event propagation so clicking links won't close the member box.
    $('.member a').click(handleMemberClick);
  }
});

// If you want to handle resizing, you'll need to run this *every* time they
// resize *or* open/close a box. It's not really mission-critical so let's
// just do it once for now.

function setupMembersContent() {
  // Determine our ratio, and store it
  var ratio = Math.ceil(
    $('.member-list').width() / $('.member').first().outerWidth()
  );
  $('.member').each(function(i, elm) {
    elm = $(elm);
    // Add classes to tell us where the end of each row is.
    var position = i % ratio;

    // Store some data we can use later.
    elm.data('ratio', ratio);
    elm.data('count', i);

    // If our offset is 1, then we're at the end of a row.
    if(ratio - position === 1) {
      elm.after('<div class="content-box"></div>');
    }
  });
}

var windowTimer;
revealContent = function() {
  var elm = $(this);

  var oldOffsetTop = elm.offset().top;

  // If the current item is active, just close it.
  if(elm.hasClass('active')) {
    elm.removeClass('active');
    $('.content-box.open').removeClass('open');
  }

  // If not, we need to figure out which one to close.
  else {
    $('.member.active').removeClass('active');
    $(elm).addClass('active');

    var contentBox = elm.nextAll('.content-box').first();

    contentBox.html(elm.find('.content').html());

    // If any other content box is open, close it and open the correct one.
    if($('.content-box.open') !== elm.next('.content-box')) {
      $('.content-box.open').removeClass('open');
      contentBox.addClass('open');
    }


    /*
     * On smaller displays, the page will jump if they're closing a box
     * above the current item. As a result, we reset to the top of the
     * item they just clicked. Wait a little bit until the CSS animation
     * is complete.
     */
    if(elm.data('ratio') < 4) {
      if(windowTimer) {
        window.clearTimeout(windowTimer);
      }
      windowTimer = setTimeout(function() {
        var difference = oldOffsetTop - elm.offset().top;
        // 100 pixels is no big deal.
        if(difference > 100) {
          $(window).scrollTop(elm.offset().top);
        }
      }, 350);
    }
  }
}

handleMemberClick = function(e) {
  e.stopPropagation();
}



