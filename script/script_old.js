var OurPeople = {
	settings: {
		Module: '.module',
		//ProfileName: '.profileName',
		//ProfilePicture: '.profilePicture',
		OpenContent: '.openContent',
		moduleProfiles: '.descriptionContentWrapper'
	},

	defineRows: function () {
		// Define how many elements in a row
		var wrapper = $('.moduleContainer');
    	var boxes = wrapper.children('.module');
    	var boxSize = boxes.first().outerWidth(false);

	    var w = wrapper.width();
	    var breakat = Math.floor( w / boxSize); // Round the value to the nearest integer

	    // Wraps the list of profile pictures into a row
		var row = $(".moduleContainer > .module");
		for (var i = 0; i < row.length; i += breakat) {
			row.slice(i, i + breakat).wrapAll('<div class="moduleRow" />');
		}	        
	},

	/*hoverEffect: function() { 
		// Hides profile picture on mouse over
		$(OurPeople.settings.Module).mouseenter(function() {
			$(this).children(OurPeople.settings.ProfilePicture).hide();
			$(this).children(OurPeople.settings.ProfileName).show();
		}).mouseleave(function() {
			$(this).children(OurPeople.settings.ProfilePicture).show();
			$(this).children(OurPeople.settings.ProfileName).hide();
		});
	},*/

	openContent: function() {
		$(OurPeople.settings.OpenContent).click(function(event) {
			event.preventDefault();
			alert($('.module').index(this)+1);

			var profileNumber = $('.module').index(this)+1;
			$(OurPeople.settings.moduleProfiles).css('display', 'none');
			//$(OurPeople.settings.moduleProfiles).prependTo($('.profileContentWrapper'));
			$('.profile-'+profileNumber).css('display', 'block');
			//$('.profile-'+profileNumber).insertAfter($(this).parent());
		});
	},

	closePopUp: function () {
		$('.closeBtn').click(function() {
			$(OurPeople.settings.moduleProfiles).css('display', 'none');
			//$(OurPeople.settings.moduleProfiles).prependTo($('.profileContentWrapper'));
		});
	}
}

$(document).ready(function () {
	OurPeople.defineRows();
	//OurPeople.hoverEffect();
	OurPeople.openContent();
	//OurPeople.closePopUp();
});

$(window).resize(function(){
	// Update the rows upon window resize
	$(OurPeople.settings.Module).unwrap();
	OurPeople.defineRows();
});