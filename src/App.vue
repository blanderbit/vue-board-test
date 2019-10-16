<template>
 <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click="!activeLink('home') && $router.push('/home')" :style="{background: activeLink('home') ? 'blue' : 'white'}">
                    <v-list-item-action>
                        <v-icon :style="{color: activeLink('home') ? 'white' : ''}">mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title :style="{color: activeLink('home') ? 'white' : ''}">Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="!activeLink('bored') && $router.push('/bored/all')" :style="{background: activeLink('bored') ? 'blue' : 'white'}">
                    <v-list-item-action>
                        <v-icon :style="{color: activeLink('bored') ? 'white' : ''}">mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title :style="{color: activeLink('bored') ? 'white' : ''}">Bored</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer
                color="indigo"
                app
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
        <div class="spinner" v-if="active">
            <v-progress-circular
                    :width="3"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </div>
        <message-toast></message-toast>
    </v-app>
</template>

<script>
// import {mapGetters} from "vuex";

import MessageToast from "./components/toast";
export default {
        name: 'App',
        components: {MessageToast},
        data: () => ({
            drawer: null,
            name: '',
            active: false
        }),
        created(){
            this.name = this.$route.path;
        },
        methods:{
            activeLink(name){
                return this.name.indexOf(name) > -1
            }
        },
        watch:{
            '$route'(to){
                this.name = to.path;
            }
        }
    };
</script>
