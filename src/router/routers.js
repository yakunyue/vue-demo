export default [
    {
        path: '/',
        name: 'home',
        meta: {
            icon: 'md-home'
        },
        component: () => import('../views/operation.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            icon: 'md-home'
        },
        component: () => import('../views/About.vue'),
        children: [
            {
                path: '/message',
                name: 'message',
                meta: {},
                component: () => import('../views/message.vue')
            }
        ]
    },
    {
        path: '/operation',
        name: 'operation',
        meta: {
            icon: 'md-home'
        },
        component: () => import('../views/operation.vue'),
        children: [
            {
                path: 'a',
                name: 'operation-a',
                meta: {},
                component: () => import('../views/operation/a.vue')
            },
            {
                path: 'b',
                name: 'operation-b',
                meta: {},
                component: () => import('../views/operation/b.vue')
            }
        ]
    },
    {
        path: '/not-logged',
        name: 'not-logged',
        meta: {
            icon: 'md-home'
        },
        component: () => import('../views/not-logged.vue'),
        children: [
            {
                path: 'a',
                name: 'not-logged-a',
                meta: {},
                component: () => import('../views/not-logged/a.vue')
            },
            {
                path: 'b',
                name: 'not-logged-b',
                meta: {},
                component: () => import('../views/not-logged/b.vue')
            }
        ]
    }
]