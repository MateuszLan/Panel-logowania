const express=require('express')
const port=3000
const path = require("path");
const wlasciwyLogin='Admin';
const wlasciweHaslo='Admin';
const bodyParser = require('body-parser');
const app=express()
const alert = require('alert'); 
let liczbaLogowan=0
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));

// let tab=["kot","kon","pies","smok"];
// wielkoscTablicy=tab.length;


app.get('/',(req,res) => {
    if(zalogowany==true)
    res.sendFile(path.join(__dirname,'./public/zalogowany.html'));
    else
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
let zalogowany=false;
app.post('/zalogowany', async (req, res) => {
    
        let pobranyLogin=req.body.login;
        let pobraneHaslo=req.body.haslo;
        if(wlasciwyLogin==pobranyLogin && wlasciweHaslo==pobraneHaslo)
        {
            liczbaLogowan++;
            if(liczbaLogowan==1)
            alert("Pomyślnie zalogowano : "+liczbaLogowan+" raz");
            else
            alert("Pomyślnie zalogowano : "+liczbaLogowan+" razy");
            res.sendFile(path.join(__dirname,'./public/zalogowany.html'));
            zalogowany=true;
        }
        else if (pobraneHaslo=="" || pobranyLogin==""){
            alert("Uzupełnij dane.");
        
        }
        else{
            alert("Zły login/hasło.");
            
        }
        }
);


app.get('/zalogowany',(req,res) => {
    if(zalogowany==false)
    res.sendFile(path.join(__dirname,'./public/index.html'));

});
app.get('/index',(req,res) => {
    if(zalogowany==true)
    res.sendFile(path.join(__dirname,'./public/zalogowany.html'));
    
});
app.post('/index',(req,res) => {
    zalogowany=false;
    res.sendFile(path.join(__dirname,'./public/index.html'));
    
});


// let alertt;
//  function wGore(){
//     let alertt="Tego obrazka nie można już wyżej podnieść!";
//     strzalki(-2,alertt,10,10,319,10,10,596,319,596,0,1,2);
    
//  }
//  app.post('/wLewo',(req) => {
//     let alertt="Tego obrazka nie można już przesunąć bardziej w lewo!";
//     let radio=req.body.wybor;
//     if(radio!='smok' && radio!='kot' && radio!='kon' && radio!='pies')
//     alert("Zaznacz jakiś obrazek, żeby go przenieść!");
//     else
    
//     strzalki(-1,alertt,10,10,10,596,319,10,319,596,0,2,1,req,radio);
// });
    
    
//  function wDol(){
//     let alertt="Tego obrazka nie można już niżej opuścić!";
//     strzalki(2,alertt,319,10,10,10,319,596,10,596,2,3,0);
    
//  }
//  function wPrawo(){
//     let alertt="Tego obrazka nie można już przesunąć bardziej w prawo!";
//     strzalki(1,alertt,10,596,10,10,319,596,319,10,1,3,0);
    
//  }





//  function strzalki(wartosc,alertt,wartosc1,wartosc2,wartosc3,wartosc4,wartosc5,wartosc6,wartosc7,wartosc8,nie,nie2,tak,req,radio){
    
    
        
//              for (let index = 0; index < wielkoscTablicy; index++) {
//                 if(radio==tab[index])
//                 {
//                     if(index==nie || index==nie2)
//                     {
//                         alert(alertt);
//                          break;
//                      }
//                      else{
                        
//                          kopia=tab[index+wartosc];
//                          tab[index+wartosc]=radio;  
//                     tab[index]=kopia;
//                     for (let j = 0; j < wielkoscTablicy; j++) {
//                         if(tab[index]==req.body.wybor){ 
//                      przycisk=req.body.wybor;
//                     //  zdjecie=req.body.wybor;
                     
                    
//                      if(index==tak){
//                         przycisk[j].style.setProperty('top', wartosc3+"px");
//                         przycisk[j].style.setProperty('left', wartosc4+"px");
//                         // zdjecie[j].style.top=wartosc3+'px';
//                         // zdjecie[j].style.left=wartosc4+'px';
                        
//                         // zdjecie[j].style.setProperty('transform', 'rotate(360deg)');
//                     }
//                     else{
//                         przycisk[j].style.setProperty('top', wartosc7+"px");
//                         przycisk[j].style.setProperty('left', wartosc8+"px");
//                         // zdjecie[j].style.top=wartosc7+'px';
//                         // zdjecie[j].style.left=wartosc8+'px';
                        
//                         // zdjecie[j].style.setProperty('transform', 'rotate(360deg)');
//                     }
//                  }
//                  if(tab[index+wartosc]==req.body.wybor){
//                      przycisk2=req.body.wybor;
//                     //  zdjecie2=req.body.wybor;
                     
//                      if(index==tak){
//                         // zdjecie2[j].style.setProperty('transform', 'rotate(360deg)');
//                         przycisk2[j].style.setProperty('top', wartosc1+"px");
//                         przycisk2[j].style.setProperty('left', wartosc2+"px");
//                         // zdjecie2[j].style.top=wartosc1+'px';
//                         // zdjecie2[j].style.left=wartosc2+'px';
                        
//                      }
//                      else{
//                         przycisk2[j].style.setProperty('top', wartosc5+"px");
//                         przycisk2[j].style.setProperty('left', wartosc6+"px");
//                         // zdjecie2[j].style.top=wartosc5+'px';
//                         // zdjecie2[j].style.left=wartosc6+'px';
                        
//                         // zdjecie2[j].style.setProperty('transform', 'rotate(360deg)');
//                      }
//                  }

//                     }
//                     break;}
//                 }
//              }  
 
//  }

app.listen(port)