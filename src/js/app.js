import $               from './vendors/jquery-2.2.4.min';
// window.$ = window.jQuery = jQuery;

import scrollSection    from './modules/scroll-document';
import tabs            	from './modules/tab';
import sendForm  		from './modules/form';
import funTab  		    from './modules/functions';
import slick  		    from './modules/slick';


class App {
    constructor () {
        scrollSection();
        tabs();
        sendForm();
        funTab();
        slick();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App(); 
});
