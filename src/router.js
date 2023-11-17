import { createRouter, createWebHistory } from "vue-router";

// Define your routes
import Home from "./components/home.vue"; // Adjust the path as needed

const routes = [
  {
    path: "/", // This is the URL path for the home route
    component: Home, // The component to render for this route
  },
  // ... other route definitions ...
];
// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
