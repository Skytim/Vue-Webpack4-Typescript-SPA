import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  template: require('./SettlementLog.html'),
  props: ['dialogVisible']
  // }
})
export class SettlementLogComponent extends Vue {
  gridData: Array<object> = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }]

  visible: Boolean = false
  @Watch('visible')
  visibleChanged (val, oldVal) {
    if (val === false) {
      this.$emit('close')
    }
  }
  @Watch('$props')
  propsChanged (val, oldVal) {
    if (this.visible !== val) {
      this.visible = val
    }
  }
}
