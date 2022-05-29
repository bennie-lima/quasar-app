<template>
  <q-page class="q-pa-md">
    <h4 class="text-weight text-bold">Dashboard</h4>

    <div class="row justify-between">
      <div class="col-md-4 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Produtos</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            58757
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Rolos</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            58757
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Estoque</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            147709.3
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row justify-between">
      <div class="col-md-6 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Rolos vendidos vs disponiveis</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <apexchart type="pie" :options="state.chartOptions" :series="state.series" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-6 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Rolos mais usados</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <apexchart type="bar" :options="state.chartOptions2" :series="state.series2" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row justify-between">
      <div class="col-md-6 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Últimos produtos cadastrados</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
             <q-list separator>
              <q-item v-ripple>
                <q-item-section>
                  <q-item-label>Tecnospan Liso</q-item-label>
                  <q-item-label caption>13/05/2022</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-item-label>Tecnospan Liso</q-item-label>
                  <q-item-label caption>13/05/2022</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-item-label>Tecnospan Liso</q-item-label>
                  <q-item-label caption>13/05/2022</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-6 col-xs-12 col-sm-12">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">Estoques baixos</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
             <q-list separator>
              <q-item v-ripple>
                <q-item-section>
                  <q-item-label>Viscose Air Jet</q-item-label>
                  <q-item-label caption>0</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-item-label>Megastretch</q-item-label>
                  <q-item-label caption>0</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-ripple>
                <q-item-section>
                  <q-item-label>Tecnospan Liso</q-item-label>
                  <q-item-label caption>0</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const state = reactive({
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie'
        },
        labels: ['Disponiveis', 'Vendidos'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [44, 55],
      chartOptions2: {
        chart: {
          type: 'bar',
          width: 380
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Flanell_Fleece_Liso_', 'Kolona', 'MALHA_LINEN_']
        }
      },
      series2: [{
        data: [400, 430, 448]
      }]
    })

    return { state }
  }
})

</script>

<style lang="sass" scoped>
.my-card
  margin: 5px
</style>
