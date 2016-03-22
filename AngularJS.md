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
[https://docs.angularjs.org/guide/directive](https://docs.angularjs.org/guide/directive)    

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
     
__restrict__ (Optionnel)          
Permet de définir comment la déclaration de la directive doit se faire dans le code HTML. Les                                 options sont :     
     
````
    'E' pour element. Exemple : <my-loading title="Paramètres">...</my-loading> 
    'A' pour attribut. Exemple : <div my-loading="Paramètres">...</div> 
    'C' pour classe. Exemple : <div class="my-loading:Paramètres">...</div> 
    'M' pour commentaires. Exemple : <!-- directive: my-loading Paramètres --> 
````
     
__priority__ (Optionnel)     
Dans le cas où, sur un même élément, vous auriez plusieurs directives, il est possible d'accorder une priorité à une directive. Les priorités hautes s'exécutent en premier. La valeur par défaut est 0.
     
__templates__ (Optionnel)     
Permet de remplacer le contenu d'un élément par un template. Cela est par exemple utile lorsque vous développez un système d'onglets. Au lieu d'écrire l'ensemble de votre code au sein d'une seule page HTML dans laquelle vous allez poser tout un ensemble de conditions, vous pouvez juste déclarer un template pour chaque onglet.      
Cette option requiert que vous passiez le template de façon "inline", c'est à dire que vous fournissiez une chaîne de caractère avec les balises HTML.

__templateUrl__ (Optionnel)     
Cette option permet de charger un template depuis un fichier.     
     
__replace__ (Optionnel)      
Si vrai, remplace l'élément. Si faux ou non-spécifié, ajoute la directive à l'élément courant.      
     
__transclude__ (Optionnel)    
Au lieu de remplacer ou ajouter du contenu, vous pouvez aussi déplacer le contenu original à l'intérieur du nouveau template grâce à cette propriété. Si définie à true, la directive supprimera le contenu original et le rendra disponible pour le réinsérer à l'intérieur du template en utilisant la directive ng-transclude.       
      
__scope___ (Optionnel)    
Créer un nouveau contexte au lieu d'hériter du contexte du parent. Trois options s'offrent à vous lorsque vous souhaitez avoir un contexte. Soit :     
* Vous utilisez le contexte existant qui est celui dans lequel évolue votre directive (valeur par défaut).       
* Vous définissez un nouveau contexte qui va hériter du contexte du parent (en l'occurrence le contrôleur qui encapsule votre directive).      
* Vous créez un contexte isolé qui n'hérite pas des propriétés du contexte du parent à moins que vous spécifiiez les attributs dont vous voulez hériter.         
      
````
    contexte existant : scope : false 
    nouveau contexte : scope : true 
    contexte isolé : scope: { attributeName1: 'BINDING STRATEGIE',...} 
````
     
     
La stratégie de binding est définie selon trois symboles :     
     
````
    @  : Passer l'attribut sous forme de chaîne de caractères.
    =   : Utiliser le data-binding afin de lier la propriété à la propriété du parent.
    &  : Passer une fonction depuis le parent qui sera exécutée plus tard.
````
      
__controller__ (Optionnel)     
     
Créer un contrôleur. Cela s'avère utile notamment lorsque vous avez plusieurs directives que vous voulez faire communiquer. On peut facilement imaginer qu'un menu ait besoin de connaître les items qu'il comporte pour pouvoir afficher ou cacher les bons éléments !      
      
__require__ (Optionnel)     
Indique qu'une autre directive est requise pour que celle-ci fonctionne correctement     
      
##### Les fonctions compile  et link
     
Il s'agit des fonctions qui vont être utilisées dans le processus de manipulation du DOM, ajout de listeners...     
     
Afin de comprendre le fonctionnement de ces deux fonctions, étudions de plus près le processus d'initialisation utilisé par Angular. Ce processus se fait en 3 étapes :     
     
1. __Chargement__ : Angular charge et recherche la directive ng-app.
2. __Compilation__ : au cours de cette phase, Angular parcourt le DOM afin d'identifier l'ensemble des directives. Il s'occupe notamment des manipulations du DOM qui ne requièrent pas l'utilisation du contexte.
3. __Mise en place des liens__ : il s'agit de la dernière phase. C'est notamment au cours de celle-ci qu'Angular se charge de lier un contexte à la directive.      
      
Vous avez donc accès au contexte seulement dans les fonctions link  et non dans les fonctions compile.     
Les fonctions compile ne sont appelées qu'une seule fois alors que les fonctions link sont appelées plusieurs fois, une fois pour chaque instance de la direct    
      
* Ai-je besoin d'utiliser le contexte ? Si oui, utilisez la fonction link. Sinon, utilisez la fonction compile.       
* Faites-vous des manipulations du DOM ? Si oui et que vous n'avez pas besoin du contexte, utilisez compile, sinon, utilisez link.      
     

Voici donc le code HTML :     
````html
<div ng-app="app">
    <div ng-controller="SomeController">
        <expander class="expander" expander-title="title">
            {{text}}
        </expander>
    </div>
</div>
```

Appliqué au code JavaScript suivant :     
````javascript  
var app = angular.module("app", []);
app.controller("SomeController", function($scope){
    $scope.title = "Titre";
    $scope.text = "Contenu";
});

app.directive("expander", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs){
            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            };
        }
    };
});
```

### LES SERVICES    
Ce sont des singletons, c'est-à-dire des instances uniques d'objets. Le rôle d'un service est de fournir un ensemble de tâches nécessaires au fonctionnement de votre application.     
      
      
Comme pour les directives, Angular fournit déjà des services très utiles comme :
* __$location__ : interagir avec l'URL de votre navigateur.
* __$route__ : changer de vue en fonction de l'URL.
* __$http__ : communiquer avec les serveurs.
* 

* __Factory__

````javascript  
app.factory("factoryExample", function(){
    return{
        service1: function(){...},
        service2: function(){...},
    }
});

app.controller("factoryCtrl", function($scope, factoryExample){
     factoryExample.service1();
});
```
     
Lorsque vous créez une factory, vous avez la responsabilité de retourner un objet qui possède un certain nombre d'utilitaires qui assurent vos services.    

* __Service__

````javascript  
app.service("serviceExample", function(){
    this.service1 = function(){...};
    this.service2 = function(){...};
});

app.controller("serviceCtrl", function($scope, serviceExample){
     serviceExample.service1();
});
```  
      
Lorsque vous utilisez le service, il s'agit d'une instance du service qui est passée au contrôleur. Vous n'avez donc pas la responsabilité de retourner une valeur dans votre service. Il vous suffit d'attacher vos fonctions et attributs à this.     
       
* __Provider__    
C'est sans aucun doute la solution la plus compliquée mais également la solution la plus "configurable".  L'intérêt d'utiliser un provider est que vous avez la possibilité de le configurer à l'exécution. Voici donc un exemple :      
    
````javascript  
app.provider("greeter", function(){
    var salutation = "Hello";
    this.setSalutation = function(_salutation){
        salutation = _salutation;
    };

    function Greeter(){
        this.greet = function(){
            return salutation;   
        };
    };
    
    this.$get = function(){
        return new Greeter();
    };
});

var app = angular.module("app", []).config(function(greeterProvider){
    greeterProvider.setSalutation("Bonjour");  
});

app.controller("providerCtrl", function($scope, greeter){
     console.log(greeter.greet());
});
```
      
Remarquez que nous configurons notre service avant de l'utiliser. Lorsque notre contrôleur demande une instance de greeter, c'est la fonction $get qui est exécutée. 
