<template>
    <v-row
            justify="center"
    >
        <v-btn
                v-bind="options"
                class="mt-12"
                @click="$router.push('/bored/create')"
        >
            Get random activity
        </v-btn>

        <v-btn
                v-bind="options"
                class="mt-12"
                @click="$router.push('/bored/all')"
        >
            View all bored

        </v-btn>

    </v-row>
</template>

<script>

    export default {
        name: "HomePage",
        data(){
            return {
                options: {
                    color: 'primary',
                    elevation: 3
                }
            }
        },
        methods:{
            toRout(id){
                this.$router.push(`/courses/${id}`)
            }
        }
    }
</script>

<style scoped>

</style>
