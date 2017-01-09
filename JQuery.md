JQuery -- Tutorial
========================
#### Menu
1. [Les sélecteurs ](#selecteur)
2. [Modifier le contenu d'un élément](#modifier)
3. [Insérer du contenu dans un élément](#inserer)
4. [Les événements](#evenements)
5. [Les bonnes pratiques](#pratique)


### <a name="selecteur"></a> Les sélecteurs 

Le sélecteur jQuery $('sel') utilise la syntaxe CSS. En remplaçant sel par un sélecteur CSS quelconque, les éléments correspondants (s'ils existent) seront sélectionnés dans le DOM.            

* __$(__ *selector* __)__ : sélectionne les élements qui correspondent au sélecteur ;     
 
       
L'objet retourné par un sélecteur jQuery peut faire référence à plusieurs éléments. Pour accéder à un élément, vous pouvez préciser son index entre crochets, en ayant bien à l'esprit que le premier élément a un index égal à 0. Par exemple, le sélecteur ```$('a')[2]``` fait référence au troisième lien hypertexte contenu dans la page.   
      
Pour appliquer une méthode à un objet jQuery obtenu en utilisant un sélecteur, il suffit d'écrire cette méthode à droite du sélecteur en la séparant de ce dernier par un point. Par exemple, l'instruction suivante écrit en jaune tous les liens hypertextes contenus dans la page 
      
```jquery
$('a').css('color', 'yellow');
```

Pour chaîner deux méthodes jQuery, écrivez-les l'une à la suite de l'autre en les séparant par un point. Par exemple, cette instruction applique un arrière-plan de couleur rouge et un texte de couleur jaune aux éléments de classe rouge : 

```jquery
$('.rouge').css('background','red').css('color','yellow');.       
```

* ```['nom*="valeur"']``` : attribut nom qui contient (partiellement ou totalement) la valeur spécifiée.
* ```['nom~="valeur"']``` : attribut nom qui contient la valeur spécifiée, délimité par des espaces.    
* ```['nom$="valeur"']``` : attribut nom qui se termine par la valeur spécifiée.
* ```['nom!="valeur"']``` : attribut nom, ou qui possèdent un attribut nom différent de la valeur spécifiée.
* ```['nom^="valeur"']``` : attribut nom qui commence par la valeur spécifiée. 
* ```('p > e')``` : Éléments e directement descendants d'éléments p
* ```('p + e')``` : Éléments e directement précédés d'un élément p
* ```('p ~ e')``` : Éléments e précédés d'un élément p
* ```:empty``` : Éléments qui n'ont pas d'enfant
* ```:first-child```  : Premier enfant
* ```:first``` : Premier élément
* ```:last-child``` : Dernier enfant
* ```:last``` : Le dernier élément de la sélection
* ```:nth-child()``` : Élément qui est l'énième enfant de son parent
* ```:only-child``` : Éléments qui sont enfants uniques de leur parent
* ```:even``` : Éléments pairs
* ```:odd``` : Éléments impairs
* ```:eq()``` : Élément dont l'index est spécifié
* ```:gt()``` : Éléments dont l'index est supérieur à (greater than) l'index spécifié
* ```:lt()``` : Éléments dont l'index est inférieur à (lower than) l'index spécifié
* ```:header``` : Tous les titres h1 à h6
* ```:hidden``` : Éléments cachés
* ```:visible``` : Éléments visibles
* ```:not()``` : Éléments qui ne correspondent pas au sélecteur spécifié
* ```:input``` : Tous les éléments de type input, textarea, select et button
* ```:button``` : Éléments de type button
* ```:checkbox``` : Éléments de type checkbox
* ```:checked``` : Éléments qui sont cochés
* ```:radio``` : Éléments de type radio
* ```:reset``` : Éléments de type reset
* ```:image``` : Tous les boutons de type image
* ```:submit``` : Éléments de type submit
* ```:text``` : Éléments de type text
* ```:password``` : Éléments de type password
* ```:selected``` : Éléments sélectionnés
* ```:focus``` : Sélectionne l'élément s'il a le focus
* ```:enabled``` : Éléments validés

------------------------------

###  <a name="modifier"></a> MODIFIER LE CONTENU D'UN ÉLÉMENT

* __css(__  *"attr",value* __)__ : modifier le css
* __attr(__  *"attr",val* __)__ : modifier un attribut
* __removeAttr(__  *"attr"* __)__ : suprrimer un attribut
* __addClass(__ *"class"* __)__ : ajoute une classe dans les éléments sélectionnés ;
* __removeClass(__ *"class"* __)__ : supprime (si elle existe) une classe des éléments sélectionnés ;
* __toggleClass(__ *"class"* __)__ : accomplit deux actions
* __hasClass(__ *"class"* __)__ : tester si la classe existe
* __is(__ *"class"* __)__ : tester si la classe existe
* __val(__ *value* __)__ : selectionner ou remplacer la valeur d'un input
* __width()__
* __innerWidth()__ : width + padding gauche + padding droit
* __outerWidth()__ : width + padding gauche + padding droit + border gauche + border droit
* __outerWidth(true)__ : "" + margin gauche + margin droit
* __height()__ 
* __innerHeight()__ : height + padding supérieur + padding inférieur
* __outerHeight()__ : height + padding supérieur + padding inférieur + border supérieur + border inférieur
* __outerHeight(true)__ : "" + margin supérieur + margin inférieur
* __html()__ : "" + margin supérieur + margin inférieur
* __text()__ : "" + margin supérieur + margin inférieur

-------------------------------

###  <a name="inserer"></a> INSERER LE CONTENU D'UN ÉLÉMENT

Pour insérer du contenu dans un document, vous utiliserez les méthodes       
* __append()__
* __prepend()__
* __before()__
* __after()__

Pour remplacer des éléments, vous utiliserez la méthode     
* __replaceWith()__

Pour insérer des éléments dans le DOM, vous utiliserez les méthodes     
* __appendTo()__
* __prependTo()__
* __insertBefore()__
* __insertAfter()__

Enfin, pour dupliquer des éléments, vous utiliserez la méthode 
* __clone()__

Les méthodes permettent d'entourer un élément par un ou plusieurs autres éléments créés à la volée.
* __wrap()__
* __wrapInner()__
* __wrapAll()__
 
Pour supprimer un élément, vous utiliserez la méthode 
* __remove()__

###  <a name="evenements"></a> Les évenements


__Méthode traditionnelle  -> Méthode on() équivalente__   
```$(sel).click(function() {…})```  -> ```$(sel).on('click', function() {…})```      
```$(sel).scroll(function() {…})``` -> ```$(sel).on('scroll', function() {…})```       
        
1. **Une méthode** pour gérer **plusieurs événements**         
Supposons que vous vouliez relier les méthodes événementielles mouseenter() et mousemove() aux balises <img>. Traditionnellement, vous utiliserez les instructions suivantes :        
```javascript     
$('img').on('mouseenter mousemove', function() { … })
```
2. **Plusieurs méthodes** en **une seule instruction**           
Imaginons maintenant que vous vouliez associer les fonctions traitement1 et traitement2 aux événements mouseenter et mousemove des balises <img> de classe grand. Vous utiliserez les instructions suivantes :        
```javascript     
$('img.grand').on({mouseenter:traitement1, mousemove:traitement2});
```
3. **Désactiver une méthode** de gestion événementielle
```javascript     
$('#image').off('click', traitement);
```
4. Gestion événementielle **unique**
```javascript     
$('img').one('click', function() {
```
5. **Déclenchement** d'évenements 
```javascript     
$(sel).trigger('ev');
```

* Certains événements peuvent être déclenchés par une instruction, en utilisant la méthode ```trigger()``` : ```blur```, ```change```, ```click```, ```dblclick```, ```error```, ```focus```, ```keydown```, ```keypress```, ```keyup```, ```select``` et ```submit```. Par contre, les événements suivants ne sont pas déclenchables : ```load```, ```mousedown```, ```mouseout```, ```mouseover```, ```mousemove```, ```mouseup```, ```resize``` et ```unload```.     
* Il est possible de définir des événements personnalisés en jQuery, en utilisant la méthode ```on()```. L'événement ainsi créé peut être déclenché avec la méthode ```trigger()```.     
* La délégation d'événements permet de cloner la gestion événementielle d'un élément à un ou plusieurs de ses enfants créés à la volée dans le code jQuery. Peu importe le nombre d'éléments créés : ils se comporteront tous (d'un point de vue événementiel) comme leur parent. Et ce, sans qu'aucun code supplémentaire ne soit écrit.      

##  <a name="pratique"></a> Les bonnes pratiques avec JQUERY

Prefixez vos variables d'objets jQuery avec un $.

```javascript 
// pas bien
var sidebar = $('.sidebar');

// bien
var $sidebar = $('.sidebar');
``` 

Mettez en cache vos requêtes jQuery.

```javascript 
// pas bien
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// bien
function setSidebar() {
  var $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    'background-color': 'pink'
  });
}
```

Pour les requêtes du DOM, utilisez le sélecteur en cascades $('.sidebar ul') ou le parent > enfant $('.sidebar > ul'). jsPerf     
     
Utilisez find avec des objets de requêtes jQuery appartenants à la portée.     

```javascript 
// pas bien
$('ul', '.sidebar').hide();

// pas bien
$('.sidebar').find('ul').hide();

// bien
$('.sidebar ul').hide();

// bien
$('.sidebar > ul').hide();

// bien
$sidebar.find('ul');
``` 
