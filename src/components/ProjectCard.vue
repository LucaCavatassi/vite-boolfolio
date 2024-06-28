<script>
    export default {
        props: {
            projects: Object
        }
    }
</script>

<template>
    <div class="row">
      <div class="col-3" v-for="project in projects">
        <div class="card">
          <div class="card-body">
            <h1> {{ project.title }}</h1>
          </div>
        </div>
      </div>
    </div>


</template>

<style>

</style>