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

    $('body').append('<p>jQuery makes things a lot cleaner!</p>');
    
    $('p').click(function() {
        $(this).css('color', getRandomColor());
    });

    $('body').append('<button id=\'myNameButton\'>My Name</button>');
    $('body').append('<div id=\'myNameDiv\'></div>');

    $('#myNameButton').click(function(){
        $('#myNameDiv').append('<span>Andrew</span>');
    });

    let friendArr = ['Melissa','Amy','Matt','Brittney','John','Brennan','Molly','Kelley','Bristol','Hannah'];
    
    $('#friendButton').click(function(){
        friendArr.forEach(function(friendo){
            $('#friendList').append('<li>'+friendo+'</li>');
        });
    });
});