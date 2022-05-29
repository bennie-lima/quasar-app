<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Romaneio de rolos</h4>

    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 q-pb-md">
        <q-select
            outlined
            use-input
            label="Pesquisar etiqueta"
            :options="options"
            behavior="menu"
            placeholde="Digite etiqueta aqui"
        >
        <template v-slot:no-option>
        <q-item>
            <q-item-section class="text-grey">
            No results
            </q-item-section>
        </q-item>
        </template>
      </q-select>
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
        <q-btn dense outline color="primary" label="Baixar estoque" icon="download"></q-btn>
        <q-space />
        <q-btn dense outline color="primary" label="Limpar" icon="delete"></q-btn>
    </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RomanianPage',
  setup () {
    const columns = [
      { name: 'descricao', align: 'center', label: 'Descrição', field: 'descricao', sortable: true },
      { name: 'cor', align: 'center', label: 'Cor', field: 'cor', sortable: true },
      { name: 'lote', align: 'center', label: 'Lote', field: 'lote' },
      { name: 'rolo', align: 'center', label: 'Rolo', field: 'rolo' },
      { name: 'peso', align: 'center', label: 'Peso', field: 'peso' },
      { name: 'metragem', align: 'center', label: 'Metragem', field: 'metragem' }
    ]

    const rows = [
      {
        descricao: 'descricao teste',
        cor: 'branco',
        lote: 0,
        rolo: 30,
        peso: 40,
        metragem: 800
      },
      {
        descricao: 'descricao teste 2',
        cor: 'preto',
        lote: 0,
        rolo: 30,
        peso: 40,
        metragem: 800
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
