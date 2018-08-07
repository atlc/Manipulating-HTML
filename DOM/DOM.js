document.addEventListener('DOMContentLoaded', function(){
    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        let colorStr = 'rgb(' + r + ', ' + g + ', ' + b +')';
        return colorStr;
    };

    let btn = document.createElement('button');
    let btnText = document.createTextNode('Click me!');
    let domButtonDiv = document.createElement('div');

    btn.appendChild(btnText);
    domButtonDiv.appendChild(btn);
    document.body.appendChild(domButtonDiv);

    btn.addEventListener('click', function(){
        alert('I hope you\'re having an excellent day!');
    });

    let textBoxBtn = document.getElementById('textbox-button');
    let textBox = document.getElementById('textbox');

    textBoxBtn.addEventListener('click', function(){
       alert(textBox.value);
    });

    let changeColorDiv = document.getElementById('color-swap-div');
    changeColorDiv.style.minHeight = '100px';

    changeColorDiv.addEventListener('mouseenter', function (){
        changeColorDiv.style.backgroundColor = getRandomColor();
    });

    changeColorDiv.addEventListener('mouseleave', function (){
        changeColorDiv.style.backgroundColor = '';
    });

    let pg = document.createElement('p');
    let pgText = document.createTextNode('CLICK ME AND SEE WHAT HAPPENS, PUNK');
    pg.appendChild(pgText);
    document.body.appendChild(pg);

    pg.addEventListener('click', function(){
        pg.style.color = getRandomColor();
    });

    let friendArr = ['Melissa','Amy','Matt','Brittney','John','Brennan','Molly','Kelley','Bristol','Hannah'];
    let listButton = document.getElementById('friendsButton');
    let friendsList = document.getElementById('friendsList');

    listButton.addEventListener('click', function() {
        friendArr.forEach(function(buddy) {
            let li = document.createElement('li');
            let liText = document.createTextNode(buddy.toString());
            li.appendChild(liText);
            friendsList.appendChild(li);
        });
    });
});