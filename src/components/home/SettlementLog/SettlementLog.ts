import { Component, Vue } from 'vue-property-decorator'

@Component({
  template: require('./SettlementLog.html'),
  props: ['dialogTableVisible']
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

  closeDialog () {
    this.$emit('dialogTableVisible',false)
  }
  close () {
    this.$emit('close')
    this.$emit('dialogTableVisible',false)
  }
}
