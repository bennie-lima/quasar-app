<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Historico Romaneio</h4>

    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 q-pb-md">
        <q-input outlined placeholder="Digite aqui..." label="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <q-table
      :grid="$q.screen.xs"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
    />
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RomanianHistoryPage',
  setup () {
    const columns = [
      { name: 'codigo', align: 'center', label: 'Código', field: 'codigo', sortable: true },
      { name: 'data', align: 'center', label: 'Data', field: 'data', sortable: true },
      { name: 'cliente', align: 'center', label: 'Cliente', field: 'cliente' },
      { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes' }
    ]

    const rows = [
      {
        codigo: 385,
        data: '05/16/2022',
        cliente: 'STAR LUCK'
      },
      {
        codigo: 384,
        data: '05/16/2022',
        cliente: 'TH'
      }
    ]

    const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 2
    })

    return { options, columns, rows, pagination, pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage)) }
  }
})
</script>
