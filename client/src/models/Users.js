import { skeletonSchedule, presetExercisePlan } from "./DailyRoutines.js";

export const users = [
  {
    id: 1,
    email: "mymail@gmail.com",
    name: "Elijah Judge",
    handle: "elijahjudge",
    password: "1234",
    admin: true,
    loggedIn: false,
    friends: [],
    routine: presetExercisePlan
  },
  {
    id: 2,
    email: "mistermailmansmailaccount@gmail.com",
    name: "mail man",
    handle: "ohilovemail",
    password: "password",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
  {
    id: 3,
    email: "jupiter@gmail.com",
    name: "planet guy",
    handle: "planetGuy",
    password: "marsmoon",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
  {
    id: 4,
    email: "test@gmail.com",
    name: "test guy",
    handle: "testy",
    password: "mctester",
    admin: false,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
  {
    id: 5,
    email: "moshemoshe@gmail.com",
    name: "moshe plotkin",
    handle: "Teacher",
    password: "webprogramming",
    admin: true,
    loggedIn: false,
    friends: [],
    routine: skeletonSchedule
  },
];

import { myFetch } from "./myfetch";

export function getList() {
  return myFetch("users");
}
