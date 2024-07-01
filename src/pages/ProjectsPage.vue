<script>
import axios from "axios"
import ProjectCard from "../components/ProjectCard.vue";

export default {
    name: "ProjectsPage",

    data() {
        return {
            projects: [],
            lastPage: [],
            curPage: 1,
        }
    },

    components: {
        ProjectCard,
    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects", {
                params: {
                    page: this.curPage
                },
            }).then((resp) => {
            this.projects = resp.data.results.data;
            this.lastPage = resp.data.results.last_page;
            })
        },
        changePage(page) {
            this.curPage = page
            this.getProjects();
            console.log(this.curPage);
        },

        firstPage() {
            this.curPage = 1
            this.getProjects();
        },

        latestPage() {
            this.curPage = this.lastPage;
            this.getProjects();
            console.log(this.curPage);
        }
    }
}
</script>

<template>
    <h1 class="text-center py-3">I miei progetti!</h1>
    <div class="container d-flex gap-2">
        <div class="row">
            <ProjectCard :projects="projects" />
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" @click="firstPage" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" v-for="page in lastPage"><a class="page-link" @click="changePage(page)" href="#">{{ page }}</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" @click="latestPage" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style></style>