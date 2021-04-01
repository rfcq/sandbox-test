import { createApp} from 'vue'
import App from './App.vue'
import router from './router'

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

createApp(App).use(router).mount('#app')
