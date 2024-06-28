<script>
import axios from "axios"
import ProjectCard from "./components/ProjectCard.vue";
export default {
  data () {
    return {
      projects: [],
      links: []
    }
  },
  
  components: {
    ProjectCard
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
  <h1 class="text-center py-3">I miei progetti!</h1>
  <div class="container d-flex gap-2">
    <div class="d-flex align-items-center">
      <a class="btn btn-primary"> < </a>
    </div>
    <ProjectCard :projects="projects"/>
    <div class="d-flex align-items-center">
      <a :href="links[6].url"  class="btn btn-primary"> > </a>
    </div>
  </div>
</template>

<style>
</style>