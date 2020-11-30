<template>

<div class = "about">
   <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">

                  
                    <h1 class="title">{{carousel.text}}</h1>

                </div>
            </section>
        </b-carousel-item>
    </b-carousel>


</div>


</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: '“Today I will do what others won’t, so tomorrow I can accomplish what others can’t.” —Jerry Rice', color: 'primary' },
                { text: '“Do something today that your future self will thank you for.”', color: 'info' },
                { text: '“We are what we repeatedly do. Excellence then is not an act but a habit.” —Aristotle', color: 'success' },
                { text: '“No matter how slow you go, you are still lapping everybody on the couch.” —Unknown', color: 'warning' },
                { text: '“Sweat is fat crying.”', color: 'danger' }
            ],

            form:
            {
            bagel: "baggggell",
            jcole: "ASfasf"
            }
        }
    },

    methods: {

      dosome()
      {
        this.form["bagel"] = "senfsnefn";
      }
    }
}
</script>