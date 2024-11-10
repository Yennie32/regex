// // ETAPE 1

// const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
// const exp = /\bde\b/g // b permet de spécifier les bordures du mot

// console.log("compte le nombre de 'de' : ", str.match(exp).length)

// // ETAPE 2

const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
const exp = /de/g // b permet de spécifier les bordures du mot

console.log("compte le nombre de 'de' ou 'des': ", str.match(exp).length)
