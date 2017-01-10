VueJS-Tutorial - Les Webs Compenents 
======================
https://vuejs.org/

### Menu
1. [Utiliser les Components](#using)     
1.1 [Local Registration](#registration)    
1.2 [DOM Template Parsing Caveats](#caveats)       
1.3 [__data__ Must Be a Function](#data)        
1.4 [Composing Components](#compose)     
2. [Les propriétés](#props)     
2.1 [Passing Data with Props](#compose)     
2.2 [camelCase vs. kebab-case](#camelCase)     
2.3 [Dynamic Props](#Dynamic)     
2.4 [Literal vs Dynamic](#Literal)     
2.5 [One-Way Data Flow](#Flow)     
2.6 [Prop Validation](#Validation)     
3. [Custom Events](#Custom)     
3.1 [Using v-on with Custom Events](#Events)     
3.2 [Form Input Components using Custom Events](#Input)     
3.3 [Non Parent-Child Communication](#Parent)     
4. [Content Distribution with Slots](#Distribution)     
4.1 [Compilation Scope](#Scope)     
4.2 [Single Slot](#Single)     
4.3 [Named Slots](#Named)     
4.4 [Scoped Slots](#Scoped)     
5. [Dynamic Components keep-alive](#Dynamic)     
6. [Misc](#Misc)     
6.1 [Authoring Reusable Components](#Authoring)     
6.2 [Child Component Refs](#Child)     
6.3 [Async Components](#Async)     
6.4 [Component Naming Conventions](#Naming)     
6.5 [Recursive Components](#Recursive)     
6.6 [Circular References Between Components](#Circular)     
6.7 [Inline Templates](#Inline)     
6.8 [X-Templates](#Templates)     
6.9 [Cheap Static Components with v-once](#Cheap)     

Les components sont la caractéristique la plus puissante de VueJS. Ils aident à etendre les élements HTML basic et a encapsulé du code réutilisable. Les components sont des élements customisés avec des attributs spéciaux.     

<img src='https://vuejs.org/images/components.png' alt='vueJS' />

## <a name="using"></a>1. Utiliser les Components

Pour enregister un component
```html
<div id="example">
  <my-component></my-component>
</div>
```

```javascript
// register
Vue.component('my-component', {
  props: [value],                                     // Liste de propriétés donné par le parent
  template: '<div>[[ value ]]</div>'                  // Template du component, avec acces au props
})
// create a root instance
new Vue({
  el: '#example'
})
```
Pour garder les bonnes pratiques du W3C les noms des components doivent être en minuscules et séparé par des -    

### <a name="registration"></a>1.1 Local Registration

Il n'est pas nécessaire de déclarer chaque component globalement. On peut rendre chaque component disponible seulement dans le scope d'une autre instance/component en le déclarant dans les options d'instance :

```javascript
var Child = {
  template: '<div>A custom component!</div>'
}
new Vue({
  // ...
  components: {
    // <my-component> will only be available in parent's template
    'my-component': Child
  }
})
```

### <a name="caveats"></a>1.2 DOM Template Parsing Caveats

Certaines balise HTML comme ```<ul>```, ```<ol>```, ```<table>``` et ```<select>``` ont des restriction sur les élements qu'ils contienne, comme VueJS est chargé une fois le DOM complet utiliser des balises custom peut provoquer des erreurs. Il faut donc nomer les components en fonction du Node mère. 

```html
<table>
  <tr is="my-row"></tr>
</table>
```

### <a name="data"></a>1.3 __data__ Must Be a Function

Les datas d'un compenents doivent être une fonction, si on utilisé un objet, il sera fixe et partagé par tous les compenents, si on veut que chaque compenents ait sont propre data il ne faut pas oublier de les passer en fonction avec un return.

```html
<div id="example-2">
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
</div>
```

```javascript
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
    data: function () {
      return {
        counter: 0
      }
    }
})
new Vue({
  el: '#example-2'
})
```

### <a name="compose"></a>1.4 Composing Components

Les composent sont fait pour être utiliser ensembles dans une relation parent-enfant. Un component A peut utiliser un componet B dans son propre template. Ils ont besoin de communiquer entre eux : le parent à besoin de passer des data à l'enfant et l'enfant à besoin d'informer le parent qu'un evenements s'est produit. Dans tous les cas il est important de garder le parent et l'enfant séparé mais relié par une interface claire.    

Dans vueJs la relation parent-enfant peut être résumé par __les propriétés déscendent__ et __les évenements remontent__, les parents passent les data aux enfants, et les enfants envoient des messages à leur parent via des events.

<img src='https://vuejs.org/images/props-events.png' alt='vueJS' />

## <a name="props"></a>2. Les propriétés

### <a name="Passing"></a>2.1 Passing Data with Props

Chaque compenent à sa propre instance isolée. Il est impossible (et il ne faut pas) directement faire référence au parent dans le template de l'enfant. Une proprieté a un attribut customisé pour passer de l'information parent->enfant. L'enfant doit déclarer explicitement les propriétés qu'il s'attend à recevoir

```javascript
Vue.component('child', {
  // declare the props
  props: ['message'],
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  template: '<span>{{ message }}</span>'
})
```

### <a name="camelCase"></a>2.2 camelCase vs. kebab-case

Les attributs HTML sont key sensitif, il faut donc utiliser du camelCase pour les props ou le template string et du kebab-case pour les attribut à mettre dans le html.     

```javascript
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
```

```html
<!-- kebab-case in HTML -->
<child my-message="hello!"></child>
```

### <a name="Dynamic"></a>2.3 Dynamic Props

On peut utiliser v-bind pour binder une dynamiquement une prop. Quand le data est mis à jour dans le parents il est transmi automatiquement a l'enfant.

```html
<div>
  <input v-model="parentMsg">
  <child :my-message="parentMsg"></child>
</div>
```

### <a name="Literal"></a>2.4 Literal vs Dynamic

Une erreur commune chez les débutants et de passer une prop en utilisant la syntax litéralle :

```html
<!-- this passes down a plain string "1" -->
<comp some-prop="1"></comp>
```
La valeur passer est un string "1" si on veut passer un nombre, il faut ajouter __v-bind__ pour que la valeur soit évaluer comme une expression javascript.

```html
<!-- this passes down an actual number -->
<comp v-bind:some-prop="1"></comp>
```

### <a name="Flow"></a>2.5 One-Way Data Flow

Il s'agit d'un One-way Data Flow, les props sont binder du parent vers l'enfant. Quand le parent est MAJ c'est transmis automatiquement à l'enfant, mais pas dans l'autre sens. Cela empèche l'enfant de corrompre le parent.      
        
Quand un parents est MAJ toutes les props de l'enfant sont MAJ. On ne peut donc pas modifier une seule prop d'un enfant.     
Il existe deux raison principale d'envoyer une prop a un enfant     

* La prop est utilisé seulement pour passer la veleur initiale, et l'enfant veut l'utiliser comme une simple propriétés locale;
* La prop est basée sur une raw et à besoin d'etre transformé.

```javascript
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
// Avec transformation
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

### <a name="Validation"></a>2.6 Prop Validation

Instead of defining the props as an array of strings, you can use an object with validation requirements:

```javascript
Vue.component('example', {
  props: {
    // basic type check (`null` means accept any type)
    propA: Number,
    // multiple possible types
    propB: [String, Number],
    // a required string
    propC: {
      type: String,
      required: true
    },
    // a number with default value
    propD: {
      type: Number,
      default: 100
    },
    // object/array defaults should be returned from a
    // factory function
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // custom validator function
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```
* String
* Number
* Boolean
* Function
* Object
* Array

## <a name="Custom"></a>3. Custom Events

### <a name="Events"></a>3.1 Using v-on with Custom Events

* Listen to an event using $on(eventName)
* Trigger an event using $emit(eventName)

```html
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
```
```javascript
Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```

### <a name="Input"></a>3.2 Form Input Components using Custom Events

So for a component to work with v-model, it must:
* accept a value prop     
* emit an input event with the new value     


### <a name="Parent"></a>3.3 Non Parent-Child Communication

## <a name="Distribution"></a>4. Content Distribution with Slots

### <a name="Scope"></a>4.1 Compilation Scope

### <a name="Single"></a>4.2 Single Slot

### <a name="Named"></a>4.3 Named Slots

### <a name="Scoped"></a>4.4 Scoped Slots

## <a name="Dynamic"></a>5. Dynamic Components keep-alive

## <a name="Misc"></a>6. Misc

### <a name="Authoring"></a>6.1 Authoring Reusable Components

### <a name="Child"></a>6.2 Child Component Refs

### <a name="Async"></a>6.3 Async Components

### <a name="Naming"></a>6.4 Component Naming Conventions

### <a name="Recursive"></a>6.5 Recursive Components

### <a name="Circular"></a>6.6 Circular References Between Components

### <a name="Inline"></a>6.7 Inline Templates

### <a name="Templates"></a>6.8 X-Templates

### <a name="Cheap"></a>6.9 Cheap Static Components with v-once
