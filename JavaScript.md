Javascript-Tutorial 
======================
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/

* Les nombres : **Number**
* Les chaînes de caractères : **String**
* Les booléens : **Boolean**
* Les fonctions : **Function**
* Les objets : **Object**
	* Function
	* Array
	* Date
	* RegExp
* Les symboles : Symbol (apparus avec la sixième édition d'ECMAScript)

## 1 - Les fonctions ##

Par définition les fonctions ont accès à des variables supplémentaires à l'intérieur de leur corps, appelée **arguments**.   

* __Propriétés__
	* Function.__prototype__
	* Function.__length__  
	Définit le nombre d'arguments attendus par la fonction.
* __Méthodes__
	* Function.prototype.__apply(__ *thisArg, [argsArray]* __)__     
	Appelle une fonction en lui passant une valeur this et des arguments sous forme d'un tableau
	* Function.prototype.__bind(__ *thisArg[, arg1[, arg2[, ...]]]* __)__     
	> *Crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.*
	* Function.prototype.__call(__ *thisArg[, arg1[, arg2[, ...]]]* __)__    
	> *Réalise un appel à une fonction avec une valeur this et les arguments fournis individuellement.*
	* Function.prototype.__toSource()__
	* Function.prototype.__toString()__

## 2 -  Les objets ##

* __Propriétés__
	* Object.__prototype__
	* Object.prototype.__proto__
	* Object.prototype.__constructor__
* __Méthodes__
	* Object.assign()
	* Object.__create(__ *proto[, objetPropriétés]* __)__    
	> *Crée un nouvel objet avec un prototype donné et des propriétés données.*
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
	* Object.prototype.\__defineGetter\__()
	* Object.prototype.\__defineSetter\__()
	* Object.prototype.\__lookupGetter\__()
	* Object.prototype.\__lookupSetter\__()
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
	
## 3 - Les Tableaux ##

* __Propriétés__
	* Array.__prototype__
	* Array.__length__    
	> *Taille du tableau*
* __Méthodes__
	* Array.__from(__ *arrayLike[, fonctionMap[, thisArg]]* __)__     
	> *Permet de créer une nouvelle instance d'Array à partir d'un objet itérable ou semblable à un tableau.*
	* Array.__isArray()__
	* Array.prototype.__concat(__ *item1[, item2[, ...[, itemN]]]* __)__      
	> *Renvoie un nouveau tableau auquel on a ajouté les éléments.*
	* Array.prototype.__copyWithin()__
	* Array.prototype.__entries()__
	* Array.prototype.__every(__ *callback[, thisArg]* __)__    
	> *Permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument.*
	* Array.prototype.__fill()__
	* Array.prototype.__filter(__ *callback[, thisArg]* __)__     
	> *Crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine pour lesquels la fonction callback* retourne true.
	* Array.prototype.__find(__ *callback[, thisArg]* __)__    
	> *Renvoie une valeur contenue dans le tableau si un élément du tableau respecte une condition donnée par la fonction de test passée en argument.*
	* Array.prototype.__findIndex(__ *callback[, thisArg]* __)__    
	> *Renvoie l'indice d'un élément du tableau qui satisfait une condition donnée par une fonction.*
	* Array.prototype.__forEach(__ *callback[, thisArg]* __)__    
	> *Permet d'exécuter une fonction donnée sur chaque élément du tableau.*
	* Array.prototype.__includes(__ *élémentRecherché[, indiceDépart]* __)__     
	> *Permet de déterminer si un tableau contient un élément et renvoie true si c'est le cas, false sinon.*
	* Array.prototype.__indexOf(__ *élémentRecherché[, indiceDébut = 0]* __)__    
	> *Renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.*
	* Array.prototype.__join(__ *[séparateur = ',']* __)__     
	> *Réunit tous les éléments d'un tableau dans une chaine de caractères.*
	* Array.prototype.__keys()__     
	> *Renvoie un nouveau  Array Iterator qui contient les clefs pour chaque indice du tableau.*
	* Array.prototype.__lastIndexOf(__ *élémentRecherché[, indexDébut = arr.length - 1]* __)__      
	> *Permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau.*
	* Array.prototype.__map(__ *callback[, thisArg]* __)__     
	> *Crée un nouveau tableau composé des images des éléments d'un tableau par une fonction donnée en argument.*
	* Array.prototype.__pop()__     
	> *Renvoie le dernier élément du tableau et le retire du tableau.*
	* Array.prototype.__push(__ *item1, ..., itemN* __)__     
	> *Ajoute un ou plusieurs éléments à la fin du tableau.*
	* Array.prototype.__reduce(__ *callback[, valeurInitiale]* __)__      
	> *Applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.*
	* Array.prototype.__reduceRight(__ *callback[, valeurInitiale]* __)__
	* Array.prototype.__reverse()__     
	> *Retourne le tableau.*
	* Array.prototype.__shift()__     
	> *Renvoie le premier élément du tableau et le retire du tableau.*
	* Array.prototype.__slice(__ *début[, fin]* __)__     
	> *Renvoie un sous-tableau.*
	* Array.prototype.__some(__ *callback[, objetThis]* __)__      
	> *Teste si certains éléments du tableau passent le test implémenté par la fonction fournie.*
	* Array.prototype.__sort(__ *[cmpfn]* __)__     
	> *Trie le tableau (avec une fonction de comparaison optionnelle).*
	* Array.prototype.__splice(__ *début, delcount[, item1[, ...[, itemN]]]* __)__     
	> *Permet de modifier un tableau en supprimant une partie et en la remplaçant avec plus d'éléments.*
	* Array.prototype.__toLocaleString()__
	* Array.prototype.__toSource()__
	* Array.prototype.__toString()__      
	> *Renvoie une chaîne composée des différents éléments*
	* Array.prototype.__unshift(__ *item1[, item2[, ...[, itemN]]]* __)__     
	> *Ajoute des éléments au début du tableau.*
	* Array.prototype.__values()__      
	> *Renvoie un nouvel objet Array Iterator qui contient les valeurs pour chaque indice du tableau.*
	* Array.prototype[@@iterator]()
	* Array.__unobserve()__

```javascript
	var a = ["chien", "chat", "poule"];
```

* __for et for...in :__ permet de parcourir un objet ou un tableau

```javascript
	for (var i = 0, item; item = a[i]; i++) {
	// Faire quelque chose avec item
	}
```

```javascript
	for (var i in a) {
	// faire quelque chose avec a[i]
	}	
```
	
* __.forEach() :__ permet de parcourir un objet ou un tableau

```javascript
	["chien", "chat", "poule"].forEach(function(valeurCourante, index, array) {
	  // Faire quelque chose avec valeurCourante et array[index]
	});
```

### 3.1 - Rechercher dans un tableau

* __.indexOf(val,start) :__ Retourne l'index de la premiere occurence.
* __.lastIndexOf(val,start) :__ Retourne l'index de la derniere occurence.

```javascript
	var animals = ["dog","cat","seal","walrus","lion", "cat"];
	console.log(animals.indexOf("cat",2)); // prints 5
	console.log(animals.lastIndexOf("cat",4)); // prints 1
```
	
* __.findIndex(callback) :__ Renvoie l'indice d'un élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
* __.find(callback) :__ Renvoie une valeur contenue dans le tableau si un élément du tableau respecte une condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.

```javascript
	var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
	var over = nums.findIndex(function(element) {
	 return (element >= 100);
	});
```

## 4 - Les Listes

A list is **an ordered sequence of data**. Each data item stored in a list is called **an element**. In JavaScript, the elements of a list can be of any data type. There is no predeter mined number of elements that can be stored in a list, though the practical limit will be the amount of memory available to the program using the list.     

You can append an element to the end of a list, or you can insert an element into a list after an existing element or at the beginning of a list. Elements are deleted from a list using a **remove** operation. You can also clear a list so that all of its current elements are removed.     

Lists have properties to describe location. There is the front of a list and the end of a list. You can move from one element of a list to the next element using the **next()** operation, and you can move backward through a list using the **prev()** operation. You can also move to a numbered position in a list using the **moveTo(n)** operation, where n specifies the position to move to. The currPos property indicates the current position in a list.    

When the **order of the data being stored doesn’t matter**, or when **you don’t have to search the data stored**, lists work wonderfully

* __Propriétés__
	* List.__listSize__
	* List.__pos__
	* List.__dataStore__
* __Méthodes__
	* List.__clear()__ Clears all elements from list
	* List.__toString()__ Returns string representation of list
	* List.__getElement(*pos*)__ Returns element at current position
	* List.__insert(*element, after*)__ Inserts new element after existing element
	* List.__append(*element*)__ Adds new element to end of list
	* List.__remove(*pos*)__ Removes element with the position pos
	* List.__removeEl(*element*)__ Removes element from list
	* List.__find(*element*)__ Find element from list and return index of element
	* List.__front()__ Sets current position to first element of list
	* List.__end ()__ Sets current position to last element of list
	* List.__prev ()__ Moves current position back one element
	* List.__next ()__ Moves current position forward one element
	* List.__currPos ()__ Returns the current position in list
	* List.__currEl ()__ Returns the current element in list
	* List.__moveTo (*pos*)__ Moves the current position to specified position
	* List.__count()__ Return Taille du stack
	* List.__first()__ Return first element of list
	* List.__last()__ Return last element of list
	* List.__contains()__ Return true if list contains an element else if return false
	* List.__set(*pos,val*)__ Set the value val at position pos
```javascript
	function List() {
	 this.listSize = 0;
	 this.pos = 0;
	 this.dataStore = []; // initializes an empty array to store list elements
	 this.clear = function() {
			 delete this.dataStore;
			 this.dataStore = [];
			 this.listSize = this.pos = 0;
			};
	 this.find = function(element) {
			 for (var i = 0; i < this.dataStore.length; ++i) {
				 if (this.dataStore[i] == element) {
				 return i;
				 }
			 }
			 return -1;
			}
	 this.toString = function toString() {
			 return this.dataStore;
			}.
	 this.insert = function(element, after) {
			 var insertPos = this.find(after);
				 if (insertPos > -1) {
				 this.dataStore.splice(insertPos+1, 0, element);
				 ++this.listSize;
				 return true;
				 }
			 return false;
			};
	 this.append = function(element) {
			 this.dataStore[this.listSize++] = element;
			};
	 this.remove = function(pos) {
				if (pos > -1 && pos <= (this.listSize-1)) {
				 this.dataStore.splice(pos,1);
				 --this.listSize;
				 return true;
				 }
			 return false;
			};
	 this.removeEl = function(element) {
			 var foundAt = this.find(element);
				 if (foundAt > -1) {
				 this.dataStore.splice(foundAt,1);
				 --this.listSize;
				 return true;
				 }
			 return false;
			};		
	 this.front = function() {
			 this.pos = 0;
			};
	 this.end = function() {
			 this.pos = this.listSize-1;
			};
	 this.prev = function() {
			 if (this.pos > 0) {
			 --this.pos;
			 }
			};
	 this.next = function() {
			 if (this.pos < this.listSize-1) {
			 ++this.pos;
			 }
			};
	 this.currPos = function() {
			 return this.pos;
			};
	 this.currEl = function() {
			 return this.dataStore[this.currPos];
			};		
	 this.moveTo = function(position) {
			 this.pos = position;
			};
	 this.getElement = function() {
			 return this.dataStore[this.pos];
			};
	 this.contains = function(element) {
				 for (var i = 0; i < this.dataStore.length; ++i) {
				 if (this.dataStore[i] == element) {
				 return true;
				 }
			 	}
			 return false;
			};
	this.count = function() {
		 return this.listSize;
		}
	};
	this.first = function() {
		 return this.dataStore[0];
		};
	this.last = function() {
		 return this.dataStore[this.listSize-1];
		};
	this.set = function(pos,val) {
		if (pos > -1 && pos <= (this.listSize -1)) {
		   this.dataStore[pos] = val;
		   return true;
		   }
		 return false;  
		}
```

## 5 - Stack

A stack is a list of elements that are **accessible only from one end of the list**, which is called the **top**. One common, real-world example of a stack is the stack of trays at a cafeteria. Trays are always removed from the top, and when trays are put back on the stack after being washed, they are placed on the top of the stack. The stack is known as a **last-in, first-out (LIFO)** data structure.

Because of the last-in, first-out nature of the stack, any element that is not currently at the top of the stack cannot be accessed. To get to an element at the bottom of the stack, you have to dispose of all the elements above it first.

Another common operation on a stack is viewing the element at the top of a stack. The pop operation visits the top element of a stack, but it permanently removes the element from a stack. The peek operation returns the value stored at the top of a stack without
removing it from the stack.

* __Propriétés__
	* Stack.__top__
	* Stack.__dataStore__
* __Méthodes__
	* Stack.__clear()__ Clears all elements from list
	* Stack.__push(*element*)__ Inserts new element
	* Stack.__pop()__ Returns the top element and removing it
	* Stack.__peek()__ Returns the top element without removing it
	* Stack.__length()__ Taille du stack

```javascript
	function Stack() {
	 this.dataStore = [];
	 this.top = 0;
	 this.push = function(element) {
		 this.dataStore[this.top++] = element;
		};
	 this.pop = function() {
		 return this.dataStore[--this.top];
		};
	 this.peek = function() {
		 return this.dataStore[this.top-1];
		};
	}
	this.length = function() {
		 return this.top;
		}
	this.clear = function() {
		 this.top = 0;
		};
```

## 6 - Queues

A queue is a type of list where **data are inserted at the end and are removed from the front**. Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is **the first element used for processing**. Think of a queue like the line at your bank, where the first person into the line is the first person served, and as more customers enter a line, they wait in the back until it is their turn to be served.

A queue is an example of a **first-in, first-out (FIFO)** data structure. Queues are used to order processes submitted to an operating system or a print spooler, and simulation applications use queues to model scenarios such as customers standing in the line at a bank or a grocery store.

* __Propriétés__
	* Queue.__dataStore__
* __Méthodes__
	* Queue.__enqueue(*element*)__ Add an element at the end of the queue
	* Queue.__dequeue(*element*)__ Return and Remove the first element in the queue
	* Queue.__first()__ Returns the first element of queud
	* Queue.__last()__ Returns the last element of queue
	* Queue.__toString()__ Taille du stack
	* Queue.__empty()__ Taille du stack
```javascript
	function Queue() {
	 this.dataStore = [];
	 this.enqueue = function(element) {
			 this.dataStore.push(element);
			};
	 this.dequeue = function() {
			 var priority = this.dataStore[0].priority;
			 for (var i = 1; i < this.dataStore.length; ++i) {
				 if (this.dataStore[i].priority < priority) {
				 priority = i;
				 }
			 }
			 return this.dataStore.splice(priority,1);
			};
	 this.first = function() {
			 return this.dataStore[0];
			};
	 this.last = function() {
			 return this.dataStore[this.dataStore.length-1];
			};
	 this.toString = function() {
			 var retStr = "";
				 for (var i = 0; i < this.dataStore.length; ++i) {
				 retStr += this.dataStore[i] + "\n";
				 }
			 return retStr;
			};
	 this.empty = function() {
			 if (this.dataStore.length == 0) {
			 return true;
			 }
			 else {
			 return false;
			 }
			};
	}
```
