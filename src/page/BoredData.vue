<template>
    <v-row
    justify="center"
    >
        <v-card>
            <v-toolbar flat color="primary" dark>
                <v-toolbar-title>User Profile</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical v-model="selectedTab">
                <v-tab :key='0' @click="selectedTab && $router.push('/bored/create')">
                    <v-icon left>mdi-folder-plus</v-icon>
                    Activity
                </v-tab>
                <v-tab :key='1' active-class="true"  @click="!selectedTab && $router.push('/bored/all')">
                    <v-icon left>mdi-format-list-checks</v-icon>
                    List bored
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <div style="display: flex">
                                <div style="margin: 5px">
                                    <v-textarea
                                            v-model="getActive.activity"
                                            @input="setActive($event, 'activity')"
                                            label="activity"
                                            required
                                            height="150px"
                                            color="teal"
                                    ></v-textarea>
                                    <v-btn color="error" style="width: 100%" @click="SAVE()">Save For Later</v-btn>
                                </div>
                                <div  style="margin: 5px">
                                    <v-select
                                            v-model="getActive.type"
                                            :items="type"
                                            @change="setActive($event, 'type')"
                                            color="pink"
                                            label="TYPE"
                                            required
                                    ></v-select>
                                    <v-text-field
                                            :value="getActive.participants"
                                            :counter="10"
                                            @input="setActive($event, 'participants')"
                                            label="participants"
                                            required
                                    ></v-text-field>
                                    <v-slider
                                            :value="getActive.price"
                                            @input="setActive($event, 'price')"
                                            label="Price / Budget"
                                            min="0"
                                            step="0.1"
                                            max="1"
                                    ></v-slider>
                                    <v-btn color="primary" style="width: 100%" @click="hit()">Hit me with a new one</v-btn>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            ewqqwe
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">activity</th>
                                        <th class="text-left">type</th>
                                        <th class="text-left">participants</th>
                                        <th class="text-left">price</th>
                                        <th class="text-left">action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in LIST" :key="index + 323423">
                                        <td>{{ item.activity }}</td>
                                        <td>{{ item.type }}</td>
                                        <td>{{ item.participants }}</td>
                                        <td>{{ item.price }}</td>
                                        <td>
                                            <v-btn color="error" style="width: 100%" @click="deleteFromTable(index)">
                                               delete
                                            </v-btn>
                                        </td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>

                        </v-card-text>
                        <v-btn color="error" v-if="LIST.length  > 0" style="width: 100%" @click="ClearTable()">
                            clear
                        </v-btn>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-row>
</template>

<script>
    import {mapGetters} from "vuex";
    import {StorageData} from "../store/localStorage/saveStepData";

    export default {
        name: "BoredData",
        data(){
            return {
                selectedTab:1,
                type: ["Social", "Education", "Busywork", "Recreational", "Cooking", "Relaxation", "Diy", "Charity", "Music"]
            }
        },
        beforeCreate(){
            this.$store.dispatch('GET_BORED_WITH_SERVER');
            const data = StorageData.getStorageData();
            this.$store.commit('CHANGE_BORED_LIST', data ? data : []);
        },
        computed:{
            ...mapGetters({
                ACTIVITY: 'GET_ACTIVITY',
                LIST: 'GET_LIST',
            }),
            getActive:{
                get: function (){
                    return {...this.ACTIVITY};
                }
            }
        },
        mounted() {
            this.selectedTab = this.$route.params && this.$route.params.action == 'all' ? 1 : 0
            // this.selectedTab = 'list';
        },
        methods:{

            toRout(id){
                this.$router.push(`/courses/${id}`)
            },
            setActive(e, method){
                const active = {...this.getActive};
                active[method]= e;
                this.$store.commit('GET_COURSE_WITH_SERVER', active);
            },
            SAVE(){
                this.$store.commit('SET_TOAST',
                    {type: 'success', text: 'Add activity success', active: true}
                );
                this.$store.commit('SET_SAVE_BORED_TO_LIST', {...this.getActive});
            },
            hit(){
                this.$store.dispatch('GET_BORED_WITH_SERVER', {...this.getActive});
            },
            deleteFromTable(index) {
                let newList = [...this.LIST];
                newList.splice(index, 1);
                this.$store.commit('CHANGE_BORED_LIST', newList);
                this.$store.commit('SET_TOAST',
                    {type: 'success', text: 'Delete success', active: true}
                );
            },
            ClearTable() {
                this.$store.commit('CHANGE_BORED_LIST', []);
                this.$store.commit('SET_TOAST',
                    {type: 'success', text: 'Clear all data success', active: true}
                );
            }
        }
    }
</script>

<style scoped>

</style>