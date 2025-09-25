import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: () =>
            import('./user/user.routes').then(m => m.USER_ROUTES),
    },
    {
        path: 'family-tree',
        loadChildren: () =>
            import('./family-tree/family-tree.routes').then(m => m.FAMILY_TREE_ROUTES),
    },
    {
        path: 'invoicing',
        loadChildren: () =>
            import('./invoicing/invoicing.routes').then(m => m.INVOICING_ROUTES),
    },
    {
        path: 'overview',
        loadChildren: () =>
            import('./overview/overview.routes').then(m => m.OVERVIEW_ROUTES),
    },
    {
        path: 'gym-buddy',
        loadChildren: () =>
            import('./gym-buddy/gym-buddy.routes').then(m => m.GYM_BUDDY_ROUTES),
    },
    { path: '**', redirectTo: 'user' },
];
