import { createRouter, createWebHistory } from 'vue-router'

// import CoachDetail from './pages/coaches/CoachDetail.vue'
const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
import CoachList from './pages/coaches/CoachList.vue'
// import CoachRegistration from './pages/coaches/CoachRegistration.vue'
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue')
import ContactCoach from './pages/requests/ContactCoach.vue'
// import RequestReceived from './pages/requests/RequestsReceived.vue'
const RequestReceived = () => import('./pages/requests/RequestsReceived.vue')
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import store from './store/index.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: { name: 'coach' }
        },
        {
            path: '/udemy-vue/coaches',
            name: 'coach',
            component: CoachList
        },
        {
            path: '/udemy-vue/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {
                    path: 'contact',
                    component: ContactCoach
                }
            ]
        },
        {
            path: '/udemy-vue/register',
            component: CoachRegistration,
            meta: { requiredAuth: true, notCoach: true },

        },
        {
            path: '/udemy-vue/requests',
            component: RequestReceived,
            meta: { requiredAuth: true }
        },
        {
            path: '/udemy-vue/auth',
            component: UserAuth,
            meta: { requiredUnauth: true }
        },
        {
            path: '/udemy-vue/:notFound(.*)',
            component: NotFound
        },
    ]
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiredAuth && !store.getters.isAuthenticate) {
        next('/udemy-vue/auth')
    } else if (to.meta.requiredUnauth && store.getters.isAuthenticate) {
        next('/udemy-vue/coaches')
    } else {
        next()
    }
})

export default router