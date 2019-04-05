<template>
    <v-app>
      <v-navigation-drawer
        stateless
        absolute
        value="true"
      >
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            prepend-icon="account_circle"
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile>

            <v-list-group
              no-action
              sub-group
              value="true"
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Admin</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(admin, i) in admins"
                :key="i"
              >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(crud, i) in cruds"
                :key="i"
              >
                <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-content id="content">
        <v-container
          grid-list-xl
          fill-height
        >
          <v-layout
            row
            fill-height
          >
            <v-flex>
              <v-card id="content-window">
                <v-card-title>
                  <nuxt />
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-snackbar
        v-model="countHasBeenUpdated"
        :timeout="3000"
        bottom
        right
      >
        count has been changed
      </v-snackbar>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  data () {
    return {
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    }
  }
})
export default class Home extends Vue {
  @Getter('counter/getCount') getCount: any
  @Watch('getCount') onCountChange (val: Number, oldVal: Number) {
    this.countHasBeenUpdated = (val !== oldVal)
  }

  countHasBeenUpdated = false
}
</script>
<style lang="stylus">
#content
  margin-left 300px
#content-window
  height 100%
</style>
