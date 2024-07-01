<script>
export default {
    props: {
        projects: Object
    }

}
</script>

<template>
    <div class="col d-flex justify-content-center mb-3" v-for="project in projects">
        <router-link :to="{ name:'single-project', params: {slug: project.slug} }" class="card h-100" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <h6>Tecnologie usate</h6>
                <div v-if="project.technologies.length  === 0">
                    <p>Nessuna tecnologia indicata.</p>
                </div>
                <div v-else>
                    <p v-for="technology in project.technologies" class="card-text">{{technology.name}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
    .col {
        a{
            text-decoration: none;
        }
    }
</style>