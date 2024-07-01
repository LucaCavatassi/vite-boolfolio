<script>
import axios from "axios"

export default {
    data() {
        return {
            project: [],
        }
    },
    created() {
        const slug = this.$route.params.slug
        
        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then((resp) => {
            this.project = resp.data.results;
            console.log(this.project)
        }).catch((error) => {
            if (error.response.status === 404) {
                // console.log("rindirizzo");
                this.$router.push({ name: "not-found" });
            }
        })
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<style>
</style>