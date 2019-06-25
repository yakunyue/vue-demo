<template>
    <div>
        <l-not-logged-layout>
            <div slot="aOrB">
                <router-view></router-view>
            </div>
            <div slot="aOrB2">
                <router-view></router-view>
            </div>
        </l-not-logged-layout>

    </div>
</template>

<script>
    import notLoggedLayout from '@/components/not-logged-layout.vue'

    export default {
        name: "not-logged",
        data() {
            return {}
        },
        methods: {},
        mounted() {

        },
        components: {
            "l-not-logged-layout": notLoggedLayout
        }
    }
</script>

<style scoped>

</style>