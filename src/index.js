let NameHero;
let Xp;
let HeroLevel;

//NameHero = prompt("Digite o nome do Herói.");
//Xp = prompt("Digite a quantidade de XP.");

//Xp = parseInt(Xp);


NameHero = "Tonho";
Xp = 8542;


if (Xp <= 1000) {
    HeroLevel = "Ferro";
}
else if (Xp >= 1001 && Xp <= 2000) {
    HeroLevel = "Bronze";
}
else if (Xp >= 2001 && Xp <= 5000) {
    HeroLevel = "Prata";
}
else if (Xp >= 5001 && Xp <= 7000) {
    HeroLevel = "Ouro";
}
else if (Xp >= 7001 && Xp <= 8000) {
    HeroLevel = "Platina";
}
else if (Xp >= 8001 && Xp <= 9000) {
    HeroLevel = "Ascendente";
}
else if (Xp >= 9001 && Xp <= 10000) {
    HeroLevel = "Imortal";
}
else {
    HeroLevel = "Radiante";
}

console.log(`O Herói de nome ${NameHero} está no nível ${HeroLevel}`);