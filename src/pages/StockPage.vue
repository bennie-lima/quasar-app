<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Estoques</h4>

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
    >
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'StockPage',
  setup () {
    const columns = [
      { name: 'codigo', align: 'center', label: 'Código', field: 'codigo', sortable: true },
      { name: 'descricao', align: 'center', label: 'Descrição', field: 'descricao', sortable: true },
      { name: 'cor', align: 'center', label: 'Cor', field: 'cor' },
      { name: 'peso', align: 'center', label: 'Peso', field: 'peso' },
      { name: 'metragem', align: 'center', label: 'Metragem', field: 'metragem' },
      { name: 'qtdrolos', align: 'center', label: 'Quantidade de rolos', field: 'qtdrolos' },
      { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes' }
    ]

    const rows = [
      {
        codigo: 'Alfaiataria_Bergamo_',
        descricao: 'Alfaiataria Bergamo',
        cor: 'Branco',
        peso: 0,
        metragem: 61,
        qtdrolos: 1
      },
      {
        codigo: 'Búzios_Peletizado',
        descricao: 'Búzios Peletizado',
        cor: 'Branco',
        peso: 0,
        metragem: 2169.9,
        qtdrolos: 512
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
