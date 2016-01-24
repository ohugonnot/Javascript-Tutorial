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

**HTML**
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
**JavaScript**
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

#### $scope

**HTML**
````html
<div ng-app="app">
    <div ng-controller="exempleCtrl">
       HELLO {{name}}!
    </div>
</div>
````
**JavaScript**
````javascript
var app = angular.module("app", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});
````
Toute donnée qui n'est pas attachée à $scope n'appartient pas au modèle et ne peut donc pas être exposée à la vue !     
 Il est parfois nécessaire d'accéder à d'autres contextes que le sien. En effet, lorsque vous êtes dans votre contrôleur, il est possible que vous ayez besoin d'accéder au contexte d'un autre contrôleur. Si tel est le cas, Angular possède l'objet $rootScope qui permet d'accéder à l'ensemble des contextes présents dans votre page.    
 
#### $watch
https://code.angularjs.org/1.2.26/docs/api/ng/type/$rootScope.Scope     
     
````javascript
app.controller("BillCtrl", function($scope){
    $scope.articles = [{"name": "Téléphone sans-fil", "quantity": 1, "price": "29.99"}, {"name": "Chargeur iPhone5", "quantity": 1, "price": "29.99"}];
    $scope.total = function(){
        var total = 0;
        for(var i = 0; i < $scope.articles.length; i++){
            total += $scope.articles[i].price * $scope.articles[i].quantity;
        }
        return total;
    };
    function calculateDiscount(newValue, oldValue, scope){
        $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
    };
    
    $scope.finalTotal = function(){
        return $scope.total() - $scope.discount;   
    };
    
    $scope.$watch($scope.total, calculateDiscount);
});
````
Remarquez l'utilisation de $watch. Il s'agit d'une fonction attachée à $scope qui va vous permettre d'observer certaines propriétés de votre modèle et de déclencher des opérations lorsque la valeur de ces propriétés changent.     
     
La spécification de la fonction est la suivante :      
     
    $watch(watchFn, watchAction, deepWatch) 
       
Analysons les paramètres :      
       
* **watchFn** : la propriété de votre modèle que vous souhaitez observer. Ce paramètre peut-être soit une fonction, soit une expression.
* **watchAction** : fonction ou expression qui sera appelée lorsque watchFn  change.
* **deepWatch** : ce paramètre est optionnel. Il s'agit d'un booléen qui lorsqu'il est vrai indique à Angular qu'il doit déclencher watchAction lorsque les sous-propriétés d'un objet changent. Ce paramètre est pratique lorsque vous souhaitez examiner l'ensemble des propriétés d'un tableau ou d'un objet.     
      
L'utilisation de $watch est très puissante et je vous encourage vivement à l'utiliser, mais attention aux performances qui peuvent parfois se dégrader. 

### LES DIRECTIVES
     
**Les directives sont utilisées lorsque l'on souhaite modifier ou transformer le DOM (Document Object Model).**     
     
Angular fournit un certain nombre de directives. Rappelons-en quelques-unes :
     
**ngController** : directive permettant d'attacher un contrôleur à la vue     
**ngRepeat** : directive permettant de répéter un template pour chaque élément d'une collection.     
**ngModel** : directive permettant de lier les input, textarea ou select à une propriété du contexte actuel.      
**ngApp** :   est une autre directive dont nous n'avons pas parlé mais qui est extrêmement importante. Cette directive permet tout simplement d'initialiser votre application. Placez-la au niveau de votre balise body ou html, et passez-lui le nom de votre application. 

#### Créer une directive

* __namespaceDirectiveName__

Lorsque vous souhaiterez appeler votre directive dans votre vue, utilisez la syntaxe suivante :

* __namespace-directiveName__

Ainsi, si je crée la directive loading, mon module JavaScript s'appellera myLoading et je pourrai l'appeler dans mon code HTML par le nom my-loading.

````javascript
var myModule = angular.module(...);

myModule.directive('namespaceDirectiveName', function factory(injectables) { 
    var directiveDefinitionObject = {
        restrict: string,
        priority: number,
        template: string,
        templateUrl: string,
        replace: bool,
        transclude: bool,
        scope: bool or object,
        controller: function controllerConstructor($scope,
                                                          $element,
                                                          $attrs,
                                                          $transclude),
        require: string,
        link: function postLink(scope, iElement, iAttrs) { ... }, 
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) { ... }, 
                post: function postLink(scope, iElement, iAttrs, controller) { ... }
            }
        }
    };
    return directiveDefinitionObject; 
});
````
