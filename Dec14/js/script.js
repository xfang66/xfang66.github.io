function shiying(){


    // 元素赋值
    var fang = document.getElementsByClassName('fang');
    var twofang3 = document.getElementsByClassName('twofang3');
    var bie = document.getElementsByClassName('bie');
    var img = document.getElementsByTagName('img');


    // 判断手机端 or PC端
    if (window.matchMedia("(min-width: 990px)").matches) {

    var w=window.innerWidth;
    var zongkuan = w*0.8+60


    //设置防止元素过大
    if(zongkuan<1399){
        kuan = w*0.8*0.3333
        gao = w*0.8*0.6666+30
    }
    else{
        kuan = 446.33
        gao = 922.67
    }

    img[0].src = './img/image3.jpg';
    img[1].src = './img/image4.jpg';

    document.getElementById('box').style.width = zongkuan + "px"; 
    for (var i=0;i<fang.length;i++){
        fang[i].style.width = kuan + "px";
    }

    for (var i=0;i<twofang3.length;i++){
        twofang3[i].style.width = gao + "px";
    }

    for (var i=0;i<bie.length;i++){
        bie[i].style.width = kuan + "px";
    }

  
    } else {


    // 手机端
    document.getElementById('box').style.width = '80%'; 

    for (var i=0;i<fang.length;i++){
        fang[i].style.width = '100%';
    }
    
    for (var i=0;i<twofang3.length;i++){
        twofang3[i].style.width = '50%';
    }
    
    for (var i=0;i<bie.length;i++){
        bie[i].style.width = '50%';
    }

  
    img[0].src = './img/img1.jpg';
    img[1].src = './img/img2.jpg';
    

    }
}


window.onresize=shiying;