VueJS-Tutorial 
======================
https://vuejs.org/

### Menu
1. [Installation](#Installation)
2. [Déclaration](#Déclaration)
3. [Cycle de vie de l'instance](#cycle)
4. [Interpolations & Directives](#directives)    
4.1 Binder les données     
4.2 Les conditions et les boucles      
4.3 Les evenements        
4.4 Les Filtres        
5. [Array Change Detection](#arrayChange)   
5.1 Mutation Methods    
5.2 Replacing an Array       
5.3 Caveats      
6. [Computed Properties et Watchers](#computed)      
6.1 Computed Properties   
6.2 Watched Property   
     
## <a name="Installation"></a>1. Installation

Insérer dans le head ou le body

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```

## <a name="Déclaration"></a>2. Déclaration


```html
<div id="app">
  [[ message ]]
</div>
```

```javascript
var app = new Vue({    // options
  delimiters: ['[[', ']]'], // pour éviter les conflits avec Twig
  el: '#app',
  data: {                          // Liste de propriétés
    message: 'Hello',      // string
    succcess: true,        // boolean
    style: {color: black}  // object
  },
  methods: {                       // Liste de méthodes
    action: function() {
    }
  },
  filters: {                      // Liste de filtres
     filter: function() {
     }
  },
  computed: {                     // Liste des propriétés computed
      value: function() {
      }
  },
  watch: {
      value: function () {
      }
  },
  created: function() {
  },  
  mounted: function() {
  }
})
```

## <a name="cycle"></a>3. Cycle de vie de l'instance

<img src='https://vuejs.org/images/lifecycle.png' alt='vueJS' />



## <a name="directives"></a>4. Interpolations et Directives

### 4.1 Binder les données 
* __[[ var ]]__, __v-html__
```html
<div id="app">
     <span v-once> [[ message ]]</span>
     <span v-html="messageHTML"></span>
</div>
```
Si la value ne doit être interpreté qu'une fois __v-once__

#### attribut =>  __v-bind:__

```html
<div id="app">
  <span v-bind:title="message" :class='message'>Test</span>
</div>
```
Il est possible de rajouter du javascript dans la valeur de l'attribut
```html
<div v-bind:id="'list-' + id"></div>
```

Ou de binder du style ou des class avec des objets, des array ou des boolean
```html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```

#### input => __v-model__
```html
// Input type Text ou TextAera
<input type="text" v-model="message">

// Checkbox True/False  or Value
<input type="checkbox" id="checkbox" v-model="checked"  v-bind:true-value="a" v-bind:false-value="b">
<label for="checkbox">{{ checked }}</label>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<span>Checked names: {{ checkedNames }}</span>

// Radio True/False  or Value
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<input type="radio" id="two" v-model="picked" v-bind:value="Two">
<label for="two">Two</label>
<span>Picked: {{ picked }}</span>

// Select avec bind:value
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```javascript
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```
#### Modifiers

####  __.lazy__
By default, v-model syncs the input with the data after each input event (with the exception of IME composition as stated above). You can add the lazy modifier to instead sync after change events:
```html
<input v-model.lazy="msg" >
```

#### __.number__
If you want user input to be automatically typecast as a number, you can add the number modifier to your v-model managed inputs:
```html
<input v-model.number="age" type="number">
```

#### __.trim__
If you want user input to be trimmed automatically, you can add the trim modifier to your v-model managed inputs:
```html
<input v-model.trim="msg">
```

### 4.2 Les conditions et les boucles
#### __v-if__, __v-else__, __v-else-if__
```html
<div id="app">
  <span v-if='success'>Success</span>
  <span v-else-if="type === 'B'">B</span>
  <span v-else>Error</span>
</div>
```
Il est possible de réutiliser un éléments avec sa KEY
```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

####  __v-show__
```html
<div id="app">
  <span v-show='success'>Success</span>
</div>
```
La différence entre __v-show__ et __v-if__ c'est que v-show correspond à display:none alors que v-if remove l'element du dom

####  __v-for__
```html
<div id="app">
     <ul>
       <li v-for="(item, index) in items">
         {{ parentMessage }} - {{ index }} - {{ item.message }}
       </li>
     </ul>
     <div v-for="(value, key, index) in object" v-if="!value.isComplete" :key="item.id">
       {{ index }}. {{ key }} : {{ value }}
     </div>
</div>
```

### 4.3 Les evenements
* __v-on__ ou __@__    
<ul> 
     <li><code>abort</code></li>
     <li><code>blur</code></li>
     <li><code>change</code></li>
     <li><code>dbclick</code></li>
     <li><code>click</code></li>
     <li><code>focus</code></li>
     <li><code>input</code></li>
     <li><code>keyup</code></li>
     <li><code>keydown</code></li>
     <li><code>keypress</code></li>
     <li><code>load</code></li>
     <li><code>mousedown</code></li>
     <li><code>mousemove</code></li>
     <li><code>mouseout</code></li>
     <li><code>mouseover</code></li>
     <li><code>mouseup</code></li>
     <li><code>reset</code></li>
     <li><code>resize</code></li>
     <li><code>select</code></li>
     <li><code>submit</code></li>
</ul>

```javascript
 methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      alert(event.target.tagName)
    }
  }
```

Possibilité d'ajouter __.prevent__ pour preventDefault()    
Et de passer des arguments et le $event inline
```html
<div id="app">
     <button @click="method" v-on:dbclick="method2"></button>
     <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
</div>
```

* Event Modifiers
Il est possible de modifier l'event à la volée
<ul>
<li><code>.stop  // empeche la propagation au parent</code></li> 
<li><code>.prevent // empeche l'event par defaut</code></li>
<li><code>.capture  // use capture mode when adding the event listener</code></li>
<li><code>.self // only trigger handler if event.target is the element itself</code></li>
<li><code>.once  // ne s'applique qu'une fois</code></li>
</ul>

```html
<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>
```

* Key Modifiers
Il est possible d'ajouter des touches clavier apres les events key
<ul>
<li><code>.enter</code></li>
<li><code>.tab</code></li>
<li><code>.delete</code> (captures both “Delete” and “Backspace” keys)</li>
<li><code>.esc</code></li>
<li><code>.space</code></li>
<li><code>.up</code></li>
<li><code>.down</code></li>
<li><code>.left</code></li>
<li><code>.right</code></li>
</ul>
Pour les combinaison de touches
<ul>
<li><code>.ctrl</code></li>
<li><code>.alt</code></li>
<li><code>.shift</code></li>
<li><code>.meta</code></li>
</ul>

```html
<input v-on:keyup.13="submit">
```


### 4.4 Les Filtres

```html
<!-- in mustaches -->
{{ message | capitalize }}
<!-- in v-bind -->
<div v-bind:id="rawId | capitalize | filterA('arg1', arg2)"></div>
```

```javascript
new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    filterA: function(value, arg1, arg2) {
    
    }
  }
  
})
```

### <a name="arrayChange"></a>5. Array Change Detection

#### 5.1 Mutation Methods    
Il faut utiliser du fonctionnal programming sur les array et les objets de vue pour maintenir le binding et propager la mutation.    
Les fonctions à utiliser :    
<ul>
<li><code>push()</code></li>
<li><code>pop()</code></li>
<li><code>shift()</code></li>
<li><code>unshift()</code></li>
<li><code>splice()</code></li>
<li><code>sort()</code></li>
<li><code>reverse()</code></li>
</ul>

#### 5.2 Replacing an Array
<ul>
<li><code>filter()</code></li>
<li><code>concat()</code></li>
<li><code>slice()</code></li>
</ul>

#### 5.3 Caveats

Ce n'est pas possible de garder le binding sur ces deux fonctions à éviter
```javascript
     vm.items[indexOfItem] = newValue
     vm.items.length = newLength
```
A la place il faut utiliser
```javascript
     Vue.set(example1.items, indexOfItem, newValue)
     // ou
     example1.items.splice(indexOfItem, 1, newValue)
     example1.items.splice(newLength)
```


## <a name="computed"></a>6. Computed Properties et Watchers

### 6.1 Computed Properties   

Quand une variable dépends de la valeur d'une autre, il faut computed la value.
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
Possiblité également de faire un seteur dans les methods, la différence c'est que les propriétés computed sont mises en cache. Donc elle ne sont recalculées que quand leur depences changent. Si on appel plusieurs fois avec une method elle est recalculée à chaque fois. Peut être lent si la fonction et reliez a un POST ou une logique complexe.

Les computed properties sont des geters par defaut mais il est possible de créer des seter
```javascript
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

Il est possible de computed des class et des styles pour donner de la logique au changement de classe
```html
<div v-bind:class="classObject"></div>
```

```javascript
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal',
    }
  }
}
```

###  6.2 Watched Property   

Si on doit oberserver les changements d'une valeur on peut également utiliser un watcher. Mais c'est souvent une meilleurs idée d'utiliser une computed properties plutot qu'un callback sur un watcher. Surtout __quand une variable dépends de plusieurs autres__     
     
Cependant parfois il est nécessaire d'avoir un watcher. Cela est souvent utile quand on veut faire des opérations asynchrones ou gourmandes lorsque qu'une variable change comme par exemple une connexion a une API, des requêtes Post  

```html
<div id="demo">{{ fullName }}</div>
```

```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  ///   Computed Vs Watch
    computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```
