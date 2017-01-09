VueJS-Tutorial 
======================
https://vuejs.org/

### Menu
1. [Installation](#Installation)
2. [Déclaration](#Déclaration)
3. [Cycle de vie de l'instance](#cycle)
4. [Les attributs](#attribut)    
4.1 Binder les données

     
     
     
## <a name="Installation"></a> Installation

Insérer dans le head ou le body

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```

## <a name="Déclaration"></a> Déclaration

```html
<div id="app">
  [[ message ]]
</div>
```

## <a name="cycle"></a>Cycle de vie de l'instance

<img src='https://vuejs.org/images/lifecycle.png' alt='vueJS' />

```javascript
var app = new Vue({    // options
  delimiters: ['[[', ']]'], // pour éviter les conflits avec Twig
  el: '#app',
  data: {                          // Liste de propriétés
    message: 'Hello',      // string
    succcess: true,        // boolean
    style: {color: black}  // object
  }
  methods: {                       // Liste de fonctions de méthodes
    action: function() {
    }
  }
})
```

## <a name="attribut"></a>Les attributs

### Binder les données 
* html => __[[ var ]]__
```html
<div id="app">
  [[ message ]]
</div>
```

* attribut =>  __v-bind:__ ou __:__

```html
<div id="app">
  <span v-bind:title="message" :class='message'>Test</span>
</div>
```

* input => avec __v-model="var"__
```html
<div id="app">
  <input type="text" v-model="message">
</div>
```

### Les conditions et les boucles
* __v-if__, __v-else__
```html
<div id="app">
  <span v-if='success'>Success</span>
  <span v-else='success'>Error</span>
</div>
```
* __v-show__
```html
<div id="app">
  <span v-show='success'>Success</span>
</div>
```
La différence entre __v-show__ et __v-if__ c'est que v-show correspond à display:none alors que v-if remove l'element du dom


* __v-for__
```html
<div id="app">
  <ul>
    <li v-for='element in list'></li>
  </ul>
</div>
```

### Les evenements
* __v-on__ ou __@__
