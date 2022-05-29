<template>
  <q-item
    clickable
    :to="link"
    v-ripple
    active-class="tab-active"
    class="q-ma-sm navigation-item"
    exact
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" color="dark" class="text-secondary"/>
    </q-item-section>

    <q-item-section class="text-secondary">
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuLinks',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.tab-active {
  background-color: $primary;
  .text-secondary {
    color: $third !important;
  }
}

.navigation-item {
  border-radius: 5px;
}
</style>
