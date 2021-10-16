Tags:  #🕸️/🟦 #🏷️ #📜️ 
Refererences: [[💚 Vue]] [[Components]]

# Components

-   Global Registration
```jsx
app.component('MyComponent', {
	...
})

<div id="app">
	<MyComponent />
</div>
```

-   Local Registration
```jsx
import MyComponent from './MyComponent.vue';

exports default {
	components: {
		MyComponent
	}
}
```