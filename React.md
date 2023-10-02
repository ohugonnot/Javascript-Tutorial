## React : Un framework javascript pour créer des UI

### Interets
- Construire des applications fluides sans rechargement de page __SPA__       
- __Declarative Code__ Vs Imperative Code
- Avoir un cadre de travail plus claire que du vanilla, plus facile à __réutiliser et à maintenir__ pour les applications complexes    
- Séparation de la logique en __compenents__
- Build process __le code qu'on écrit n'est pas le code qui est executé__      
- Utilisation de __JSX__ qui permet d'__écrire du HTML dans du javascript__ et faciliter les templates      

### Installation
```bash
 npm create vite@latest
 npm install 
 npm run dev
```

### Javascript l'essentiels pour travailler avec React
- Pour utiliser les syntaxe moderne d'import =>  ```<script type='module'></script>```      
- Comprendre la notion de ```import``` et ```export default``` en javascript     
- Arrow fonction :   
```Javascript
(arg1,arg2) => returnedValue
```
```Javascript
(arg1,arg2) => {
	// some code
	return explicitReturnedValue
}
```
- Maitriser les __array__ et __objets__ et les __class__ et les fonctions pour les utiliser :      
```Javascript
const object = {
	key: 'value',   // Propriétés
	key2: 'value2',
	function()  {    // Methodes

	}
}
for(const element in object) {
}

let array = ['truc,'bidule','...'];
for(const element of array) {

}
array.push('qqc');
array.filter((item) => bool)
array.map((item) => action)
array.findIndex((item) => bool)

```
- Comprendre et utiliser le __destructuring__ sur les objets et les arrays      
```
const [name, firstname] = ["Nom", "Prenom"];
const {name: lastname, firstname} = {name: "name", firstname: "prenom"};
```
- Comprendre est utiliser le __spread operator__ : ```...```    
```Javascript
const mergeArray = [...Array1, ...Array2];
const object = {
	newValue: true,
	...oldObject
};
```

### React
- React est entierement basé sur les __compenents__ (réusabilité, séparation des responsabilités)    
```Javascript
import './ListItem.css'

const ListItem = (props) => {

    return <li>{props.children}</li>
}

export default ListItem    
```
- Les compenents React doivent __toujours être contenu dans un element principal__     
