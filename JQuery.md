JQuery -- Tutorial
========================

Le sélecteur jQuery $('sel') utilise la syntaxe CSS. En remplaçant sel par un sélecteur CSS quelconque, les éléments correspondants (s'ils existent) seront sélectionnés dans le DOM.            

```__$('a')__``` sélectionne tous les liens hypertextes ;     
```__$('.rouge')__``` sélectionne les éléments de classe rouge ;     
```__$('#e2')__``` sélectionne l'élément d'identifiant e2 ;       
```__$('[src]')__``` sélectionne tous les éléments qui possèdent un attribut src ;        
```__$('[width="40"]')__``` sélectionne tous les éléments qui ont un attribut width égal à 40.     
       
       
L'objet retourné par un sélecteur jQuery peut faire référence à plusieurs éléments. Pour accéder à un élément, vous pouvez préciser son index entre crochets, en ayant bien à l'esprit que le premier élément a un index égal à 0. Par exemple, le sélecteur $('a')[2] fait référence au troisième lien hypertexte contenu dans la page.      
Pour appliquer une méthode à un objet jQuery obtenu en utilisant un sélecteur, il suffit d'écrire cette méthode à droite du sélecteur en la séparant de ce dernier par un point. Par exemple, l'instruction suivante écrit en jaune tous les liens hypertextes contenus dans la page 
```jquery
$('a').css('color', 'yellow');
```
Pour chaîner deux méthodes jQuery, écrivez-les l'une à la suite de l'autre en les séparant par un point. Par exemple, cette instruction applique un arrière-plan de couleur rouge et un texte de couleur jaune aux éléments de classe rouge : 
```jquery
$('.rouge').css('background','red').css('color','yellow');.       
```
