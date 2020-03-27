const MyMethods=require('./modul_1');

const Portofel = MyMethods.functiePortofel;
const Pariu = MyMethods.functieCePariem;
const Miza = MyMethods.functieMiza;
const Rezultat = MyMethods.functieRezultat;
const Evaluare = MyMethods.functieEvaluare;
const Castig = MyMethods.functieCastig;


function main(){
  
 console.log("\n \nPariurile posibile sunt: Numere de la 0 la 36, 'N', 'R', 'Sector1', 'Sector2', 'Sector3'.\nPentru a iesi din joc, scriem 'Cashout' in loc de pariu.\n ")

 let portofel=Portofel();
  let nuSuntSarac=true;
  
  while(nuSuntSarac){
    let pariu=Pariu();
        if(pariu=="Cashout"){
           console.log(`Ai plecat cu: ${portofel}\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n`)
           nuSuntSarac=false;
        }
        else{
          let miza=Miza(portofel);    
          let rezultat=Rezultat(pariu);
          let castig=Castig(miza, pariu, Evaluare());

              if(Evaluare(pariu, rezultat)){
                console.log(`Ai castigat: ${castig}`);
                portofel=portofel+castig;
                console.log(`Acum avem: ${portofel}\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);          
              }
              else{
                console.log("Ai pierdut! ");
                portofel=portofel-miza;
                   if(portofel==0){
                      console.log(`Nu mai avem bani.`);
                      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n*Playing sad violin...*\n");
                      nuSuntSarac=false;
                   }
                   else{
                     console.log(`Acum avem: ${portofel}\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);}
        };
     };
  };
};
main();