<script>
import axios from "axios"
import ProjectCard from "./components/ProjectCard.vue";
export default {
  data () {
    return {
      projects: [],
      resource_url: "http://127.0.0.1:8000/api/projects",
    }
  },
  
  components: {
    VPaginator: VuePaginator, 
    ProjectCard,
  },
  
  // created () {
  //   axios.get("http://127.0.0.1:8000/api/projects").then((resp)=> {
  //     this.projects = resp.data.results.data;
  //     this.links = resp.data.results.links;
  //     })
  // },

  methods: {
    updateResource(data){
      this.projects = data
    }
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
      <v-paginator :resource_url="this.resource_url" @update="updateResource"></v-paginator>
    </div>
  </div>
</template>

<style>
</style>