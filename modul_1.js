function portofel(){

var readline=require('readline-sync')
var bani=readline.question('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\nCati bani avem?: ')

var regex=/^[0-9]+$/;
verificare=true;

while(verificare){
   if(!regex.test(bani)){
    var bani=readline.question('Nu primim bani straini: ');
   }
   else if(parseInt(bani)==0){
    var bani=readline.question('Mai scoate: ');
   }
   else {verificare=false}
};
return parseInt(bani);
};


function cePariem(){
  var readline2=require('readline-sync');
  var pariu=(readline2.question('Pe ce pariem?: '));
  
  var regex=/^[0-9]+$/;
  verificare2=true;

  while(verificare2){
      if (pariu=="N") {
          x=pariu;
          verificare2=false;
      }
      else if(pariu=="R") {
          x=pariu;
          verificare2=false;
      }
      else if(pariu=="Cashout"){
          x=pariu;
          verificare2=false;
     
      }
      else if(pariu >= 0 && pariu <= 36 && regex.test(pariu)){
          x=pariu;
          verificare2=false;
      }
      else if(pariu=="Sector1" || pariu=="Sector2" || pariu=="Sector3"){
          x=pariu;
          verificare2=false;
      }
      else {
          var pariu=readline2.question('Ce pariu e ala?: ');
      };
      };
      return x;
};


function catPariem(x){
    var readline3=require('readline-sync');
    var miza = readline3.question('Pariem vreo: ');
    
    var regex=/^[0-9]+$/;
    verificare2=true;
    
    while(verificare2){
       if(!regex.test(miza)){
        var miza=readline3.question('Nu merge cu bani straini: ');
       }
       else if(parseInt(miza)>100){
        var miza=readline3.question('Nici chiar asa - maxim 100: ');
       }
       else if(miza>x){
        var miza=readline3.question('Nu jucam pe datorie: ');
       }
       else if(parseInt(miza)==0){
        var miza=readline3.question('Pariezi nimic - castigi nimic: ');
       }
       else {verificare2=false;}
    }
    return parseInt(miza);
};


function rezultat(x){
    var r=Math.round(Math.random()*36);
    var t="";
    let regex=/^[0-9]+$/;
    

    if(x=="Sector1"||x=="Sector2"||x=="Sector3"){
        if(r<13 && r>0){
          t="Sector1";
        }
        else if (r<25 && r!==0){
          t="Sector2";
        }
        else if (r<37 && r!==0){
          t="Sector3";
        };
    }
    else if( regex.test(x) || x=="R" || x=="N") { 
        if((r>0 && (r<11 && r%2==0)) || (r>10 && (r<18 && r%2==1)) || (r>18 && (r<29 && r%2==0)) || (r>27 && (r<36 && r%2==1))){
          t="N";
        }
        else if(r==0){
          t="V";
          }
        else {
          t="R";
        };
    };
   
     console.log (`Bila a picat pe ${r} ${t}`);
     return r;
};


function evaluareRezultat(x,y){

    var win=true;

     if((x=="R" || x=="N")&& y!=0) { 
        if((y>0 && (y<11 && y%2==0)) || (y>10 && (y<18 && y%2==1)) || (y>18 && (y<29 && y%2==0)) || (y>27 && (y<36 && y%2==1))){
          win = x=="N";
        }
        else {
        win = x=="R";
        }
     } 

     else if((x=="Sector1"||x=="Sector2"||x=="Sector3") && y!==0){
        if(y<13){
          win = x=="Sector1";
        }
        else if (y<25){
          win = x=="Sector2";
        }
        else if(y<37){
          win = x=="Sector3";
        };
}
     else {win=x==y;};
    
   
   return win;

};


function calculeazaCastig(x,y,z){
  var castig=0;

  if((y=="R" || y=="N") && z==true){
    castig=x;
  }
  else if((y=="Sector1" || y=="Sector2" || y=="Sector3") && z==true){
  
    castig=2*x;
  }
  else if(z==true) {
      castig=35*x;
  }

return castig;
};

module.exports.functiePortofel=portofel;
module.exports.functieCePariem=cePariem;
module.exports.functieMiza=catPariem;
module.exports.functieRezultat=rezultat;
module.exports.functieEvaluare=evaluareRezultat;
module.exports.functieCastig=calculeazaCastig;