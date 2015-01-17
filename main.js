$(document).ready(function() {
    var content = $('.content');
	
    $('#trigger').live('click', function() {
        $(this).toggle(function() {
            $(this).text('Hide Detail');
            content.removeClass('reverse').addClass('running');
        }, function() {
             $(this).text('Show Detail');
            content.removeClass('running').addClass('reverse');
        }).trigger('click');
    });
});