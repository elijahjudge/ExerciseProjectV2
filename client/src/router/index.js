/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Schedule from "../views/Schedule.vue";
import Profile from "../views/Profile.vue";
import Inspiration from "../views/Inspiration.vue"
import ExerciseFinder from "../views/ExerciseFinder.vue"

import { context } from "../models/context";

Vue.use(VueRouter);

const routes = [
  {path: "/",name: "Home",component: Home,
    meta: { requiresAdmin: false, requiresLogin: false }
  },
  {path: "/home",name: "Home2",component: Home,
    meta: { requiresAdmin: false, requiresLogin: false }
  },
  {path: "/login",name: "Login",component: Login,
    meta: { requiresAdmin: false, requiresLogin: false }
  },
  {path: "/dashboard",name: "Dashboard", component: Dashboard,
    meta: { requiresAdmin: true, requiresLogin: true }
  },
  {path: "/register",name: "Register",component: Register,
    meta: { requiresAdmin: false, requiresLogin: false }
  },
  {path: "/schedule",name: "Schedule",component: Schedule,
    meta: { requiresAdmin: false, requiresLogin: true }
  },
  {path: "/profile",name: "Profile",component: Profile,
    meta: { requiresAdmin: false, requiresLogin: true }
  },
  {path: "/inspiration",name: "Inspiration",   component: Inspiration, 
    meta: { requiresAdmin: false, requiresLogin: false }
  },
  {path: "/exercisefinder",name: "exercisefinder",   component: ExerciseFinder, 
    meta: { requiresAdmin: false, requiresLogin: false }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = context.state.user;
  if (user === null && to.meta.requiresLogin) {
    next('/login')
  } else if (to.meta.requiresAdmin && !user.admin) {
    next('/home');
  } else {
    next();
  }
});

export default router
