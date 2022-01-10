<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
            hide-on-scroll
            prominent
        >
            <div class="d-flex align-center" style="height: 100%">
                <v-img
                    alt="Feed It Back Logo"
                    class="shrink mr-2"
                    contain
                    src="./assets/logo.svg"
                    transition="scale-transition"
                    width="80"
                />
            </div>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App'
};
</script>
