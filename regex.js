const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
const exp = /\bde\b/g // b permet de spécifier les bordures du mot

console.log(str.match(exp).length)



