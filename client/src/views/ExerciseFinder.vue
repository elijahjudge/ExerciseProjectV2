<template>
  <div id="app">
    
  <h1>Available Exercises </h1>
  <v-select :options="exercises"  ></v-select>
  
</div>
</template>



<script>
//import { exerciselist } from "server\models\ExerciseNames.js";

import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

export default {

data()
{
return{

   
exercises: [

"bench press",
"run",
"curl",
"tricep raises",
"push ups",
"pelotonics",
"bag thrust",
"run(marathon)",
"carry boxes"

]

}

}


}
</script>

<style>
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

h1,.muted {
  color: #2c3e5099;
}

h1 {
  font-size: 26px;
  font-weight: 600;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}
</style>