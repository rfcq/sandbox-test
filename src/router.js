import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from './components/HomePage.vue';
import TextField from './components/TextField.vue'
import ComboBox from './components/ComboBox.vue'
import CheckBox from './components/CheckBox.vue'
import RadioButton from './components/RadioButton.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import AboutPage from './components/AboutPage.vue'
import FormPage from './components/FormPage.vue'
import SuccessfulRegister from './components/SuccessfulRegister.vue'

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
    },
    {
        path: '/video',
        name: 'Video Player',
        component: VideoPlayer
    },
    {
        path: '/formpage',
        name: 'Cadastro',
        component: FormPage
    },
    {
        path: '/success',
        name: 'Cadastro com sucesso',
        component: SuccessfulRegister
    },
    {
        path: '/aboutpage',
        name: 'Sobre',
        component: AboutPage
    }
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;