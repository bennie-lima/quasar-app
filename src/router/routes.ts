import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'rolos', component: () => import('pages/RollersPage.vue') },
      { path: 'imports', component: () => import('pages/ImportsPage.vue') },
      { path: 'stocks', component: () => import('pages/StockPage.vue') },
      { path: 'users', component: () => import('pages/UsersPage.vue') },
      { path: 'romanian-history', component: () => import('pages/RomanianHistoryPage.vue') },
      { path: 'romanian', component: () => import('pages/RomanianPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '/:pathMatch(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
