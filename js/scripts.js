console.log("Bienvenido al juego del Oraculo");

//GENERACIÓN DE NOMBRE DE USUARIO ALEATORIA

const randomNameGenerator=()=>{
    //letra a lazar
    const consonants=("BCDFGHJKLMNPRSTVWXYZ");
    const vowels=("AEIOU");
    const aleatoryNumber=Math.floor(Math.random()*(99-1)+1);

    const aleatoryConsonant = consonants.charAt(Math.floor(Math.random() * consonants.length));
    const aleatoryVowel = vowels.charAt(Math.floor(Math.random() * vowels.length));

    console.log (aleatoryConsonant + aleatoryVowel + aleatoryNumber);
}

randomNameGenerator();