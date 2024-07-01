<script>
import axios from "axios"
import ProjectCard from "./components/ProjectCard.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  data () {
    return {
      projects: [],
      links: []
    }
  },
  
  components: {
    ProjectCard,
    AppHeader
  },
  
  created () {
    axios.get("http://127.0.0.1:8000/api/projects").then((resp)=> {
      this.projects = resp.data.results.data;
      this.links = resp.data.results.links;
      // console.log(this.links[6].url);
      })
  }
}
</script>

<template>
    <AppHeader/>
    <router-view></router-view>
    <ProjectCard :projects="projects"/>
</template>

<style>
</style>