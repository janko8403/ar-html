export default function sendForm() {

    function sendMail() {
        var contactForm = $('#contact-form');
        var contactForm_en = $('#contact-form_en');

        contactForm.validate({
            rules: {
                name: "required",
                agree: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 9,
                    maxlength: 12
                }
            },
            messages: {
                name: "Uzypełnij pole Imię",
                email: "Uzypełnij pole Email",
                agree: "Zaznacz zgodę",
                phone: {
                    required: 'Uzypełnij pole Telefon',
                    minlength: 'Min 9 znaków',
                    maxlength: 'Max 12 znaków',
                    digits: 'Musi być liczba'
                },
            },
        });

        contactForm_en.validate({
            rules: {
                name: "required",
                agree: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 9,
                    maxlength: 12
                }
            },
            messages: {
                name: "Fill this input",
                email: "Fill this input",
                agree: "Fill this input",
                phone: {
                    required: 'Fill this input',
                    minlength: 'Min 9',
                    maxlength: 'Max 12',
                    digits: 'Must be number'
                },
            },
        });

        var agree = $('.error-checkbox');
        var button = $('.button');

        $("#agree").prop("checked", false);

        $("#agree").click(function () {
            if ($(this).is(":checked")) {
                agree.removeClass('show-checkbox');
                button.attr('disabled', false);
                button.removeClass('disabled-cursor');
            } else {
                agree.addClass('show-checkbox');
                button.attr('disabled', true);
                button.addClass('disabled-cursor');
            }
        });

        contactForm.on('submit', function(e) {
            e.preventDefault();

            if (($("input[name*='agree']:checked").length)<=0) {
                agree.addClass('show-checkbox');
                button.attr('disabled', true);
                button.addClass('disabled-cursor');
            } else {
                agree.removeClass('show-checkbox');
                button.attr('disabled', false);
                button.removeClass('disabled-cursor');
            }

            if (contactForm.find('.error:visible').length) {
                setTimeout(function() { 
                    $('html, body').stop().animate({
                        scrollTop: $('#demo').offset().top
                    }, 1250);
                }, 300);
            }

            if (contactForm.find('.error-checkbox:visible').length) {
                setTimeout(function() { 
                    $('html, body').stop().animate({
                        scrollTop: $('#demo').offset().top
                    }, 1250);
                }, 300);
            }

            if (!contactForm.find('.error:visible').length) {
                $.ajax({
                    url: 'send/contact.php',
                    type: 'POST',
                    data: contactForm.serialize(),
                    success: function(response) {
                        if(response) {
                            showMsg('Dziękujemy za wysłanie wiadomości!');
                        }
                    },
                    error: function() {
                        showMsg('Błąd wysyłania wiadomości!');
                    }
                });
            }
        });

        contactForm_en.on('submit', function(e) {
            e.preventDefault();

            if (($("input[name*='agree']:checked").length)<=0) {
                agree.addClass('show-checkbox');
                button.attr('disabled', true);
                button.addClass('disabled-cursor');
            } else {
                agree.removeClass('show-checkbox');
                button.attr('disabled', false);
                button.removeClass('disabled-cursor');
            }

            if (contactForm_en.find('.error:visible').length) {
                setTimeout(function() { 
                    $('html, body').stop().animate({
                        scrollTop: $('#demo').offset().top
                    }, 1250);
                }, 300);
            }

            if (contactForm_en.find('.error-checkbox:visible').length) {
                setTimeout(function() { 
                    $('html, body').stop().animate({
                        scrollTop: $('#demo').offset().top
                    }, 1250);
                }, 300);
            }

            if (!contactForm_en.find('.error:visible').length) {
                $.ajax({
                    url: '../send/contact.php',
                    type: 'POST',
                    data: contactForm_en.serialize(),
                    success: function(response) {
                        if(response) {
                            showMsg('Thank you for sending a message!');
                        }
                    },
                    error: function() {
                        showMsg('Error sending messages!');
                    }
                });
            }
        });

        function showMsg(message) {
            setTimeout(function () {

                setTimeout(function () {
                    $('.send-alert').delay(500).fadeIn(500);
                    $('.send-alert').html(message);
                    $('input, textarea, checkbox').val('');
                }, 500);

                setTimeout(function () {
                        $('.send-alert').delay(2000).fadeOut(1000);
                }, 2000);

            }, 500);

        }
    }
    sendMail();

}