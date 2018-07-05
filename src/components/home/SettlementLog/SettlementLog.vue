<template>
  <el-dialog title="收货地址" :visible.sync="dialogVisible" >
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>
</template>

<script lang="ts" src="./SettlementLog.ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class SettlementLogComponent extends Vue {
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
  dialogVisible: boolean = false
}
</script>
