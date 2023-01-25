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
    history: createWebHistory('/vue/dist/'),
    routes: [
        {
            name: 'home',
            path: '/',
            redirect: { name: 'coach' }
        },
        {
            path: '/coaches',
            name: 'coach',
            component: CoachList
        },
        {
            path: '/coaches/:id',
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
            path: '/register',
            component: CoachRegistration,
            meta: { requiredAuth: true, notCoach: true },

        },
        {
            name: 'request',
            path: '/requests',
            component: RequestReceived,
            meta: { requiredAuth: true }
        },
        {
            name: 'auth',
            path: '/auth',
            component: UserAuth,
            meta: { requiredUnauth: true }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        },
    ]
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiredAuth && !store.getters.isAuthenticate) {
        next('/auth')
    } else if (to.meta.requiredUnauth && store.getters.isAuthenticate) {
        next('/coaches')
    } else {
        next()
    }
})

export default router