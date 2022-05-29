<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Rolos</h4>

    <div class="row">
      <div class="col-md-12 col-xs-12 col-sm-12 q-pb-md">
        <q-input outlined placeholder="Digite aqui..." label="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <q-list bordered class="rounded-borders">
      <q-expansion-item icon="filter_list" label="Filtros">
        <q-card outlined>
          <q-card-section>
            <div class="row justify-between">
              <div class="col-md-4 col-xs-12 col-sm-12 q-pr-md q-pb-md">
                <q-select outlined :options="options" label="Descrição" />
              </div>

              <div class="col-md-4 col-xs-12 col-sm-12 q-pr-md q-pb-md">
                <q-select outlined :options="options" label="Cor" />
              </div>

              <div class="col-md-4 col-xs-12 col-sm-12 q-pr-md q-pb-md">
                <q-select outlined :options="options" label="Lote" />
              </div>
            </div>

            <br />

            <div class="row justify-between">
              <div class="col-md-6 col-xs-12 col-sm-12 q-pr-md q-pb-md">
                <q-select outlined :options="options" label="Status" />
              </div>

              <div class="col-md-6 col-xs-12 col-sm-12 q-pr-md q-pb-md">
                <q-select outlined :options="options" label="PO" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <br />

    <q-table
      :grid="$q.screen.xs"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
    >
    <template v-slot:top>
      <q-btn dense outline color="primary" label="Cadastrar" icon="add"></q-btn>
      &nbsp;&nbsp;&nbsp;
      <q-btn dense outline color="primary" label="Imprimir etiquetas" icon="label"></q-btn>
    </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RollersPage',
  setup () {
    const columns = [
      {
        name: 'id',
        label: 'Id',
        align: 'center',
        field: 'id',
        sortable: true
      },
      { name: 'codigo', align: 'center', label: 'Código', field: 'codigo', sortable: true },
      { name: 'descricao', align: 'center', label: 'Descrição', field: 'descricao', sortable: true },
      { name: 'cor', align: 'center', label: 'Cor', field: 'cor' },
      { name: 'rolo', align: 'center', label: 'Rolo', field: 'rolo' },
      { name: 'lote', align: 'center', label: 'Lote', field: 'lote' },
      { name: 'po', align: 'center', label: 'PO', field: 'po' },
      { name: 'status', align: 'center', label: 'Status', field: 'status' },
      { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes' }
    ]

    const rows = [
      {
        id: 32,
        codigo: 'Viscose_Air_Jet',
        descricao: 'Viscose Air Jet',
        cor: 'Preto',
        rolo: 4,
        lote: 2,
        po: '15-136',
        status: 'vendido'
      }
    ]

    const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 1
    })

    return { options, columns, rows, pagination, pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage)) }
  }
})
</script>
