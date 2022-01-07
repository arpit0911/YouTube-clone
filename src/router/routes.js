const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: 'home',
        caseSensitive: true,
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "trending",
        component: () => import("src/pages/Trending.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
