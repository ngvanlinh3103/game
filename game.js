var html_game = "";
var main_game = document.getElementById('game');

//nhap phan tu
do {
    var so_pt = prompt('nhap gia tri tu 2 den 9');
} while (so_pt < 2 || so_pt > 9)

//in ra mang
for (let i = 0; i < so_pt; i++) {
    for (let j = 0; j < so_pt; j++) {
        html_game += '<button class="btn" id="' + i + '' + j + '"></button>';
    }
    html_game += '<br>';
}
main_game.innerHTML = html_game;

// tim id ben canh id dc click
function change(ab) {
    let ad = ab.toString();
    let e = ad.match(/[0-9]/)[0];
    let f = ad.match(/[0-9]$/)[0];
    let a = Number(e);
    let b = Number(f);

    /*console.log('a:'+a+' b:'+b);*/
    var d = [];
    for (var i = (a - 1); i <= (a + 1); i++) {
        if (i >= 0 && i < so_pt) {
            for (var j = (b - 1); j <= (b + 1); j++) {
                if (j >= 0 && j < so_pt) {
                    let x = "";
                    x = i.toString() + j.toString();
                    if (x != ab) {
                        d.push(x);
                    }
                }
            }
        }
    }

    return d;
}

//check win khi cung màu
function checkwin() {
    var ele = document.getElementsByClassName('btn');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].classList.length < 2) {
            return false;
        }
    }
    return true;
}

//chuyen màu khi click
var elements = document.getElementsByClassName('btn');

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        //console.log(change(elements[i].id));
        var n = this.id;
        var changes = change(n);
        for (let j = 0; j < changes.length; j++) {
            if (document.getElementById(changes[j]).classList.length < 2) {
                document.getElementById(changes[j]).classList.add('btn1');
            } else {
                document.getElementById(changes[j]).classList.remove('btn1');

            }

        }
        setTimeout(function () {
            if (checkwin()) {
                if (confirm('win :)) thời gian: ' + document.getElementById('seconds').innerText + ':' + document.getElementById('tens').innerText)) {
                    location.reload();
                }
            }
        }, 50);

    })
}

//time
window.onload = function () {
    let second = 0;
    let ten = 0;
    var appendTens = document.getElementById('tens');
    let appendSeconds = document.getElementById('seconds');
    let interval;
    let minute = 0;
    interval = setInterval(star, 10);

    function star() {
        ten++;
        if (ten < 10) {
            appendTens.innerHTML = "0" + ten;
        }
        if (ten > 9) {
            appendTens.innerHTML = ten;
        }
        if (ten > 99) {
            second++;
            ten = 0;
            appendSeconds.innerHTML = minute + ':0' + second;
            appendTens.innerHTML = "0" + ten;
        }
        if (second > 9) {
            appendSeconds.innerHTML = minute + ':' + second;
        }
        if (second > 59) {
            minute++;
            second = 0;
            appendSeconds.innerHTML = minute + ":0" + second;

        }
    }
}