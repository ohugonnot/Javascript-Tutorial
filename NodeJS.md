NodeJS
====
     
Dans les applications web, il est courant d'avoir des opérations longues et bloquantes comme :     
     
 - Les appels aux bases de données     
 - Les appels à des services web (ex : l'API de Twitter)     
Node.js nous évite de perdre du temps en nous permettant de faire d'autres choses en attendant que les actions longues soient terminées !     

<p align="center">   
<img src='https://user.oc-static.com/files/421001_422000/421164.png' alt='NodeJS' />
</p>

## 1 - Installation de NodeJS & NPM

 * Nouvel Debian 
 
````
 sudo apt-get install nodejs nodejs-dev npm
````
 
  * Sinon
````
  sudo apt-get install python-software-properties python g++ make
  sudo apt-get install software-properties-common
  sudo add-apt-repository ppa:chris-lea/node.js
  sudo apt-get update
  sudo apt-get install nodejs npm
````

## 2 - Des serveurs web et des threads

Avec Node.js, on n'utilise pas de serveur web HTTP comme Apache. En fait, c'est à nous de créer le serveur !

````
  var http = require('http');
  
  var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
  });
  server.listen(8080);
````

##  3 - LES ÉVÈNEMENTS

### 3.1 - Ecouter des évènements

````
  server.on('close', function() { // On écoute l'évènement close
      console.log('Bye bye !');
  })
````

### 3.2 - Emettre des évènements

````
  var EventEmitter = require('events').EventEmitter;
  
  var jeu = new EventEmitter();
  
  jeu.on('gameover', function(message){
      console.log(message);
  });
  
  jeu.emit('gameover', 'Vous avez perdu !');
````

## 4 - Les modules

### 4.1 - Créer un module

<p align="center">   
<img src='https://user.oc-static.com/files/421001_422000/421271.png' alt='NodeJS' />
</p>

````
  var direBonjour = function() {
      console.log('Bonjour !');
  }
  
  var direByeBye = function() {
      console.log('Bye bye !');
  }
  
  exports.direBonjour = direBonjour;
  exports.direByeBye = direByeBye;
````
Toutes les fonctions que vous n'exportez pas dans votre fichier de module resteront privées. Elles ne pourront pas être appelées de l'extérieur.
En revanche, elles pourront tout à fait être utilisées par d'autres fonctions de votre module.    

````
  var monmodule = require('./monmodule');
  
  monmodule.direBonjour();
  monmodule.direByeBye();
````

### 4.2 - Chercher & Installer un module

````
  npm search postgresql
  npm install markdown
  npm update
````

## 5 - LE FRAMEWORK EXPRESS.JS

### 5.1 - Install et Route

````
  npm install express
  var express = require('express');
  
  var app = express();
  
  app.get('/', function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
  });
  
  app.get('/sous-sol', function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
  });
  
  app.get('/etage/1/chambre', function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hé ho, c\'est privé ici !');
  });
  
  app.use(function(req, res, next){
      res.setHeader('Content-Type', 'text/plain');
      res.send(404, 'Page introuvable !');
  });
  app.listen(8080);
````

__Routes dynamiques__    
Express vous permet de gérer des routes dynamiques, c'est-à-dire des routes dont certaines portions peuvent varier.      
Vous devez écrire :nomvariable dans l'URL de la route, ce qui aura pour effet de créer un paramètre accessible depuis req.params.nomvariable.      

````
  app.get('/etage/:etagenum/chambre', function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
  });
````

### 5.2 - Templating : Twig

````
  npm install twig
  var Twig = require("twig"),
      express = require('express'),
      app = express();
   
  // This section is optional and used to configure twig. 
  app.set("twig options", {
      strict_variables: false
  });
   
  app.get('/', function(req, res){
    res.render('index.twig', {
      message : "Hello World"
    });
  });
  
  // Avec des parametres
  app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.twig', {compteur: req.params.nombre, noms: noms});
  });
````

### 5.3 - Express et les middlewares

Express est fourni avec une quinzaine de middlewares de base, et d'autres développeurs peuvent bien entendu en proposer d'autres via NPM. Les middlewares livrés avec Express fournissent chacun des micro-fonctionnalités.      
    
* __compression :__ permet la compression gzip de la page pour un envoi plus rapide au navigateur    
* __cookie-parser :__ permet de manipuler les cookies    
* __cookie-session :__ permet de gérer des informations de session (durant la visite d'un visiteur)    
* __serve-static :__ permet de renvoyer des fichiers statiques contenus dans un dossier (images, fichiers à télécharger...)    
* __serve-favicon :__ permet de renvoyer la favicon du site    
* __csrf :__ fournit une protection contre les failles CSRF    
etc...
     
Tous ces middlewares communiquent entre eux en se renvoyant jusqu'à 4 paramètres :     
     
__err :__ les erreurs     
__req :__ la requête du visiteur     
__res :__ la réponse à renvoyer (la page HTML et les informations d'en-tête)     
__next :__ un callback vers la prochaine fonction à appeler     

<p align="center">   
<img src='https://user.oc-static.com/files/421001_422000/421333.png' alt='NodeJS' />
</p>

http://expressjs.com/api.html      
http://expressjs.com/guide/using-middleware.html      

* Pensez à installer les middlewares dont vous avez besoin avec npm install avant d'exécuter ce code.
* L'ordre d'appel des middlewares est extrêmement important. Par exemple, on commence par activer le logger. Si on le faisait en dernier, on ne loggerait rien !
Quand vous faites appel aux middlewares, réfléchissez donc à l'ordre, car il peut impacter fortement le fonctionnement de votre application.

## 6 - SOCKET.IO : PASSEZ AU TEMPS RÉEL !

WebSocket est une fonctionnalité supportée par l'ensemble des navigateurs récents. Elle permet un échange bilatéral synchrone entre le client et le serveur.      
WebSocket est une nouveauté du Web qui permet de laisser une sorte de "tuyau" de communication ouvert entre le client et le serveur. Le navigateur et le serveur restent connectés entre eux et peuvent s'échanger des messages dans un sens comme dans l'autre dans ce tuyau. Désormais, le serveur peut donc lui-même décider d'envoyer un message au client comme un grand !      

````
  npm install socket.io
  var http = require('http');
  var fs = require('fs');
  
  // Chargement du fichier index.html affiché au client
  var server = http.createServer(function(req, res) {
      fs.readFile('./index.html', 'utf-8', function(error, content) {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(content);
      });
  });
  
  // Chargement de socket.io
  var io = require('socket.io').listen(server);
  
  // Quand un client se connecte, on le note dans la console
  io.sockets.on('connection', function (socket) {
      console.log('Un client est connecté !');
  });
  
  
  server.listen(8080);
````
Index.html
````
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8" />
          <title>Socket.io</title>
      </head>
   
      <body>
          <h1>Communication avec socket.io !</h1>
  
          <script src="/socket.io/socket.io.js"></script>
          <script>
              var socket = io.connect('http://localhost:8080');
          </script>
      </body>
  </html>
````
