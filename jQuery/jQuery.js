$(document).ready(function(){
    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        return 'rgb(' + r + ', ' + g + ', ' + b +')';
    };

    $('body').append('<button id=\'greetingBtn\'>Greetings!</button>');

    $('#greetingBtn').click(function(){
       alert('Hello from the jQuery side!'); 
    });

    $('#textboxBtn').click(function(){
        alert($('#textbox').val());
    });

    let $colorDiv = $('#color-swap-div');
    $colorDiv.css('min-height', '75px');

    $colorDiv.mouseenter(function() {
        $colorDiv.css('background-color', getRandomColor());
    });

    $colorDiv.mouseleave(function() {
        $colorDiv.css('background-color', '');
    });

});