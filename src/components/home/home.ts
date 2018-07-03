import { Component, Vue } from 'vue-property-decorator'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bTable from 'bootstrap-vue/es/components/table/table'
import bButton from 'bootstrap-vue/es/components/button/button'
import bAlert from 'bootstrap-vue/es/components/alert/alert'
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import './home.scss'

@Component({
  template: require('./home.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow,
    'b-table': bTable,
    'b-button': bButton,
    'b-alert': bAlert,
    'b-form-select': bFormSelect,
    'b-form-input': bFormInput
  }
})
export class HomeComponent extends Vue {

  package: string = 'vue-webpack-typescript'
  repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript'
  mode: string = process.env.ENV
  fields: Array<string> = ['no', 'server_draw_date', 'offical_date_time', 'draw_no.', 'result', 'result_status', 'settlement']
  items: Array<object> = [
    { name: { first: 'Mitzi', last: 'Navarro' }, isActive: true, no: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { name: { first: 'Dickerson', last: 'Macdonald' }, isActive: false, no: 21, first_name: 'Larsen', last_name: 'Shaw' },
    { name: { first: 'Dickerson', last: 'Macdonald' }, isActive: false, no: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { name: { first: 'Dickerson', last: 'Macdonald' }, isActive: true, no: 38, first_name: 'Jami', last_name: 'Carney' }
  ]
  selected: string = null
  options: Array<object> = [
    { value: null, text: 'All' },
    { value: 'a', text: 'ShangHai' },
    { value: 'b', text: 'Test' },
    { value: { 'C': '3PO' }, text: 'Test3' },
    { value: 'd', text: 'Test4', disabled: true }
  ]
  text1: string = null
}
