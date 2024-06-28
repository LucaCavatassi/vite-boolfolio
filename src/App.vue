<script>
import axios from "axios"
export default {
  data () {
    return {
      projects: [],
    }
  },

  created () {
      axios.get("http://127.0.0.1:8000/api/projects").then((resp)=> {
        this.projects = resp.data.results;
      })
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="project in projects">
        <div class="card">
          <div class="card-body">
            <h1> {{ project.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>