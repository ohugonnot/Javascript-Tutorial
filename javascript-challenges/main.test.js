import {expect, test} from 'vitest'

/* #1 - Nombre de personnes dans le bus

Un bus se déplace en ville, il prend et/ou dépose certaines personnes à chaque arrêt.
Vous recevez une liste d’entiers. Chaque élément comporte le nombre de personnes qui
montent dans le bus (le premier élément) et le nombre de personnes qui en sortent (le
deuxième élément).
Le 2e nombre du premier élément de la liste vaut toujours 0 car le bus est vide en arrivant
au premier arrêt de bus. Votre tâche consiste à renvoyer le nombre de personnes encore
dans le bus après le dernier arrêt.

exemple
nbPersonAfterLastStation([[10,0],[3,5],[5,8]])  5
nbPersonAfterLastStation([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])  17
nbPersonAfterLastStation([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])  21

 */
function nbPersonAfterLastStation(list) {
    return
}

test('Test nbPersonAfterLastStation ', () => {
    expect(nbPersonAfterLastStation([[10, 0], [3, 5], [5, 8]])).toBe(5)
    expect(nbPersonAfterLastStation([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])).toBe(17)
    expect(nbPersonAfterLastStation([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toBe(21)
})

/* #2 - Nombre de moutons

Nous avons besoin d'une fonction qui compte le nombre de moutons présents dans un tableau donné (true
signifie que le mouton est présent). Par exemple vous devrez trouver 17 moutons pour la liste suivante :
[true, true, true, false,
true, true, true, true ,
true, false, true, false,
true, false, false, true ,
true, true, true, true ,
false, false, true, true]
N'oubliez pas de vérifier les mauvaises valeurs comme null / undefined

 */
function nbMoutons(list) {
    return
}

test('Test nbMoutons', () => {
    expect(nbMoutons([true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true])).toBe(17)
    expect(nbMoutons([true, false, null, undefined, true, true, false, null])).toBe(3)
})

/* #3 - Nettoyage de chaînes

Votre patron a décidé d'économiser de l'argent en achetant un logiciel de reconnaissance de caractères
pour numériser d'anciens romans dans votre base de données. Il semble que les mots soient bien saisis,
mais vous remarquez rapidement qu'il y a aussi des nombres dans des endroits aléatoires dans le texte :
stringClean ('! !')  '! !'
stringClean ('123456789')  ''
stringClean("(E3at m2e2!!)")  "(Eat me!!)"
stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")  "Why can't we
buy the good software? #cheapskates"

Vos collaborateurs vous demandent une solution pour supprimer tous les nombres. Votre programme
prendra en entrée une chaîne, devra nettoyer tous les caractères numériques, et renverra une chaîne avec
les espacements, caractères et caractères spéciaux ~#$%^&!@*():; "'., tous intacts.
 */
function stringClean(string) {
    return
}

test('Test stringClean', () => {
    expect(stringClean('! !')).toBe('! !')
    expect(stringClean('123456789')).toBe('')
    expect(stringClean('(E3at m2e2!!)')).toBe('(Eat me!!)')
    expect(stringClean('Wh7y can\'t we3 bu1y the goo0d software3? #cheapskates3')).toBe('Why can\'t we buy the good software? #cheapskates')
})

/* #4 - Supprimer les doublons

A partir d’une liste de nombres, supprimez les doublons et renvoyez la liste simplifiée sous forme ordonnée.
removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])
 Array [ 1, 2, 3, 4, 5 ]

 */
function removeDuplicates(list) {
    return
}

test('Test removeDuplicates', () => {
    expect(removeDuplicates([1, 1, 2, 4, 5, 2, 1, 2, 3, 5, 5, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(removeDuplicates(["orange", 'rouge', 'bleu', 'orange', 'bleu', 'bleu', 'rouge', 'jaune'])).toStrictEqual(['bleu', 'jaune', 'orange', 'rouge'])
})


/* #5 - - Pourboire

Écrivez une fonction qui calcule combien vous devez donner de pourboire en fonction du montant total de
la facture et du service. Vous devez tenir compte des notes suivantes:
• Terrible: 0%
• Poor: 5%
• Good: 10%
• Great: 15%
• Excellent: 20%
L’avis sur le service doit être insensible à la casse. Si un avis non reconnu est entré, vous devez renvoyer
"Rating not recognised".
Parce que vous êtes une personne sympathique, vous arrondissez toujours à la valeur supérieure, quel
que soit le service.
calculateTip(20, "ExcellEnt")  4 // Excellent service, vous donnez 20% de 20 = 4
calculateTip(26.95, "goOd")  3 // Bon service, 10% de 26.95 arrondi à 3
calculateTip(20, "hi")  "Rating not recognised"

 */
function calculateTip(note, avis) {

    return ''
}

test('Test calculateTip', () => {
    expect(calculateTip(20, "ExcellEnt")).toBe(4)
    expect(calculateTip(26.95, "goOd")).toBe(3)
    expect(calculateTip(20, "hi")).toBe("Rating not recognised")
})

/* #6 - Compter en Arara

La tribu Arara compte de la façon suivante :
1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak
Ecrire une fonction qui transforme un nombre en langage Arara.
countArara(1)  "anane"
countArara(3)  "adak anane"
countArara(8)  "adak adak adak adak"

 */
function countArara(nb) {

    return ''
}

test('Test countArara', () => {
    expect(countArara(1)).toBe('anane')
    expect(countArara(3)).toBe('adak anane')
    expect(countArara(8)).toBe("adak adak adak adak")
    expect(countArara(25)).toBe("adak adak adak adak adak adak adak adak adak adak adak adak anane")
})

/* #7 - Meeting

Des développeurs se sont inscrits pour assister à la prochaine réunion de codage que vous organisez.
Votre tâche consiste à renvoyer un objet qui comprend le nombre d'options alimentaires sélectionnées par
les développeurs sur le formulaire d'inscription. Par exemple, compte tenu du tableau de saisie suivant :
Var list1 = [
 {FirstName: 'Noah', lastName: 'M.', pays: 'Suisse', continent: 'Europe', age: 19, langue: 'C'
 Repas: 'végétarien'},
 {FirstName: 'Anna', lastName: 'R.', pays: 'Liechtenstein', continent: 'Europe', age: 52, langue:
'JavaScript',
 Repas: 'standard'},
 {FirstName: 'Ramona', lastName: 'R.', pays: 'Paraguay', continent: 'Amériques', age: 29, langue: 'Ruby',
 Repas: 'vegan'},
 {FirstName: 'George', lastName: 'B.', pays: 'Angleterre', continent: 'Europe', age: 81, langue: 'C'
 Repas: 'végétarien'},
];
Votre fonction doit renvoyer l'objet suivant (l'ordre des propriétés n'a pas d'importance):
{Végétarien: 2, standard: 1, vegan: 1}

 */
function meeting(list) {

    return {}
}

test('Test meeting', () => {
    expect(meeting([
        {
            FirstName: 'Noah', lastName: 'M.', pays: 'Suisse', continent: 'Europe', age: 19, langue: 'C',
            Repas: 'végétarien'
        },
        {
            FirstName: 'Anna', lastName: 'R.', pays: 'Liechtenstein', continent: 'Europe', age: 52, langue:
                'JavaScript',
            Repas: 'standard'
        },
        {
            FirstName: 'Ramona', lastName: 'R.', pays: 'Paraguay', continent: 'Amériques', age: 29, langue: 'Ruby',
            Repas: 'vegan'
        },
        {
            FirstName: 'George', lastName: 'B.', pays: 'Angleterre', continent: 'Europe', age: 81, langue: 'C',
            Repas: 'végétarien'
        },
    ])).toBe({'végétarien': 2, standard: 1, vegan: 1})
})


/* #8 - Adn

L'acide désoxyribonucléique (ADN) est un produit chimique trouvé dans le noyau des
cellules et porte les « instructions » pour le développement et le fonctionnement des
organismes vivants. Dans les codes ADN, les symboles "A" et "T" sont
complémentaires l’un de l’autre, comme "C" et "G". Ecrire une fonction qui à partir
d’une chaine ADN donne son complémentaire.
DNAStrand ("ATTGC")  "TAACG"
DNAStrand ("GTAT")  "CATA"

*/
function DNAStrand(string) {

    return ''
}

test('Test DNAStrand', () => {
    expect(DNAStrand("ATTGC")).toBe("TAACG")
    expect(DNAStrand("GTAT")).toBe("CATA")
})

/* #9 - vampire

Notre définition d’un nombre vampire peut être décrite comme suit :
6 * 21 = 126
Les chiffres 6, 1 et 2 sont présents dans le produit et le résultat, c’est un nombre vampire.
10 * 11 = 110
110 n'est pas un numéro vampire car il y a trois 1 dans le terme de gauche mais seulement deux 1 dans
le produit
vampire_test (21,6)  true
vampire_test (204,615)  true (204 * 615 = 125460)
vampire_test (30, -51)  true ( 30 * -51 = -1530)
vampire_test (-246, -510)  false (-246 * -510 = 125460)
vampire_test (2947050,8469153)  true

*/
function vampire_test(a, b) {

    return true
}

test('Test vampire_test', () => {
    expect(vampire_test(21, 6)).toBe(true)
    expect(vampire_test(204, 615)).toBe(true)
    expect(vampire_test(-246, -510)).toBe(false)
    expect(vampire_test(2947050, 8469153)).toBe(true)
})

/* #10 - Filter

Créez une fonction qui prend une liste d'entiers ou de chaînes de caractères et renvoie une nouvelle liste
en ayant filtré uniquement les nombres.
Filter_list ([1,2, 'a', 'b'])  [1,2]
Filter_list ([1, 'a', 'b', 0,15])  [1,0,15]
Filter_list ([1,2, 'aasf', '3', '124', 123])  [1,2,123]

*/
function Filter_list(list) {

    return list
}

test('Test Filter_list', () => {
    expect(Filter_list([1, 2, 'a', 'b'])).toBe([1, 2])
    expect(Filter_list([1, 'a', 'b', 0, 15])).toBe([1, 0, 15])
    expect(Filter_list([1, 2, 'aasf', '3', '124', 123])).toBe([1, 2, 123])
})

/* #11 - Différence entre 2 collections

Trouvez les différences entre 2 listes de caractères. Il s’agit des caractères présents dans une liste et pas
dans l’autre, et réciproquement. Renvoyez la liste de ces éléments par ordre alphabétique. Attention, les
listes peuvent contenir plusieurs fois les mêmes caractères.
a = ["a","b","z","d","e","d"];
b = ["a","b", "j","j"];
diff(a, b)  ["d","e","j","z"]

*/
function diff(list, list2) {

    return list
}

test('Test diff', () => {
    expect(diff(["a", "b", "z", "d", "e", "d"], ["a", "b", "j", "j"])).toBe(["d", "e", "j", "z"])
})

/* #12 - Jumeaux

Agent 47, vous avez une nouvelle tâche ! Parmi les citoyens de la ville sont cachés 2 jumeaux très
dangereux. Votre tâche est de les identifier et d'éliminer !
A partir d'un ensemble d'entiers, votre tâche est de trouver les deux mêmes nombres et de renvoyer l'un
d'entre eux, par exemple dans le tableau [2, 3, 6, 34, 7, 8, 2] la réponse est 2.
S'il n'y a pas de jumeaux dans la ville - renvoyez null.
elimination([2,5,34,1,22,1])  1
elimination([2,2,34,1,22])  2
elimination([2,5,34,1,22])  null

*/
function elimination(list) {

    return null
}

test('Test elimination', () => {
    expect(elimination([2, 5, 34, 1, 22, 1])).toBe(1)
    expect(elimination([2, 2, 34, 1, 22])).toBe(2)
    expect(elimination([2, 5, 34, 1, 22])).toBe(null)
})

/* #13 - Mont Vallés

A partir d’une liste de nombres, trouvez les monts et les vallées. Un mont est un nombre plus grand que
les 3 qui sont à sa gauche et les 3 à sa droite. De même, une vallée est un nombre plus petit que les 3 de
chacun de ses côtés. Un exemple :
    [10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13]
        [ 40 , 10 , 16 ]
40 est un mont car plus grand que les 3 à gauche (10,20,30) et plus grand que les 3 à droite (30,20,10)
De même pour 10 et 16 qui sont des vallées.
peakAndValley([10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13])  [40,10,16]
peakAndValley([50,84,49,47,80,87,87,53,76,30,10])  [47]
peakAndValley([45,94,41,76,29,96,28,13,84,69,25])  [96,13]
peakAndValley([1,16,63,78,53,78,42,39,46,88,49,96,58,82])  [39]
peakAndValley([49,97,76,56,96,88,65,20,14,93,32])  []

*/
function peakAndValley(list) {

    return null
}

test('Test peakAndValley', () => {
    expect(peakAndValley([10, 20, 30, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13])).toBe([40, 10, 16])
    expect(peakAndValley([50, 84, 49, 47, 80, 87, 87, 53, 76, 30, 10])).toBe([47])
    expect(peakAndValley([45, 94, 41, 76, 29, 96, 28, 13, 84, 69, 25])).toBe([96, 13])
    expect(peakAndValley([49, 97, 76, 56, 96, 88, 65, 20, 14, 93, 32])).toBe([])
})


/* #14 - Parité
Trouvez, parmi une liste de nombre, le seul qui n’a pas la même parité.
iqTest("2 4 7 8 10")  3 // Le 3e est impair, les autres sont pairs
iqTest("1 2 1 1")  2 // Le 2e est pair, les autres sont impairs

*/
function iqTest(list) {

    return null
}

test('Test iqTest', () => {
    expect(iqTest("2 4 7 8 10")).toBe(3)
    expect(iqTest("1 2 1 1")).toBe(2)
})

/* #15 - Cryptage

Partie cryptage : A partir d’une chaîne, prenez un caractère sur deux, les concaténer puis concaténer tous
les autres. Répétez cela le nombre de fois précisé en paramètre.
encrypt("This is a test!", 0)  "This is a test!"
encrypt("This is a test!", 1)  "hsi etTi sats!"
encrypt("This is a test!", 2)  "s eT ashi tist!"
Partie décryptage : A partir d’une chaîne codée n fois, retrouvez le texte d’origine.
decrypt(" Tah itse sits!", 3)  "This is a test!"
decrypt("hskt svr neetn!Ti aai eyitrsig", 1)  "This kata is very interesting!"

*/
function encrypt(text, nb) {

    return null
}

function decrypt(text, nb) {

    return null
}

test('Test encrypt', () => {
    expect(encrypt("This is a test!", 0)).toBe("This is a test!")
    expect(encrypt("This is a test!", 1)).toBe("hsi etTi sats!")
    expect(encrypt("This is a test!", 3)).toBe("s eT ashi tist!")
    expect(decrypt(" Tah itse sits!", 3)).toBe("This is a test!")
    expect(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)).toBe("This kata is very interesting!")
})

