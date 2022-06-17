var so_pt=prompt('nhap gia tri');
var html_game = "";
var main_game = document.getElementsByClassName('game');

//in ra mang
for (let i=0;i<so_pt;i++){
    for (let j=0; j<so_pt;j++){
        document.write('<button class="btn" id="'+i,j+'"></button>');
    }
    document.write('<br>');
}

// tim id ben canh id dc click
function change(ab) {
    let ad= ab.toString();
    let e=ad.match(/[0-9]/)[0];
    let f=ad.match(/[0-9]$/)[0];
    let a=Number(e);
    let b=Number(f);
    /*console.log('a:'+a+' b:'+b);*/
    var d = [];
    for (var i = (a - 1); i <= (a + 1); i++) {
        if (i >= 0 && i<so_pt) {
            for (var j = (b - 1); j <= (b + 1); j++) {
                if (j >= 0 && j<so_pt) {
                    let x = "";
                    x = i.toString() + j.toString();
                    if (x != ab) {
                        d.push(x);
                    }
                }
            }
        }
    }
    //console.log('phan tu nhận khi click:'+d);
    return d;
}

function check(){
    var ele=document.getElementsByClassName('btn');
    for (let i = 0; i < ele.length; i++) {
        if(ele[i].classList.length < 2){
            return false;
        }
    }
    return true;
}
var elements= document.getElementsByClassName('btn');
for (let i=0; i<elements.length;i++){
    elements[i].addEventListener('click',function (){
        //console.log(change(elements[i].id));
        var n=this.id;
        var changes=change(n);
        for (let j = 0; j < changes.length; j++) {
            if(document.getElementById(changes[j]).classList.length < 2 ){
                document.getElementById(changes[j]).classList.add('btn1');
            }
            else {
                document.getElementById(changes[j]).classList.remove('btn1');

            }

        }
        setTimeout(function (){
            if (check()){
                alert('win');
            }
        }, 1000);

    })
}