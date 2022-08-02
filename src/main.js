import { createApp } from 'vue';

import App from './App.vue';

// baseCard is the component that will be used to create the cards
import baseCard from './components/UI/BaseCard.vue';
import  baseButton from './components/UI/BaseButton.vue';


// createApp is a function that creates a new Vue instance
// it takes in a component and returns a Vue instance
const app = createApp(App);

app.component('base-card', baseCard);
app.component('base-button', baseButton);

app.mount('#app');


