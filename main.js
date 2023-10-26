import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
const Home = { template: '<div><h1>Welcome to My Portfolio</h1><p>I am a student of Deakin University..</p></div>' }
const Projects = { template: '<div><h1>My Projects</h1><ul><li>Project 1</li><li>Project 2</li><li>Project 3</li></ul></div>' }
const Contact = { template: '<div><h1>Contact Me</h1><p>Feel free to reach out to me at s222116325@deakin.edu.au</p></div>' }
const router = createRouter({
history: createWebHistory(),

routes: [
{ path: '/', component: Home },
{ path: '/projects', component: Projects },
{ path: '/contact', component: Contact },
],
});
const app = createApp({});
app.use(router);
app.mount('#app');