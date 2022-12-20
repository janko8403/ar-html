import lottie  from '../vendors/lottie.min';

export default function animation() {
    const canvas_1 = document.getElementById('canvas-1');
    const canvas_2 = document.getElementById('canvas-2');
    
    if (typeof (canvas_1) !== 'undefined' && canvas_1 !== null) {
        const params_1 = {
            container: canvas_1,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'animations/pomieszczenie.json',
            rendererSettings: {
                scaleMode: 'noScale',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        };

        lottie.loadAnimation(params_1);
    }

    if (typeof (canvas_2) !== 'undefined' && canvas_2 !== null) {
        const params_2 = {
            container: canvas_2,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '../animations/pomieszczenie.json',
            rendererSettings: {
                scaleMode: 'noScale',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        };

        lottie.loadAnimation(params_2);
    }

    $(window).on('scroll', function() {
        if($(this).scrollTop()>=$('#lottie').position().top){
            lottie.play();
        }
    })

}
