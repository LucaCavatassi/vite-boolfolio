<script>
import axios from "axios"
import ProjectCard from "../components/ProjectCard.vue";

export default {
    name: "ProjectsPage",

    data() {
        return {
            projects: [],
            links: []
        }
    },

    components: {
        ProjectCard,
    },

    created() {
        axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
            this.projects = resp.data.results.data;
            this.links = resp.data.results.links;
            // console.log(this.links[6].url);
        })
    }
}
</script>

<template>
    <ProjectCard :projects="projects" />
</template>

<style></style>