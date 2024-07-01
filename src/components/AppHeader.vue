<script>
</script>

<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand">Boolfolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'projects' }">Projects</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style></style>