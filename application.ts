/*enum mois{
   janvier=1,
   février,
   mars,
   avril,
   mai,
   juin,
   juillet,
   aout,
   septembre,
   octobre,
   novembre,
   décembre,
}
let month:mois=mois.décembre;
console.log(month);*/
class Personne{
    nom: string;
    age: number;

    constructor(nom:string, age: number){
        this.nom=nom;
        this.age=age;
    }
}
let personne1 = new Personne("Arthur",10);
