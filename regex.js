/* RESSOURCE : 
https://www.threesl.com/blog/special-characters-regular-expressions-escape/ 
https://medium.com/@JavaScript-World/javascript-regex-20-practical-examples-60b23e703e24
*/

// // ETAPE 1

// const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
// const exp = /\bde\b/g // b permet de spécifier les bordures du mot

// console.log("compte le nombre de 'de' : ", str.match(exp).length)

// ETAPE 2

// const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
// const exp = /de/g // prend en compte le pattern de

// console.log("compte le nombre de 'de' ou 'des': ", str.match(exp).length)

// // ETAPE 3

// const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
// const exp = /[ld]e/g // [] caractères optionnels en début de pattern 

// console.log("compte le nombre de 'de', 'des' ou 'les': ", str.match(exp).length)


// // ETAPE 4

const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
const exp = /[a-zA-Z]/g // [] caractères optionnels en début de pattern 

console.log("compte le nombre de caractères': ", str.match(exp).length)



// ETAPE 5

// const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
// const exp = /\p{P}/gu // prend en compte le carctères de ponctuation

// console.log("compte les caractères de ponctuation: ", str.match(exp).length)

// ETAPE 5 bis (ajout accents)

// const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
// const exp = /[\u00C0-\u017F]|\p{P}/gu // prend en compte les accents et les signes de ponctuation

// console.log("compte les caractères de ponctuation: ", str.match(exp).length)