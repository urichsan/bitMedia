<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>My CRUD</v-toolbar-title>
      <v-divider
              class="mx-2"
              inset
              vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.value" label="Value"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
            :headers="headers"
            :items="myValues"
            class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.value }}</td>
        <td class="justify-center layout px-0">
          <v-icon
                  small
                  class="mr-2"
                  @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
                  small
                  @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="refreshValues">Refresh</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: 'Id',
                    align: 'left',
                    sortable: false,
                    value: 'id'
                },
                {
                    text: 'Values',
                    align: 'left',
                    sortable: false,
                    value: 'value'
                },
                { text: 'Actions', align: 'center', value: 'name', sortable: false }
            ],
            myValues: [],//[{'id':-1,'value':'def_sample'},{'id':-2,'value':'def_sample2'}],
            editedIndex: -1,
            editedItem: {
                id: null,
                value: ''
            },
            defaultItem: {
                value: ''
            }
        }),

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },

        watch: {
            dialog (val) {
                val || this.close()
            }
        },

        created () {
            this.refreshValues()
        },

        mounted () {
        },
        methods: {
            refreshValues () {
                var that = this
                axios.get('./api/values').then(function (response) {
                    that.myValues = response.data
                })
            },
            editItem (item) {
                this.editedIndex = this.myValues.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                //const index = this.myValues.indexOf(item)
                var that = this
                confirm('Are you sure you want to delete this item?') && axios.delete('./api/values/'+item.id).then( function () {
                    that.refreshValues()
                } ) //this.myValues.splice(index, 1)
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                var that = this
                if (this.editedIndex > -1) {
                    //Object.assign(this.myValues[this.editedIndex], this.editedItem)
                    axios.patch('./api/values/'+that.editedItem,that.editedItem.value,{headers: {'Content-Type': 'application/json'}}).then( function () {
                        that.refreshValues()
                    } )
                } else {
                    //this.myValues.push(this.editedItem)
                    axios.post('./api/values',that.editedItem.value,{headers: {'Content-Type': 'application/json'}}).then( function (response) {
                        //console.log(response)
                        that.refreshValues()
                    } )
                }
                this.close()
            }
        }
    }
</script>
