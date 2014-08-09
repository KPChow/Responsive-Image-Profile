var profileBox = {
	init: function() {
		profileBox.defineRows();
		profileBox.touchEvent();
		profileBox.openContent();
		profileBox.closePopUp();
	},

	defineRows: function() {
		// Define how many elements in a row
		var wrapper = $('.moduleProfiles');
    	var boxes = wrapper.children('.profile');
    	var boxSize = boxes.first().outerWidth(false);
		
		// get full width and add 4 to compbat rounding errors
	    var w = wrapper.outerWidth(false) + 4;
	    
	    // use math.floor to get base integer for number of columns
	    var breakat = Math.floor( w / boxSize); // Round the value to the nearest integer

	    // Wraps the list of profile pictures into a row
		var row = $(".moduleProfiles > .profile");
		for (var i = 0; i < row.length; i += breakat) {
			row.slice(i, i + breakat).wrapAll('<div class="profileRow" />');
		}
	},

	touchEvent: function() {
		$('.touch .openDescription').click(function(event) {
			event.preventDefault();

			if(!$(this).hasClass('disabled')){
				$('.profilePicture').css('opacity', 1);
				$('.profileDescription').hide();
				$(this).children().css('opacity', 0.2);
				$(this).next().show();
			}
		});
	},

	openContent: function() {
		$('.openProfileContent').click(function(event) {
			//alert($('.openProfileContent').index(this)+1);
			event.preventDefault();
			
			var profileNumber = $('.openProfileContent').index(this)+1;
			$('.moduleProfileContents').css('display', 'none');
			$('.moduleProfileContents').prependTo($('.profileContentWrapper'));

			//$('.profile-'+profileNumber).before('<div class="clear" />');

			$('.profile-'+profileNumber).css('display', 'block');
			$('.profile-'+profileNumber).insertAfter($(this).parents().eq(2));
			$('<div class="clear"></div>').insertBefore('.profile-'+profileNumber);

			$('.profile').css('background-color', '#FFFFFF');
			$(this).parents().eq(1).css('background-color', '#666666');
			$('.profilePicture').css('opacity', 0.3);
			$('.openDescription').addClass('disabled');
			$('.profileDescription').css('display', 'none');
			$(this).parent().css('display', 'block');
		});
	},

	closePopUp: function () {
		$('.closeProfile').click(function(event) {
			event.preventDefault();
			$('.moduleProfileContents').css('display', 'none');
			$('.moduleProfileContents').prependTo($('.profileContentWrapper'));
			$('.profilePicture').css('opacity', 1);
			$('.profileDescription').hide();
			$('.openDescription').removeClass('disabled');
			$('.profileDescription, .profile, .profilePicture').removeAttr('style');
			$('.moduleProfiles .clear').remove();
		});
	}
};

$(document).ready(function(){
	profileBox.init();
});

$(window).resize(function(){
	$('.profile').unwrap();
	$('.closeProfile').click();
	profileBox.defineRows();
});