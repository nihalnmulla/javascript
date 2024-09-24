let hm1,cm1,jm1,bm1,total,avg,gr;

function average(){
    hm1 = +hm.value;
    cm1 = +cm.value;
    jm1 = +jm.value;
    bm1 = +bm.value;
    if(hm1 < 0 || hm1 > 100 || cm1 < 0 || cm1 > 100 || jm1 < 0 || jm1 > 100 || bm1 < 0 || bm1 > 100 || isNaN(bm1) || isNaN(hm1) || isNaN(cm1) || isNaN(jm1) ){
    alert("Please Enter Marks Between 1 to 100");
    }
    total = hm1 + cm1 + jm1 + bm1;
    avg = total / 4;
    if(avg >= 90 && avg < 100){
        gr = "A+";
    }
    else if(avg >= 80 && avg < 90){
        gr = "A";
    }
    else if(avg >= 70 && avg < 80){
        gr = "B+";
    }
    else if(avg >= 60 && avg < 70){
        gr = "B";
    }
    else if(avg >= 50 && avg < 60){
        gr = "C";
    }
    else if(avg >= 40 && avg < 50){
        gr = "D";
    }
    else{
        gr = "Fail";
    }

    tm.value = total;
    av.value = avg;
    grd.value = gr;

}

function show(){
    var dataDiv = document.getElementById('data');
    dataDiv.style.display = 'block';
}
