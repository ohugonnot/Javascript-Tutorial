## React : Un framework javascript pour créer des UI

![image](https://github.com/ohugonnot/Javascript-Tutorial/assets/13014954/41c08035-a20d-4b34-967e-74d267946d4f)

### Interets
- Construire des applications fluides sans rechargement de page __SPA__       
- __Declarative Code__ Vs Imperative Code
- Avoir un cadre de travail plus claire que du vanilla, plus facile à __réutiliser et à maintenir__ pour les applications complexes    
- Séparation de la logique en __reactive compenents__ 
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
- React est entierement basé sur les __compenents__ (réusabilité, séparation des responsabilités, réactivité)    
```Javascript
import './ListItem.css'

const ListItem = (props) => {

    return <li>{props.children}</li>
}

export default ListItem    
```
- Les compenents React doivent __toujours être contenu dans un element principal__       
- On doit subdiviser notre page en multiple compenents
- Il est possible de passer des __variables__ et des __fonctions__ en propriétés dans les compenents qu'on retrouve dans l'argument ```props```     
- Le __rendu__ de react est uniquement fait par l'execution de la __fonction du compenennts__.
Si on veut que le rendu change, il faut réexecuter la fonction qui est responsable du composant.      
Pour cela on utilise des __Hooks__ React qui nous permette de rafraichir la fonction lors de certains evenements.
	- __useState__ : permet de lié le rechargement de la fonction de rendu à une variable utilisé dans le template
	```Javascript
	const [content, setContent] = useState(props.content);
 	setContent('test');
	```
 	Si un __setState__ dépends d'un __previousState__ pour éviter les erruers de refresh il faut transforme le setState avec un retour fonction
  	- __useState__ : permet de lié le rechargement de la fonction de rendu à une variable utilisé dans le template
	```Javascript
	const [content, setContent] = useState(props.content);
 	setState((previousSate) => previousState+' updated!')
	```
 	Les variables qui sont calculés à partir d'une variable de state sont réévalué automatiquement    
- Il faut passer par le parent pour transmettre des informations et faire redescendre ensuite aux enfants
![image](https://github.com/ohugonnot/Javascript-Tutorial/assets/13014954/22a4aab0-71f8-40e1-a73b-4fd4c1ec5a8e)
- Affichage conditionnel    
	```Javascript
	{unreadMessages.length > 0 &&
	<h2>
	  Vous avez {unreadMessages.length} message(s) non-lu(s).
	</h2>
	}
	{ isGoal ? <MadeGoal/> : <MissedGoal/> }
	```
 - Affichage de liste
	```Javascript
	{cars.map((car) => <Car key={car.id} brand={car.brand} />)}
	```
 - Style    
  	```Javascript
    	// camelCased Property Names
    	// Use backgroundColor instead of background-color:
	<h1 style={{color: "red"}}>Hello Style!</h1>

    	// CSS module
    	import styles from './my-style.module.css'; 
	const Car = () => {
	  return <h1 className={styles.bigblue}>Hello Car!</h1>;
	}
	```

   ### Réaliser un projet react
   ![image](https://github.com/ohugonnot/Javascript-Tutorial/assets/13014954/03b3cccf-722f-4b7e-9ff8-5e6f0e198098)
  
