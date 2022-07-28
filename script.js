function memulai(){if(fungsiAwal==0){audio.play();fungsiAwal=1;suratin.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(mulainama,700)}}
  
  async function mulainama() {
           suratin.style="display:none";ket.style="display:none";
           Content.style = "opacity:1;margin-top:2vh";
           bodyblur.style="opacity:.7";
           wallpaper.style="transform: scale(1);";
           fotoakhir.style="display:inline-flex;";
           setTimeout(ftmuncul,200);
           setTimeout(kethalo,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotoakhir.style="display:inline-flex;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotoakhir.src = fotoakhir2.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==2){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  function fthilang(){fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  
  function kethalo(){if(ahalo<vketikhalo.length){halo.innerHTML += vketikhalo.charAt(ahalo);ahalo++;setTimeout(kethalo,60);}if(ahalo==vketikhalo.length){setTimeout(bqmuncul,200);}}
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();fungsi=1;}
  
  function tombol(){ftom=1;Tombol.style="opacity:1;transform: scale(1);";}
  function multifungsi(){if(ftom==1){menuju();}}
  async function menuju(){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}
  audio = new Audio('' + linkmp3.src);
  
  function otomatis2() {
     fthilang();ftganti=3;setTimeout(ftmuncul,400);
     fungsi=2;
     wallpaper.style="transform: scale(1);";
     kalimatd.style="display:none";kolombaru.style="display:none";
     if(rnkado==1){}
     if(rnkado==2){kado1.innerHTML = kado2.innerHTML;}
     if(rnkado==3){kado1.innerHTML = kado3.innerHTML;}
     befanim2();setTimeout(anim2,300);
  } 
  function befanim2(){kado1.style="position:relative;opacity:1;transform:scale(.3);";} 
  function anim2() {kado1.style="position:relative;opacity:1;transform:scale(1);";}
  
  async function lanjut(){
      fthilang();ftganti=2;fungsi=2;
      setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(2);";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;margin-top:0;";
      Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      kalimatc.innerHTML = "";
      kalimate.style="opacity:0;transform: scale(.3);transition:all .3 ease;";
      kalimatf.style="opacity:0;transform: scale(.3);transition:all .3 ease;";
      kalimatd.style="position:relative;opacity:1;transform:scale(1);";
      kolombaru.style="position:relative;opacity:1;transform:scale(1);";
   }

vketik1=kalimat.innerHTML;kalimat.innerHTML = "";var aa=0,vketik1;
function mulaiketik1(){
  if(aa<vketik1.length){
    kalimat.innerHTML += vketik1.charAt(aa);aa++;
    setTimeout(mulaiketik1,100);
  }
  if(aa==vketik1.length){setTimeout(befanim,1500);setTimeout(gantikalimat2,1800);}
}
vketiklove=kalove.innerHTML;kalove.innerHTML = "";var al=0,vketiklove;
function mulaiketik2(){
  if(al<vketiklove.length){
    kalove.innerHTML += vketiklove.charAt(al);al++;
    setTimeout(mulaiketik2,200);
  }
  if(al==vketiklove.length){setTimeout(befanim,700);setTimeout(hilangkalove,700);setTimeout(gantikalimat4,1100);}
}
function hilangkalove(){kalove.style="opacity:0";}

vketikAkhir=kalimatg.innerHTML;kalimatg.innerHTML = "";var ak=0,vketikAkhir;
function mulaiketikAkhir(){
  if(ak<vketikAkhir.length){
    kalimatg.innerHTML += vketikAkhir.charAt(ak);ak++;
    setTimeout(mulaiketikAkhir,300);
  }
  if(ak==vketikAkhir.length){setTimeout(tombol,700)}
}

  vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
  vketik3=kalimatc.innerHTML;kalimatc.innerHTML = "";
  vketik4=kalimatd.innerHTML;kalimatd.innerHTML = "";
  vketik5=kalimate.innerHTML;kalimate.innerHTML = "";
  vketik6=kalimatf.innerHTML;kalimatf.innerHTML = "";
  
  function gantikalimat2(){setTimeout(anim,100);mulaict();kalimat.innerHTML = "";kalimatb.innerHTML=vketik2;}
  function gantikalimat3(){fthilang();ftganti=1;setTimeout(ftmuncul,300);setTimeout(anim,100);setTimeout(mulaiketik2,1200);kalimatb.innerHTML = "";kalimatc.innerHTML=vketik3;}
  function gantikalimat4(){fthilang();ftganti=2;setTimeout(ftmuncul,300);kalove.innerHTML="";setTimeout(anim,100);setTimeout(mulaict2,1000);kalimatc.innerHTML = "";kalimatd.innerHTML=vketik4;}
  function gantikalimat5(){ftganti=1;ftmuncul();befanim3();setTimeout(gantikalimat6,2000);kalimatd.innerHTML = "";kalimate.innerHTML=vketik5;}
  function gantikalimat6(){fthilang();ftganti=2;setTimeout(ftmuncul,300);befanim4();setTimeout(mulaiketikAkhir,1500);kalimatf.innerHTML=vketik6;}
  
  function befanim(){
    kalimat.style="opacity:0;transition:all .3 ease;";
    kalimatb.style="opacity:0;transition:all .3 ease;";
    kalimatc.style="opacity:0;transition:all .3 ease;";
    kalimatd.style="opacity:0;transition:all .3 ease;";
  } 
  function anim() {
    kalimat.style="";
    kalimatb.style="";
    kalimatc.style="";
    kalimatd.style="";
  }
  
  function befanim3(){
    kalimate.style="";
   }
   function befanim4(){
    kalimatf.style="";
   }
  
  function mulaict(){
    var timeleft = 3;
    var downloadTimer = setInterval(function(){
    timeleft--;document.getElementById("ctimer").textContent = timeleft;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
      if(timeleft==0){
       befanim();setTimeout(gantikalimat3,300);
      }
    },1000);
  }
  
  function mulaict2(){
    var timeleft = 4;pewaktu.style="display:inline-flex";
    var downloadTimer = setInterval(function(){
    timeleft--;document.getElementById("ctimer2").textContent = timeleft;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
      if(timeleft==0){
       befanim();setTimeout(fthilang,200);setTimeout(gantikalimat5,500);
      }
    },1000);
  }
