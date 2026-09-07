import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Public
  {
    path: 'home',
    loadComponent: () =>
      import('./features/public/home/home')
        .then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/public/about/about')
        .then(m => m.About)
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./features/public/skills/skills')
        .then(m => m.Skills)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/public/projects/projects')
        .then(m => m.Projects)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/public/contact/contact')
        .then(m => m.Contact)
  },

  // Authentication
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },

  // Admin
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/admin/profile/profile')
            .then(m => m.Profile)
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./features/admin/experience/experience')
            .then(m => m.Experience)
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./features/admin/skills/skills')
            .then(m => m.Skills)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/admin/projects/projects')
            .then(m => m.Projects)
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./features/admin/messages/messages')
            .then(m => m.Messages)
      }
    ]
  },

  // 404
  {
    path: '**',
    redirectTo: 'home'
  }
];