<script>
export default {
    props: {
        projects: Object
    }

}
</script>

<template>
    <h1 class="text-center py-3">I miei progetti!</h1>
    <div class="container d-flex gap-2">
        <div class="row">
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
        </div>
    </div>
</template>

<style></style>