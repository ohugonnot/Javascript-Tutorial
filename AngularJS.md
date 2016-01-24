Angular JS Tutorial
======================
https://angularjs.org/

### Concepts 

* __Architecture MVC (Modèle-Vue-Contrôleur)__ : si vous connaissez le développement, vous avez sûrement entendu parler de ce type d'architecture incontournable qui consiste à avoir une stricte séparation entre les données (Modèle), la présentation des données (Vue), et les actions que l'on peut effectuer sur ces données (Contrôleur)
* __Data Binding__ : nous y reviendrons très largement au cours des prochains chapitres. Juste pour vous donner un avant-goût, je vous indique que, grâce à ce concept, les liens entre votre code HTML et JavaScript ne seront que plus forts. :p
* __Injection de dépendances__ : tout comme l'architecture MVC, lorsque l'on parle d'injection de dépendances, on parle d'un concept prépondérant dans tout développement. Grâce à cela, les modules que vous développerez n'auront plus à se soucier d'instancier leurs dépendances.
La manipulation du DOM au moyen de directives : la manipulation du DOM conduit souvent à la création de code difficilement maintenable et difficilement testable. Nous verrons qu'avec Angular, ce n'est plus le cas du tout !

### Instalation

* __NPM__ est un gestionnaire de paquets qui vous permet de gérer vos dépendances côté serveur. Le fichier package.json permet de décrire les dépendances de votre application. L'ensemble des dépendances sont installées dans le répertoire node_modules.
* __Bower__ est un gestionnaire de paquets qui vous permet de gérer vos dépendances côté client. Le fichier bower.json permet de décrire vos dépendances. Ces dépendances sont installées dans le répertoire bower_components.
* __Grunt__ est un __"Task Runner"__ utilisé pour automatiser les tâches comme le build, le test et le lancement de votre application. Grunt fonctionne en collaboration avec karma afin de lancer automatiquement les tests.
* __Yeoman__ permet de créer la structure de votre application et fonctionne en collaboration avec __Bower__ et __Grunt__. N'oubliez pas d'installer les générateurs en relation avec le type d'application que vous souhaitez développer. Il en existe beaucoup. Voici une page qui pourrez-vous aider dans votre recherche : http://yeoman.io/generators/.

```
npm install -g bower
npm install -g yo
npm install -g generator-angular
mkdir workspace ; mkdir workspace/first-app ; cd workspace/first-app
yo angular
```

### Le modèle MVC

<p align="center">   
<img src='https://sdz-upload.s3.amazonaws.com/prod/upload/mvc-angular.png' alt='NodeJS' />
</p>

````html
<!doctype html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <section ng-controller="headerCtrl">
            <h1>HEADER</h1>
        </section>
        <section ng-controller="menuCtrl">
            <h1>MENU</h1>
        </section>
        <section ng-controller="contentCtrl">
            <h1>CONTENT</h1>
        </section>
        <section ng-controller="footerCtrl">
            <h1>FOOTER</h1>
        </section>
    </body>
</html>
````
````javascript
var app = angular.module("app", []);

app.controller("headerCtrl", function($scope){
    //...    
});

app.controller("footerCtrl", function($scope){
    //...    
});

app.controller("menuCtrl", function($scope){
    //...    
});

app.controller("contentCtrl", function($scope){
    //...    
});
````

### LA NOTION DE DATA-BINDING

Prenez vraiment conscience que le **data-binding** est un concept clé de ce framework. Croyez-moi, vous verrez sa puissance au fur et à mesure de son utilisation. Le plus difficile, au regard de mon expérience, c'est de changer sa façon de penser. Ne plus agir directement avec le DOM est quelque chose de compliqué à assimiler, surtout au début ! Le data-binding est un peu ce que sont les pointeurs pour le langage C. Ils sont partout et il est important de les comprendre avant de poursuivre.

AngularJS pratique ce que l'on appelle le **"two-way data binding"**. En d'autres termes, il s'agit d'un **data-binding bidirectionnel**. Ainsi, grâce à cette technique, lorsque vous ferez des actions sur votre page HTML, les variables dans votre JavaScript se mettront à jour et vice-versa : lorsque vous changerez vos variables dans votre JavaScript, les répercussions sur la vue seront immédiates.

### L'INJECTION DE DÉPENDANCES
http://www.martinfowler.com/articles/injection.html    

Angular possède nativement un certain nombre de modules comme $scope , $location ...      
Remarquez que ces modules sont tous précédés par $ . C'est une convention qui nous permet de savoir qu'il s'agit effectivement de modules natifs à Angular. Nous verrons par la suite qu'il est bien évidemment possible de développer nos propres modules. Il sera donc déconseillé de suivre la même convention.     
        
* __La simplicité__. Avouez que c'est très pratique pour un développeur. Vous n'avez plus à vous soucier du comment instancier les modules que vous utilisez. Cela suit le principe du "least knowledge". Lorsque vous développez quelque chose, vous n'avez pas envie de vous soucier des autres composants, vous voulez juste les utiliser !
* __La fiabilité__. Lorsque votre module est chargé, vous avez la certitude que toutes ses dépendances sont chargées et que vous avez la possibilité de les utiliser.
* __La réutilisabilité__. Nous le verrons lorsque nous aborderons la partie des services, mais il s'agit d'un point très important. Lorsque vous développez des services permettant par exemple de faire des conversions de dates, il y a fort à parier que vous souhaiteriez pouvoir réutiliser ce module dans d'autres projets. L'injection de dépendances permet donc d'inciter les développeurs à créer de petits modules unitaires et à les assembler par la suite pour créer des systèmes plus conséquents.
* __Les tests__. C'est un point extrêmement important. Vous commencez à me connaître et vous savez que j'accorde une très grande importance aux tests. Si le module que vous souhaitez tester possède 10 dépendances, il est assez embêtant d'avoir à instancier les 10 modules afin de pouvoir juste tester notre module. À la place, nous allons dire au système d'utiliser des mocks (des bouchons) qui vont se comporter comme nos dépendances.

**HTML**
````html
<div ng-app="app">
    <div ng-controller="exempleCtrl">
       HELLO {{name}}!
    </div>
</div>
````
** JavaScript **
````javascript
var app = angular.module("app", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});
````
