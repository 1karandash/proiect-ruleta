var sector1=[1,2,3,4,5,6,7,8,9,10,11,12];
var sector2=[13,14,15,16,17,18,19,20,21,22,23,24];
var sector3=[25,26,27,28,29,30,31,32,33,34,35,36];

var rosu=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
var negru=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
var verde=[0];


var ruleta3=verde.concat(sector1)
var ruleta2=ruleta3.concat(sector2)
var ruleta1=ruleta2.concat(sector3)

var regexBani=/^[0-9]+$/g
var regexBet=/^[0-9]+$/g
var regexPariu=/[0-9]|[0-9][0-9]/

var ruleta3=verde.concat(sector1)
var ruleta2=ruleta3.concat(sector2)
var ruleta1=ruleta2.concat(sector3)

var rezultat = Math.round(Math.random()*36);

var sectorX="";
if (rezultat<13 && rezultat!==0){sectorX="din sectorul 1"}
 else if(rezultat<25 && rezultat!==0){sectorX="din sectorul 2"}
 else if(rezultat<37 && rezultat!==0){sectorX="din sectorul 3"}
 else {sectorX="care nu face parte din niciun sector"}

var culoareX="";
if(rosu.includes(rezultat)){var culoareX="rosu"}
else if(negru.includes(rezultat)){var culoareX="negru"}
else{culoareX="verde"}


console.log("In acest joc avem urmatoarele optiuni de pariere:\n 'sector1' => Pariem ca rezultatul va fi un numar din intervalul [1;12] (CASTIG POTENTIAL = MIZA x3); \n 'sector2' => Pariem ca rezultatul va fi un numar din intervalul [13;24] (CASTIG POTENTIAL = MIZA x3); \n 'sector3' => Pariem ca rezultatul va fi un numar din intervalul [25;36] (CASTIG POTENTIAL = MIZA x3); \n 'rosu' => Pariem ca rezultatul va fi un numar rosu (CASTIG POTENTIAL = MIZA x2);\n 'negru' => Pariem ca rezultatul va fi un numar negru (CASTIG POTENTIAL = MIZA x2); \n 'n' => Pariem pe un singur numar n din intervalul [0,36] (CASTIG POTENTIAL = MIZA x36);" )

var readline2=require('readline-sync');
var baniidechirie=readline2.question('Bani: ');
 if(regexBani.test(baniidechirie)==false){console.log("Nu primim bani straini!")}
   else if(baniidechirie==0){
   console.log("Nu prea sunt bani... .")}
   else{
var baniiDeChirie=parseInt(baniidechirie)

var readline3=require('readline-sync');
var bett=readline3.question('Pariez vreo: ');
 if(regexBet.test(bett)==false){console.log("Nu primim bani straini!")}
 else if (bett==0){console.log("Pariul minim este de 1.")}
 else{
var bet=parseInt(bett);

if(bet>baniiDeChirie){
  console.log("Pariul este prea mare!")
}
else{

  var readline=require('readline-sync');
  var pariu=readline.question('Pariez pe: ');

function gamble(baniiDeChirie, bet, pariu){
  
 switch(pariu){
  case "rosu":if(rosu.includes(rezultat)){
    console.log("Rezultat =>" ,rezultat, culoareX+"\n                                                   AI CASTIGAT: "+bet*2);
    console.log("Bani: ",baniiDeChirie=baniiDeChirie+bet);}     


         else{
          console.log("Rezultat =>", rezultat, culoareX+ " (Adica ai pierdut:( )" ) 
           console.log("Bani: ", baniiDeChirie=baniiDeChirie-bet)};
           if(baniiDeChirie==0) {console.log("Nu mai sunt bani.")}

break;

   case "negru":if(negru.includes(rezultat)){
    console.log("Rezultat =>" ,rezultat, culoareX+"\n                                                   AI CASTIGAT: "+bet*2)
    console.log("Bani: ", baniiDeChirie = baniiDeChirie + bet)}
    
    
   else{
    console.log("Rezultat =>", rezultat, culoareX+ " (Adica ai pierdut:( )" ) 
    console.log("Bani: ", baniiDeChirie=baniiDeChirie-bet)
    if(baniiDeChirie==0) {console.log("Nu mai sunt bani.")}};
    
break;

  case "sector1": if(sector1.includes(rezultat)){
     console.log("Rezultat =>" ,rezultat, culoareX, sectorX+"\n                                                   AI CASTIGAT: "+bet*3)
      console.log("Bani: ", baniiDeChirie=baniiDeChirie+bet*2)
   }else{
    console.log("Rezultat =>", rezultat, culoareX, sectorX+" (Adica ai pierdut:( )")
      console.log("Bani: ", baniiDeChirie=baniiDeChirie-bet)
      if(baniiDeChirie==0) {console.log("Nu mai sunt bani.")}};
      
break;

  case "sector2": if(sector2.includes(rezultat)){
     console.log("Rezultat =>" ,rezultat, culoareX, sectorX+"\n                                                   AI CASTIGAT: "+bet*3)
      console.log("Bani: ", baniiDeChirie=baniiDeChirie+bet*2)

    }else{

      console.log("Rezultat =>", rezultat, culoareX, sectorX+" (Adica ai pierdut:( )")
      console.log("Bani: ", baniiDeChirie=baniiDeChirie-bet)
      if(baniiDeChirie==0) {console.log("Nu mai sunt bani.")}};
      

break;

  case "sector3": if(sector3.includes(rezultat)){
    console.log("Rezultat =>" ,rezultat, culoareX, sectorX+"\n                                                   AI CASTIGAT: "+bet*3)
    console.log("Bani: ", baniiDeChirie=baniiDeChirie+bet*2)

     }else{

      console.log("Rezultat =>", rezultat, culoareX, sectorX+" (Adica ai pierdut:( )")
      console.log("Bani: ", baniiDeChirie=baniiDeChirie-bet)
      if(baniiDeChirie==0) {console.log("Nu mai sunt bani.")}};

break;

  default: if(regexPariu.test(pariu) && pariu==rezultat && ruleta1.indexOf(parseInt(pariu))!==-1){
     console.log("Rezultat =>" ,rezultat, culoareX+"\n                                                   AI CASTIGAT: "+bet*36)
     console.log("Bani: ", baniiDeChirie=baniiDeChirie+bet*35)

  }else if(regexPariu.test(pariu)&& pariu!==rezultat && ruleta1.indexOf(parseInt(pariu))!==-1) {
     console.log("Rezultat =>", rezultat, culoareX+" (Adica ai pierdut:( )")
     console.log("Bani: ", baniiDeChirie=baniiDeChirie-bet)
     if(baniiDeChirie==0) {console.log("Nu mai sunt bani.")}
     }
     
   else{console.log("Pariul nu exista!")}
 }
  }
 
gamble(baniiDeChirie, bet, pariu)
}
}
}
