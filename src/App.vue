<script>
import axios from "axios"
import ProjectCard from "./components/ProjectCard.vue";
export default {
  data () {
    return {
      projects: [],
    }
  },
  
  components: {
    ProjectCard
  },
  
  created () {
    axios.get("http://127.0.0.1:8000/api/projects").then((resp)=> {
      this.projects = resp.data.results;
      console.log(this.projects[1].technologies);
      })
  }
}
</script>

<template>
  <h1 class="text-center py-3">I miei progetti!</h1>
  <div class="container">
    <ProjectCard :projects="projects"/>
  </div>
</template>

<style>
</style>