import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from './components/Home.vue';
import TextField from './components/TextField.vue'
import ComboBox from './components/ComboBox.vue'
import CheckBox from './components/CheckBox.vue'
import RadioButton from './components/RadioButton.vue'

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: MainPage,
    },
    {
        path: '/textfield',
        name: 'Text Field',
        component: TextField,
    },
    {
        path: '/combobox',
        name: 'ComboBox',
        component: ComboBox
    },
    {
        path: '/checkbox',
        name: 'CheckBox',
        component: CheckBox
    },
    {
        path: '/radiobutton',
        name: 'RadioButton',
        component: RadioButton
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;