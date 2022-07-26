
const routes = [
  {
    path: '/',
    component: () => import('layouts/NavBar.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/rimka', component: () => import('pages/Rimka.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
