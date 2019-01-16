$(document).ready(function() {
	/* Select currently language */
	$('#langselect').val(DOCUMENTATION_OPTIONS['LANGUAGE']);
	
	/* Set alternate links */
	var langs = [ "en", "pt", "ru", "es", "de", "fr", "nl", "vi", "x-default" ];
	var pageURL = $(location).attr("href");
	pageURL = pageURL.replace("https://smartcash.readthedocs.io/" + DOCUMENTATION_OPTIONS['LANGUAGE'] , "");
	$.each(langs, function(index, value) {
		var link = document.createElement('link');
		link.rel = "alternate";
		link.hreflang = value;
		if (value == "x-default") {
			link.href = "https://smartcash.readthedocs.io/en/" + pageURL;
		} else if (value == "zh-Hans") {
			link.href = "https://smartcash.readthedocs.io/zh_CN" + pageURL;
		} else if (value == "zh-Hant") {
			link.href = "https://smartcash.readthedocs.io/zh_TW" + pageURL;
		} else {
			link.href = "https://smartcash.readthedocs.io/" + value + pageURL;
		}
		jQuery('head').append(link);
	});
});

$('#langselect').change(function(){
	var pageURL = $(location).attr("href");
	pageURL = pageURL.replace("https://smartcash.readthedocs.io/" + DOCUMENTATION_OPTIONS['LANGUAGE'], "");
	window.location.href = "https://smartcash.readthedocs.io/" + $('#langselect').val() + pageURL;
});
