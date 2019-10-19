<template>
  <pagoda-form-table-layout>
    <!-- 表单 -->
    <template slot="form" slot-scope="scope">
      <el-form class="el-form-reset" inline>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="表单label">
          <el-input></el-input>
        </el-form-item>
        <!-- 表单操作按钮 -->
        <div class="pagoda-button-group" v-bind="scope.btnPosition">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </div>
      </el-form>
    </template>
    <!-- 表格上方操作按钮 -->
    <template slot="table-btns">
      <div class="pagoda-button-group">
        <el-button>操作按钮</el-button>
        <el-button>操作按钮</el-button>
      </div>
    </template>
    <!-- 实现一屏展示时 一定要配置表格高度 -->
    <template slot="table" slot-scope="scope">
      <pagoda-table-v2
        :columns="columns"
        :request="tableRequest"
        :height="scope.height"
      >
        <template slot="edit-column" slot-scope="scope">
          <div class="pagoda-button-group">
            <el-button type="text" @click="handleDetail1">当前标签查看详情</el-button>
            <el-button type="text" @click="handleDetail2(scope.row)">新增标签查看详情</el-button>
          </div>
        </template>
      </pagoda-table-v2>
    </template>
  </pagoda-form-table-layout>
</template>

<script>
export default {
  data () {
    return {
      columns: [{
        label: '日期',
        prop: 'date'
      }, {
        label: '姓名',
        prop: 'name'
      }, {
        label: '地址',
        prop: 'address'
      }, {
        label: '操作',
        width: 240,
        slot: 'edit-column'
      }]
    }
  },
  methods: {
    tableRequest (currentPage, pageSize, sortable) {
      return Promise.resolve({
        data: Array.from({ length: 30 }, (_, index) => ({
          index,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        })),
        total: 100
      })
    },
    handleDetail1 () {
      // 在当前详情页查看详情 列表页与详情页的路由地址要保持有层级关系 例如这里的 /main 和 /main/detail1
      this.$router.push({ path: '/main/detail1', query: { a: 1 } })
    },
    handleDetail2 (row) {
      // 若当前路由需要打开新标签，则需在路由meta字段中配置tabConfig 详细配置请参考 router/index.js
      this.$router.push({ path: '/detail2', query: { index: row.index } })
    }
  }
}
</script>
