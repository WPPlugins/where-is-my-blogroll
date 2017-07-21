jQuery( document ).ready( function() {
	
	var LoaderText = jQuery('#wimb-rss-feed').data('loading-text');
	
	jQuery('#wimb-rss-feed').html(LoaderText);
	
	jQuery.ajax({
		url : wimb_ajax.ajax_url,
		type : 'post',
		data : {
			action : 'wimb_dashboard_widget_ajax_request'
		},
		success : function( response ) {
			jQuery('#wimb-rss-feed').html(response);
		}
	});
	
});