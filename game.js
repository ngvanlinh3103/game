var so_pt=prompt('nhap gia tri');
//in ra mang
for (var i=0;i<so_pt;i++){
    for (var j=0; j<so_pt;j++){
        let n=i.j;
        document.write('<button class="btn" id="'+i,j+'"></button>');
    }
    document.write('<br>');
}
/*function remove(a,b) {
    let c = a.toString() + b.toString();
    var d = [];
    for (var i = (a - 1); i <= (a + 1); i++) {
        if (i >= 0) {
            for (var j = (b - 1); j <= (b + 1); j++) {
                if (j >= 0) {
                    let x = "";
                    x = i.toString() + j.toString();
                    if (x != c) {
                        d.push(x);
                    }
                }
            }
        }
    }
    return d;
}*/

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

//su kien khi click
// var numbers=document.getElementsByClassName('btn');
// for (var i = 0; i <numbers.length; i++) {
//     numbers[i].addEventListener('click',function(){
//         var n=this.id;
//         var change1=change(n);
//         for (var j=0;j< change1.length;j++){
//             if(document.getElementById(change1[j]).classList.length > 1){
//                 document.getElementById(change1[j]).classList.remove('btn1');
//             }
//             else {
//                 document.getElementById(change1[j]).classList.add('btn1');
//             }
//         }
//
//         setTimeout(function(){
//             if(checkWin()) alert("Win");
//             },100);
//     });
// }
//
// function checkWin(){
//     var list_el = document.getElementsByClassName("btn");
//     for(var i =0; i<list_el.length; i++){
//         if(list_el[i].classList.length < 2){
//             return false;
//         }
//     }
//     return true;
// }

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