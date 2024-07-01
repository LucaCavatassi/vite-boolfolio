<script>
    export default {
        data(){
            return {
                navItems: [
                    {
                        routeName: "home",
                        title: "Home"
                    },
                    {
                        routeName: "about",
                        title: "About"
                    },
                    {
                        routeName: "projects",
                        title: "Projects"
                    },
                    
                ]
            }
        }
    }

</script>

<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand">Boolfolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav" v-for="navItem in navItems">
                    <router-link class="me-2" :to="{ name: navItem.routeName }"><li class="nav-item"> {{navItem.title}} </li></router-link> 
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
        a {
            text-decoration: none;
            color: white;
        }

        .router-link-active {
            color: cornflowerblue;
        }
</style>