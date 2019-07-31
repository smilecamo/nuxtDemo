<template>
  <div>
    this is about
    <ul v-for="(item,index) of list" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "about",

  computed: {
    list() {
      return this.$store.state.city.list;
    }
  },
  // async asyncData() {
  //   let {
  //     data: { list }
  //   } = await axios.get("http://localhost:3000/city/list");
  //   return {
  //     list
  //   };
  // }
};
</script>

<style >
</style>