// Desafio de código Bootcamp Potência Tech iFood

// Classificador de nível de herói

let hero = ["Goku", 10000]
let level

if (hero[1] <= 1000) {
    level = "Ferro"
} else if (hero[1] > 1000 && hero[1] <= 2000) {
    level = "Bronze"
} else if (hero[1] > 2000 && hero[1] <= 5000) {
    level = "Prata"
} else if (hero[1] > 5000 && hero[1] <= 7000) {
    level = "Ouro"
} else if (hero[1] > 7000 && hero[1] <= 8000) {
    level = "Platina"
} else if (hero[1] > 8000 && hero[1] <= 9000) {
    level = "Ascendente"
} else if (hero[1] > 9000 && hero[1] <= 10000) {
    level = "Imortal"
} else if (hero[1] > 10000) {
    level = "Radiante"
}

console.log("O herói de nome", hero[0], "está no nível de", level)
