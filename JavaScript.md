Javascript-Tutorial 
======================
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/

#### Menu
0. [Les types](#types)
1. [Les Fonctions](#fonctions)
2. [Les Objets](#objets)
3. [Les Tableaux](#tableaux)
4. [Les Listes](#listes)
5. [Stack](#stack)
6. [Queues](#queues)
7. [Linked Lists](#linkedlists)
8. [Dictionaries](#dictionaries)
9. [Sets](#sets)
10. [Bad Parts](#bad)
11. [Good Parts](#good)
12. [ES6 & ES7](#es6)
13. [Les events](#events)

#### <a name="types"></a> Les Types
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

## <a name="fonctions"></a> 1 - Les fonctions ##

Par définition les fonctions ont accès à des variables supplémentaires à l'intérieur de leur corps, appelée **arguments**.   

* __Propriétés__
	* Function.__prototype__    
	* Function.__length__    
	> *Définit le nombre d'arguments attendus par la fonction.*
	* Function.__arguments__    
	> *Array contenant la valeurs des arguments passer à la fonction*
* __Méthodes__
	* Function.prototype.__apply(__ *thisArg, [argsArray]* __)__     
	> *Appelle une fonction en lui passant une valeur this et des arguments sous forme d'un tableau*
	* Function.prototype.__bind(__ *thisArg[, arg1[, arg2[, ...]]]* __)__     
	> *Crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.*
	* Function.prototype.__call(__ *thisArg[, arg1[, arg2[, ...]]]* __)__    
	> *Réalise un appel à une fonction avec une valeur this et les arguments fournis individuellement.*
	* Function.prototype.__toSource()__
	* Function.prototype.__toString()__

**Astuces**
* The apply method lets us construct an array of arguments to use to invoke a function.
It also lets us choose the value of this. The apply method takes two parameters.
The first is the value that should be bound to this. The second is an array of
parameters.  

```javascript
	// Make an array of 2 numbers and add them.
	function foo() {
	    return 42;
	}
	
	foo.bar = "hello world";
	
	typeof foo;         // "function"
	typeof foo();       // "number"
	typeof foo.bar;     // "string"

	var array = [3, 4];
	var sum = add.apply(null, array); // sum is 7
```
* A bonus parameter that is available to functions when they are invoked is the
arguments array. It gives the function access to all of the arguments that were supplied
with the invocation, including excess arguments that were not assigned to
parameters. This makes it possible to write functions that take an unspecified number
of parameters:

```javascript
	// Make a function that adds a lot of stuff.
	// Note that defining the variable sum inside of
	// the function does not interfere with the sum
	// defined outside of the function. The function
	// only sees the inner one.
	var sum = function ( ) {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i += 1) {
	sum += arguments[i];
	}
	return
```

## <a name="objets"></a> 2 -  Les objets ##

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
	* Object.prototype.__hasOwnProperty()__
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
	
**Astuces**
* The || operator can be used to fill in default values:
```javascript
	var middle = stooge["middle-name"] || "(none)";
	var status = flight.status || "unknown";
```
* Attempting to retrieve values from undefined will throw a TypeError exception. This
can be guarded against with the && operator:

```javascript
flight.equipment // undefined
flight.equipment.model // throw "TypeError"
flight.equipment && flight.equipment.model // undefined

console.log("name" in person1); // true
console.log("title" in person1); // false

for (property in object) {
console.log("Name: " + property);
console.log("Value: " + object[property]);
}
```

## <a name="tableaux"></a> 3 - Les Tableaux ##

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

## <a name="listes"></a>4 - Les Listes

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

## <a name="stack"></a> 5 - Stack

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

## <a name="queues"></a>6 - Queues

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

## <a name="linkedlists"></a>7 - Linked Lists or Doubly Linked Lists

A linked list is **a collection of objects called nodes**. Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link. 
      
<p align="center">   
<img src='http://animechange.free.fr/list.png' alt='list' />
</p>
      
While array elements are referenced by their position, linked list elements are referenced by their relationship to the other elements of the linked list. In Figure 6-1, we say that “bread” follows “milk”, not that “bread” is in the second position. Moving through a linked list involves following the links of the list from the beginning node to the end node (not including the header node, which is sometimes used as a hook for entry into a linked list). Something else to notice in the figure is that we mark the end of a linked list by pointing to a null node.       
       
Marking the beginning of a linked list can be a problem. Many linked-list implementations include a special node, called the head, to denote the beginning of a linked list. The linked list shown in Figure 6-1 is redesigned in Figure 6-2 to include a head node.    
     
<p align="center">   
<img src='http://animechange.free.fr/list2.png' alt='list' />
</p>
     
* __Propriétés__
	* LList.__head__
* __Méthodes__
	* LList.__find(*item*)__ Find a element and get the cursor on it and return it
	* LList.__insert(*newElement, item*)__ insert a new element after the item element
	* LList.__display()__ display list
	* LList.__remove(*item*)__ remove the item element
	* LList.__findLast()__ find the last element of llist
	* LList.__dispReverse()__ display the reverse list (begin by the end)
```javascript
	function Node(element) {
		this.element = element;
		this.next = null;
		this.previous = null;
	}
	function LList() {
		this.head = new Node("head");
		this.find = function (item) {
				var currNode = this.head;
				while (currNode.element != item) {
					currNode = currNode.next;
					}
				return currNode;
				};
		this.insert = function (newElement, item) {
				var newNode = new Node(newElement);
				var current = this.find(item);
				newNode.next = current.next;
				newNode.previous = current;
				current.next = newNode;
				};
		this.display = function () {
				var currNode = this.head;
				while (!(currNode.next == null)) {
					print(currNode.next.element);
					currNode = currNode.next;
					}
				};
		this.remove = function (item) {
			var currNode = this.find(item);
			if (!(currNode.next == null)) {
				currNode.previous.next = currNode.next;
				currNode.next.previous = currNode.previous;
				currNode.next = null;
				currNode.previous = null;
				}
			};
		this.findLast = function () {
			var currNode = this.head;
			while (!(currNode.next == null)) {
				currNode = currNode.next;
				}
			return currNode;
			};
		this.dispReverse = function () {
			var currNode = this.head;
			currNode = this.findLast();
			while (!(currNode.previous == null)) {
				print(currNode.element);
				currNode = currNode.previous;
				}
			};
	}
```

Un exemple de cette liste de liée
```javascript
	var cities = new LList();
	cities.insert("Conway", "head");
	cities.insert("Russellville", "Conway");
	cities.insert("Carlisle", "Russellville");
	cities.insert("Alma", "Carlisle");
	cities.display();
	console.log();
	cities.remove("Carlisle");
	cities.display();
```

## <a name="dictionaries"></a>8 - Dictionaries
     
A dictionary is a **data structure that stores data as key-value pairs**, such as the way a phone book stores its data as names and phone numbers. When you look for a phone number, you first search for the name, and when you find the name, the phone number is found right next to the name. The key is the element you use to perform a search, and the value is the result of the search.
      
* __Propriétés__
	* LList.__datastore__
* __Méthodes__
	* LList.__add(*key, value*)__ add an element to dictionnaries with key value
	* LList.__find(*key*)__ find an element by key
	* LList.__showAll()__ display list
	* LList.__remove(*item*)__ remove the element by key
	* LList.__count()__ count the number of element
	* LList.__clear()__ vider le dictionnaire
```javascript
	function Dictionary() {
		this.add = function (key, value) {
				this.datastore[key] = value;
				};
		this.datastore = new Array();
		this.find = function (key) {
				return this.datastore[key];
				};
		this.remove = function (key) {
				delete this.datastore[key];
				};
		this.showAll = function showAll() {
				for each (var key in Object.keys(this.datastore).sort()) {
					print(key + " -> " + this.datastore[key]);
					}
				}
		this.count = function () {
				var n = 0;
				for each (var key in Object.keys(this.datastore)) {
					++n;
					}
				return n;
				};
		this.clear = function () {
				for each (var key in Object.keys(this.datastore)) {
					delete this.datastore[key];
					}
				};
	}
```

## <a name="sets"></a>9 - Sets
    
A set is a **collection of unique elements**. The elements of a set are called members. The two most important properties of sets are that **the members of a set are unordered** and that **no member can occur in a set more than once**. Sets play a very important role in computer science but are not considered a data type in many programming languages. Sets can be useful when you want to create a data structure that consists only of unique elements, such as a list of each unique word in a text.      
       
* **Union** : A new set is obtained by combining the members of one set with the members of another set.      
     
* **Intersection** : A new set is obtained by adding all the members of one set that also exist in a second set.       
    
* **Difference** : A new set is obtained by adding all the members of one set except those that also exist in a second set.     
   
```javascript  
	function Set() {
		this.dataStore = [];
		this.add = function(data) {
				if (this.dataStore.indexOf(data) < 0) {
					this.dataStore.push(data);
					return true;
					}
				else {
					return false;
					}
				};
		this.remove = function(data) {
				var pos = this.dataStore.indexOf(data);
				if (pos > -1) {
					this.dataStore.splice(pos,1);
					return true;
					}
				else {
					return false;
					}
				};
		this.size = function() {
					return this.dataStore.length;
				};
		this.union = function(set) {
				var tempSet = new Set();
				for (var i = 0; i < this.dataStore.length; ++i) {
					tempSet.add(this.dataStore[i]);
					}
				for (var i = 0; i < set.dataStore.length; ++i) {
					if (!tempSet.contains(set.dataStore[i])) {
						tempSet.dataStore.push(set.dataStore[i]);
						}
					}
				return tempSet;
				}
		this.intersect = function(set) {
					var tempSet = new Set();
					for (var i = 0; i < this.dataStore.length; ++i) {
							if (set.contains(this.dataStore[i])) {
								tempSet.add(this.dataStore[i]);
							}
						}
					return tempSet;
					};
		this.subset = function(set) {
				if (this.size() > set.size()) {
					return false;
					}
				else {
					for each (var member in this.dataStore) {
						if (!set.contains(member)) {
							return false;
							}
						}
					}
				return true;
				};
		this.difference = function(set) {
					var tempSet = new Set();
					for (var i = 0; i < this.dataStore.length; ++i) {
						if (!set.contains(this.dataStore[i])) {
							tempSet.add(this.dataStore[i]);
							}
						}
					return tempSet;
					};
		this.contains = function(data) {
				if (this.dataStore.indexOf(data) > -1) {
					return true;
					}
				else {
					return false;
					}
				}
		this.show = function show() {
				return this.dataStore;
				};
	}
```

## <a name="bad"></a>10 - Bad Parts

* **Avoid declaring global variables**.
	* Declare variables as locally as possible.
	* Avoid adding properties to the global object.
	* Use the global object for platform feature detection.
* **Avoid with statements**
	* Use short variable names for repeated access to an object.
	* Explicitly bind local variables to object properties instead of implicitly binding them with a with statement. 
* **Never Modify the arguments Object**
	* Copy the arguments object to a real array using [].slice.call(arguments) before modifying it. 
* **Never modify \__proto\__**
	* Use Object.create to provide a custom prototype for new objects.
* **Don't use ==**
	* Prefer use of === 
* **Don't use eval**

## <a name="good"></a>11 - Good Parts

* **Always use  the literal syntax for object creation**
```javascript
	var array = [];
	var object = {}
```
* **Always Declare Local Variables**
	* Always declare new local variables with var.
	* Consider using lint tools to help check for unbound variables. 
* **Use Closure**
	* Functions can refer to variables defined in outer scopes.
	* Closures can outlive the function that creates them.
	* Closures internally store references to their outer variables, andcan both read and update their stored variables.
* **Make Your Constructors new-Agnostic**
	* Make a constructor agnostic to its caller’s syntax by reinvoking itself with new or with Object.create.
	* Document clearly when a function expects to be called with new.
* **You must reassign references, use let instead of var.**
```javascript
	// bad
	var count = 1;
	if (true) {
	  count += 1;
	}
	
	// good, use the let.
	let count = 1;
	if (true) {
	  count += 1;
	}
```
* **Use object method shorthand.**
```javascript
	// bad
	const atom = {
	  value: 1,
	
	  addValue: function (value) {
	    return atom.value + value;
	  },
	};
	
	// good
	const atom = {
	  value: 1,
	
	  addValue(value) {
	    return atom.value + value;
	  },
	};
```
* **Use Array#push instead of direct assignment to add items to an array.**
```javascript
	const someStack = [];
	
	// bad
	someStack[someStack.length] = 'abracadabra';
	
	// good
	someStack.push('abracadabra');
```
* **Quand vous devez copier un tableau, utilisez Array#slice. jsPerf**
```javascript
	// bad
	const len = items.length;
	const itemsCopy = [];
	let i;
	
	for (i = 0; i < len; i++) {
	  itemsCopy[i] = items[i];
	}
	
	// good
	objetsCopie = objets.slice();
```
* **Pour convertir un objet semblable à un tableau en un tableau, utilisez Array#slice ou Array#from**
```javascript
	const foo = document.querySelectorAll('.foo');
	const nodes = Array.from(foo);
	
	or 
	
	function trigger() {
	  var args = Array.prototype.slice.call(arguments);
	  ...
	}
```
* **Use destructuring.**
```javascript
	// bad
	function getFullName(user) {
	  const firstName = user.firstName;
	  const lastName = user.lastName;
	
	  return `${firstName} ${lastName}`;
	}
	
	// good
	function getFullName(user) {
	  const { firstName, lastName } = user;
	  return `${firstName} ${lastName}`;
	}
	
	// best
	function getFullName({ firstName, lastName }) {
	  return `${firstName} ${lastName}`;
	}
	
	const arr = [1, 2, 3, 4];

	// bad
	const first = arr[0];
	const second = arr[1];
	
	// good
	const [first, second] = arr;
```
* **Use object destructuring for multiple return values, not array destructuring.**
```javascript
	// bad
	function processInput(input) {
	  // then a miracle occurs
	  return [left, right, top, bottom];
	}
	
	// the caller needs to think about the order of return data
	const [left, __, top] = processInput(input);
	
	// good
	function processInput(input) {
	  // then a miracle occurs
	  return { left, right, top, bottom };
	}
	
	// the caller selects only the data they need
	const { left, right } = processInput(input);
```
* **When programmatically building up strings, use template strings instead of concatenation.**
```javascript
	// good
	function sayHi(name) {
	  return `How are you, ${name}?`;
	}
```

## <a name="ES6"></a>12 - ESscript6

* Template string ``
```javascript
	`${code javascript} `
```
* fonctions flechés
```javascript
		([param] [, param]) => {
		   instructions
		}

		(param1, param2, …, param2) => expression
		// équivalent à 
		(param1, param2, …, param2) => {
		  return expression;
		}

		// Parenthèses non nécessaires quand il n'y a qu'un seul argument
		param => expression

		// Une fonction sans paramètre peut s'écrire avec un couple 
		// de parenthèses
		() => { instructions }
```
* destructuring et Spreed Operator **...**
```javascript
	// Gestion de la décomposition pour la liste des paramètres
	let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
	f();  
	
	[a, b] = [1, 2];
	[a, b, ...c] = [1, 2, 3, 4, 5];
	({a, b} = {a:1, b:2});

	// En cours de spécification (proposition de 
	// niveau 3)
	({a, b, ...rest} = {a:1, b:2, c:3, d:4});	
```


### <a name="ES7"></a> ESscript7
* les puissances
```javascript
   var puissance = 3 ** 4;

```
* includes
```javascript
	var a = [1, 2, 3]
	a.includes(2); // true
	a.includes(4); // false
```

## <a name="events"></a>13 - Les events

* __addEventListener__
```javascript
	const lien = document.querySelector("a");
	const liens = document.querySelector("a");
	liensArray = Array.from(images);
	
	lien.addEventListener("click",function(e) {} );
	addEventListener("event",f(e))  // ecoute l'ensemble du DOM
```

* __removeEventListener__
```javascript
	lien.removeEventListener("click", function(e) {} );
```
* La liste des Events -> https://developer.mozilla.org/en-US/docs/Web/Events
