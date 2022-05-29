<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-space />

        <q-btn flat round dense icon="account_circle">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section> Sair </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :breakpoint="500"
      :mini="!leftDrawerOpen || miniState"
      @click.capture="toggleLeftDrawer"
    >
      <q-list>
        <MenuLinks
          v-for="link in menuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <div class="q-mini-drawer-hide absolute" style="top: 117px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="secondary"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
    </q-drawer>

    <q-page-container class="bg-custom">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuLinks from 'components/MenuLinks.vue'

const linksList = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/'
  },
  {
    title: 'Rolos',
    icon: 'inventory',
    link: 'rolos'
  },
  {
    title: 'Importações',
    icon: 'backup',
    link: 'imports'
  },
  {
    title: 'Estoques',
    icon: 'how_to_vote',
    link: 'stocks'
  },
  {
    title: 'Romaneios',
    icon: 'text_snippet',
    link: 'romanian'
  },
  {
    title: 'Historico Romaneios',
    icon: 'content_paste_search',
    link: 'romanian-history'
  },
  {
    title: 'Usúarios',
    icon: 'people',
    link: 'users'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuLinks
  },

  setup () {
    const leftDrawerOpen = ref<boolean>(false)
    const miniState = ref<boolean>(false)

    return {
      menuLinks: linksList,
      leftDrawerOpen,
      miniState,
      toggleLeftDrawer () {
        if (miniState.value) {
          miniState.value = false
        }
      },
      beforeCreated: () => {
        console.log('miniState')
      }
    }
  }
})
</script>

<style scoped>
.bg-custom{
  background-image: url('../assets/images/bg_painel.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
