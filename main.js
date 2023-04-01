//variables
let inds = document.querySelector("#IND_Score");
let paks = document.querySelector("#PAK_Score");
let indw = document.querySelector("#IND_Wic");
let pakw = document.querySelector("#PAK_Wic");
let dot = document.querySelector("#dot");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let six = document.querySelector("#six");
let wic = document.querySelector("#wic");



let b2 = 30;
let startM = document.querySelector('#start');
startM.addEventListener('click', play);

function play() {
  document.body.style.backgroundImage = "url('./images/onstart.jpg')";
    if (startM.innerText == "Start Match") {
        document.querySelector('#status').textContent = 'India is Playing';
        document.querySelector('#balls').textContent = b2;
        document.querySelector('#text').textContent = ' Balls Left';
        startM.innerText = "Reset";
        game();
    }
    else if (startM.innerText == "Reset") {
        location.reload();
    }
}

function updateScore(s) {
    if (document.querySelector('#status').textContent == 'India is Playing' && startM.innerText == "Reset") {
        if (s > -1) {
            let a = Number(inds.textContent);
            a = a + s;
            document.querySelector('#runx').textContent = s;
            inds.textContent = a;
            let balls = Number(document.querySelector('#balls').textContent);
            balls = balls - 1;
            if (balls >= 2)
                document.querySelector('#balls').textContent = balls;
            else if (balls == 1) {
                document.querySelector('#balls').textContent = balls;
                document.querySelector('#text').textContent = ' Ball Left';
            }
            else {
                play2();
            }
        }
        else {
            let a = (-1) * Number(indw.textContent);
            a = a + s;
            document.querySelector('#runx').textContent = "Wicket !"
            if (a != -10) {
                indw.textContent = (-1) * a;
                let balls = Number(document.querySelector('#balls').textContent);
                balls = balls - 1;
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
                else {
                    play2();
                }
            }
            else {
                indw.textContent = (-1) * a;
                play2();
            }
        }
    }
}

function game() {
    if (startM.innerText == "Reset") {
        one.addEventListener('click', function () {
            updateScore(1)
        })
        two.addEventListener('click', function () {
            updateScore(2)
        })
        three.addEventListener('click', function () {
            updateScore(3)
        })
        four.addEventListener('click', function () {
            updateScore(4)
        })
        six.addEventListener('click', function () {
            updateScore(6)
        })
        dot.addEventListener('click', function () {
            updateScore(0)
        })
        wic.addEventListener('click', function () {
            updateScore(-1)
        })
    }
    else
        play();
}

function play2() {
    document.querySelector('#status').textContent = 'Pakistan is Playing';
    document.querySelector('#balls').textContent = b2;
    document.querySelector('#text').textContent = ' Balls Left';
    game2();
}

function updateScore2(s) {
    if (document.querySelector('#status').textContent == 'Pakistan is Playing' && startM.innerText == "Reset") {
        if (s > -1) {
            let a = Number(paks.textContent);
            let b = Number(inds.textContent);
            a = a + s;
            document.querySelector('#runx').textContent = s;
            paks.textContent = a;
            let balls = Number(document.querySelector('#balls').textContent);
            balls = balls - 1;
            if (balls > 0 && a <= b) {
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
            }
            else {
                if (balls == 0 && a < b) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'India Won';
                    document.body.style.backgroundImage = "url('./images/indiawon.jpg')";
                }
                else if (balls == 0 && a == b) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'Tie Match';
                    document.body.style.backgroundImage = "url('./images/fireworks-pyronale-berlin-event.jpg')";
                }
                else {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'Pakistan Won';
                    document.body.style.backgroundImage = "url('./images/pakwon.webp')";
                }

            }
        }
        else {
            let a = (-1) * Number(pakw.textContent);
            a = a + s;
            document.querySelector('#runx').textContent = "Wicket !"
            if (a != -10) {
                pakw.textContent = (-1) * a;
                let balls = Number(document.querySelector('#balls').textContent);
                balls = balls - 1;
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
            }
            else {
                pakw.textContent = (-1) * a;
                let a1 = Number(paks.textContent);
                let b1 = Number(inds.textContent);
                if (a1 < b1) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'India Won';
                    document.body.style.backgroundImage = "url('./images/indiawon.jpg')";
                }
                else if (a1 == b1) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'Tie Match';
                    document.body.style.backgroundImage = "url('./images/fireworks-pyronale-berlin-event.jpg')";
                }
            }
        }
    }

}

function game2() {
    one.addEventListener('click', function () {
        updateScore2(1)
    })
    two.addEventListener('click', function () {
        updateScore2(2)
    })
    three.addEventListener('click', function () {
        updateScore2(3)
    })
    four.addEventListener('click', function () {
        updateScore2(4)
    })
    six.addEventListener('click', function () {
        updateScore2(6)
    })
    dot.addEventListener('click', function () {
        updateScore2(0)
    })
    wic.addEventListener('click', function () {
        updateScore2(-1)
    })
}
