$.postJSON = function(url, data, callback) {
    $.post(url, data, callback, "json");
}

$(document).ready(function() {
    $('.delete').click(function(l) {
        if (!confirm('Are you sure you want to delete this entry?')) {
            return
        } 
        var entry = $(this).parents('.entry');
        $.postJSON('/delete', {key: entry.attr('id')}, function(data) {
            if (data.success) {
                entry.slideUp();
            }
        });
    });
	$('.save').click(function(l) {
		var entry = $(this).parents('.entry');
		$.postJSON('/save', {key: entry.attr('id')}, function(data) {
			if (data.success) {
				entry.slideUp();
			}
		});
	});
});
