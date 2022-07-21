import { lazy } from 'react';

const ListRoutes = [
    {
        path: '/',
        component: lazy(() =>
        import('../pages/Login')
        )
    },
    {
        path: '/dashboard',
        component: lazy(() =>
        import('../pages/Dashboard')
        )
    },
    {
        path: '/loan',
        component: lazy(() =>
        import('../pages/ListLoan')
        )
    }
];

export {ListRoutes};