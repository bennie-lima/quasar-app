<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Importações</h4>

    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 q-pb-md">
        <q-select outlined :options="options" label="Status" />
      </div>
    </div>

    <q-table
      :grid="$q.screen.xs"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
    >
    <template v-slot:top>
      <q-btn dense outline color="primary" label="Importar arquivo" icon="add"></q-btn>
    </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ImportsPage',
  setup () {
    const columns = [
      { name: 'codigo', align: 'center', label: 'Código', field: 'codigo', sortable: true },
      { name: 'tipo', align: 'center', label: 'Tipo', field: 'tipo', sortable: true },
      { name: 'mensagem', align: 'center', label: 'Mensagem de error', field: 'mensagem' },
      { name: 'status', align: 'center', label: 'Status', field: 'status' }
    ]

    const rows = [
      {
        codigo: 32,
        tipo: 'Produto',
        mensagem: 'Erro ao importar planilha na linha 2',
        status: 'Erro'
      },
      {
        codigo: 32,
        tipo: 'Produto',
        mensagem: '-',
        status: 'Finalizada'
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
