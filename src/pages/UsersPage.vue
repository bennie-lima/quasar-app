<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Usuários</h4>

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
    <template v-slot:top>
      <q-btn dense outline color="primary" label="Cadastrar" icon="add"></q-btn>
    </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UsersPage',
  setup () {
    const columns = [
      { name: 'usuario', align: 'center', label: 'Usuário', field: 'usuario', sortable: true },
      { name: 'email', align: 'center', label: 'E-mail', field: 'email', sortable: true },
      { name: 'telefone', align: 'center', label: 'Telefone', field: 'telefone' },
      { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes' }
    ]

    const rows = [
      {
        usuario: 'Bennie',
        email: 'bennie@email.com.br',
        telefone: '(00) 0000-0000'
      },
      {
        usuario: 'bennie 2',
        email: 'bennie@email.com.br',
        telefone: '(00) 00000-0000'
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
