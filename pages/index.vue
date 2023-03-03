<template>
  <app-layout/>
  <!-- <Tutorial/> -->
</template>

<script>
// import Tutorial from "@/components/tutorial.vue"
export default {
  components: {
    "app-layout": ()=> import("@/components/layouts/app.vue"),
    // Tutorial
  },
  name: 'IndexPage'
}
</script>



