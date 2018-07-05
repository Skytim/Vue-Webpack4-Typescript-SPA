import { Component, Vue } from 'vue-property-decorator'
import './home.scss'
import SettlementLog from './SettlementLog/SettlementLog.vue'
@Component({
  template: require('./home.html'),
  components: {
    'SettlementLog': SettlementLog
  }
  // }
})
export class HomeComponent extends Vue {
  input: string = ''
  value6: string = ''
  value7: string = ''
  value: string = ''
  visible2: boolean = false
  visible3: boolean = false
  ruleForm: Object = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
  }
  formInline: Object = {
    user: '',
    region: ''
  }
  rules: Object = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    region: [
      { required: true, message: '请选择活动区域', trigger: 'change' }
    ],
    date1: [
      { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
    ],
    date2: [
      { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
    ],
    type: [
      { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
    ],
    resource: [
      { required: true, message: '请选择活动资源', trigger: 'change' }
    ],
    desc: [
      { required: true, message: '请填写活动形式', trigger: 'blur' }
    ]
  }
  tableData2: Array<object> = [{
    no: 1,
    server_draw_date_day: '2018-06-29',
    server_draw_date_time: '19:00:00',
    official_date_day: '2018-06-29',
    official_date_time: '19:00:00',
    counter: 'Beijing',
    draw_no: 123,
    results: { 'numbers': ['05', '06'] },
    result_status: 'Resulted',
    settlement: true
  }, {
    no: 2,
    server_draw_date_day: '2018-06-30',
    server_draw_date_time: '19:00:00',
    official_date_day: '2018-06-29',
    official_date_time: '19:00:00',
    counter: 'Beijing',
    draw_no: 124,
    results: null,
    result_status: 'Resulted',
    settlement: false
  }, {
    no: 3,
    server_draw_date_day: '2018-06-31',
    server_draw_date_time: '19:00:00',
    official_date_day: '2018-06-29',
    official_date_time: '19:00:00',
    counter: 'Beijing',
    draw_no: 125,
    results: null,
    result_status: 'Resulted',
    settlement: false
  }, {
    no: 4,
    server_draw_date_day: '2018-06-32',
    server_draw_date_time: '19:00:00',
    official_date_day: '2018-06-29',
    official_date_time: '19:00:00',
    counter: 'Beijing',
    draw_no: 126,
    results: null,
    result_status: 'Resulted',
    settlement: false
  }]
  dialogVisible: boolean = false
  dialogTableVisible: boolean = false
  showSettleLog () {
    this.dialogVisible = true
  }

  closeSettleLog () {
    this.dialogVisible = false
  }
}
