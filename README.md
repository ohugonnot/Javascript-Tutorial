# Javascript-Tutorial 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/

* Les nombres : Number
* Les chaînes de caractères : String
* Les booléens : Boolean
* Les fonctions : Function
* Les objets : Object
	* Function
	* Array
	* Date
	* RegExp
* Les symboles : Symbol (apparus avec la sixième édition d'ECMAScript)

* __.split(sep) :__ 
* __.typeof(sep) :__ 
* __.replace(/Regex/,Replace) :__ 

### Les fonctions ###

Par définition les fonctions ont accès à des variables supplémentaires à l'intérieur de leur corps, appelée **arguments**.   

* __Propriétés__
	* Function.__prototype__
	* Function.__length__  :  définit le nombre d'arguments attendus par la fonction.
* __Méthodes__
	* Function.prototype.__apply(__thisArg, [argsArray]__)__ : ppelle une fonction en lui passant une valeur this et des arguments sous forme d'un tableau
	* Function.prototype.__bind(__thisArg[, arg1[, arg2[, ...]]]__)__ : crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.
	* Function.prototype.__call(__thisArg[, arg1[, arg2[, ...]]]__)__ : réalise un appel à une fonction avec une valeur this et les arguments fournis individuellement.
	* Function.prototype.__toSource()__
	* Function.prototype.__toString()__

### Les objets ###

* __Propriétés__
	* Object.__prototype__
	* Object.prototype.__proto__
	* Object.prototype.__constructor__
* __Méthodes__
	* Object.assign()
	* Object.__create(__proto[, objetPropriétés]__)__ : crée un nouvel objet avec un prototype donné et des propriétés données.
	* Object.defineProperties()
	* Object.defineProperty()
	* Object.entries()
	* Object.freeze()
	* Object.getNotifier()
	* Object.getOwnPropertyDescriptor()
	* Object.getOwnPropertyNames()
	* Object.getOwnPropertySymbols()
	* Object.getPrototypeOf()
	* Object.is()
	* Object.isExtensible()
	* Object.isFrozen()
	* Object.isSealed()
	* Object.keys()
	* Object.observe()
	* Object.preventExtensions()
	* Object.prototype.__defineGetter__()
	* Object.prototype.__defineSetter__()
	* Object.prototype.__lookupGetter__()
	* Object.prototype.__lookupSetter__()
	* Object.prototype.eval()
	* Object.prototype.hasOwnProperty()
	* Object.prototype.isPrototypeOf()
	* Object.prototype.propertyIsEnumerable()
	* Object.prototype.toLocaleString()
	* Object.prototype.toSource()
	* Object.prototype.toString()
	* Object.prototype.unwatch()
	* Object.prototype.valueOf()
	* Object.prototype.watch()
	* Object.seal()
	* Object.setPrototypeOf()
	* Object.unobserve()
	* Object.values()
	
## Les Tableaux ##

* __Propriétés__
	* Array.__prototype__
	* Array.__length__  :  taille du tableau
* __Méthodes__
	* Array.__from(__arrayLike[, fonctionMap[, thisArg]]__)__ : permet de créer une nouvelle instance d'Array à partir d'un objet itérable ou semblable à un tableau.
	* Array.__isArray()__
	* Array.prototype.__concat(__item1[, item2[, ...[, itemN]]]__)__ : Renvoie un nouveau tableau auquel on a ajouté les éléments.
	* Array.prototype.__copyWithin()__
	* Array.prototype.__entries()__
	* Array.prototype.__every(__callback[, thisArg]__)__ : permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument.
	* Array.prototype.__fill()__
	* Array.prototype.__filter(__callback[, thisArg]__)__ : crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine pour lesquels la fonction callback retourne true.
	* Array.prototype.__find(__callback[, thisArg]__)__ : renvoie une valeur contenue dans le tableau si un élément du tableau respecte une condition donnée par la fonction de test passée en argument.
	* Array.prototype.__findIndex(__callback[, thisArg]__)__ :  renvoie l'indice d'un élément du tableau qui satisfait une condition donnée par une fonction.
	* Array.prototype.__forEach(__callback[, thisArg]__)__ : permet d'exécuter une fonction donnée sur chaque élément du tableau.
	* Array.prototype.__includes(__élémentRecherché[, indiceDépart]__)__ :  permet de déterminer si un tableau contient un élément et renvoie true si c'est le cas, false sinon.
	* Array.prototype.__indexOf(__élémentRecherché[, indiceDébut = 0]__)__ : renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.
	* Array.prototype.__join(__[séparateur = ',']__)__ : réunit tous les éléments d'un tableau dans une chaine de caractères.
	* Array.prototype.__keys()__ : renvoie un nouveau  Array Iterator qui contient les clefs pour chaque indice du tableau.
	* Array.prototype.__lastIndexOf(__élémentRecherché[, indexDébut = arr.length - 1]__)__ :   permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau.
	* Array.prototype.__map(__callback[, thisArg]__)__ : Crée un nouveau tableau composé des images des éléments d'un tableau par une fonction donnée en argument.
	* Array.prototype.__pop()__ : Renvoie le dernier élément du tableau et le retire du tableau.
	* Array.prototype.__push(__item1, ..., itemN__)__ : Ajoute un ou plusieurs éléments à la fin du tableau.
	* Array.prototype.__reduce(__callback[, valeurInitiale]__)__ :  applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
	* Array.prototype.__reduceRight(__callback[, valeurInitiale]__)__
	* Array.prototype.__reverse()__ : Retourne le tableau.
	* Array.prototype.__shift()__ : Renvoie le premier élément du tableau et le retire du tableau.
	* Array.prototype.__slice(__début[, fin]__)__ : Renvoie un sous-tableau.
	* Array.prototype.__some(__callback[, objetThis]__)__ :  teste si certains éléments du tableau passent le test implémenté par la fonction fournie.
	* Array.prototype.__sort(__[cmpfn]__)__ : Trie le tableau (avec une fonction de comparaison optionnelle). 
	* Array.prototype.__splice(__début, delcount[, item1[, ...[, itemN]]]__)__ : Permet de modifier un tableau en supprimant une partie et en la remplaçant avec plus d'éléments.
	* Array.prototype.__toLocaleString()__
	* Array.prototype.__toSource()__
	* Array.prototype.__toString()__ : Renvoie une chaîne composée des différents éléments
	* Array.prototype.__unshift(__item1[, item2[, ...[, itemN]]]__)__ : Ajoute des éléments au début du tableau.
	* Array.prototype.__values()__ : renvoie un nouvel objet Array Iterator qui contient les valeurs pour chaque indice du tableau.
	* Array.prototype[@@iterator]()
	* Array.__unobserve()__

	var a = ["chien", "chat", "poule"];

* __for et for...in :__ permet de parcourir un objet ou un tableau

	for (var i = 0, item; item = a[i]; i++) {
	// Faire quelque chose avec item
	}

	for (var i in a) {
	// faire quelque chose avec a[i]
	}	
	
* __.forEach() :__ permet de parcourir un objet ou un tableau

	["chien", "chat", "poule"].forEach(function(valeurCourante, index, array) {
	  // Faire quelque chose avec valeurCourante et array[index]
	});

# Rechercher dans un array

* __.indexOf(val,start) :__ Retourne l'index de la premiere occurence.
* __.lastIndexOf(val,start) :__ Retourne l'index de la derniere occurence.

	var animals = ["dog","cat","seal","walrus","lion", "cat"];
	console.log(animals.indexOf("cat",2)); // prints 5
	console.log(animals.lastIndexOf("cat",4)); // prints 1
	
* __.findIndex(callback) :__ Renvoie l'indice d'un élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
* __.find(callback) :__ Renvoie une valeur contenue dans le tableau si un élément du tableau respecte une condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.

	var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
	var over = nums.findIndex(function(element) {
	 return (element >= 100);
	});

