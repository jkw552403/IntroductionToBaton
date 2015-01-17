$(document).ready(function() {
    var content = $('.content');
	
             $(this).text('Show Detail');
            content.removeClass('running').addClass('reverse');
        }).trigger('click');
    });
});
