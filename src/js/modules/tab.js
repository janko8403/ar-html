export default function tabs () {

	function checkTab() {
	    var toggle = $('a.toggle[href^="#"]');
	    var active = $('a.toggle');

	    toggle.on('click', function(e) {
	        e.preventDefault();
	        
	        active.removeClass('active');
	    
	        $(this).addClass('active');
	    });
	};
	checkTab();

}