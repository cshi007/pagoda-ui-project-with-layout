
<template>
  <pagoda-detail-layout-v1 content-title="这里是页面标题" @back="handleBack">
    <template slot="content-btn">
      <el-button v-show="!editable" @click="handleEdit">编辑</el-button>
      <div class="pagoda-button-group" v-show="editable">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </div>
    </template>
    <template slot="content-form">
      <el-form class="el-form-reset pagoda-form-grid pagoda-form-grid--inline">
        <el-form-item label="输入框" class="pagoda-form-grid-cell">
          <el-input v-model="form.value1" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value1}}</p>
        </el-form-item>
        <el-form-item label="整数" class="pagoda-form-grid-cell">
          <el-input v-model="form.value2" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value2}}</p>
        </el-form-item>
        <el-form-item label="数字" class="pagoda-form-grid-cell">
          <el-input v-model="form.value3" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value3}}</p>
        </el-form-item>
        <el-form-item label="邮箱" class="pagoda-form-grid-cell">
          <el-input v-model="form.value4" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value4}}</p>
        </el-form-item>
        <el-form-item label="手机号码" class="pagoda-form-grid-cell">
          <el-input v-model="form.value5" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value5}}</p>
        </el-form-item>
        <el-form-item label="电话" class="pagoda-form-grid-cell">
          <el-input v-model="form.value6" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value6}}</p>
        </el-form-item>
        <el-form-item label="网址" class="pagoda-form-grid-cell">
          <el-input v-model="form.value7" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value7}}</p>
        </el-form-item>
        <el-form-item label="标签" class="pagoda-form-grid-cell">
          <el-input v-model="form.value8" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value8}}</p>
        </el-form-item>
        <el-form-item label="评分" class="pagoda-form-grid-cell">
          <el-input v-model="form.value9" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value9}}</p>
        </el-form-item>
        <el-form-item label="金额" class="pagoda-form-grid-cell">
          <el-input v-model="form.value0" v-show="editable"></el-input>
          <p v-show="!editable">{{form.value0}}</p>
        </el-form-item>
        <div class="el-form-reset-block">
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.value10" v-show="editable"></el-input>
            <p v-show="!editable">{{form.value10}}</p>
          </el-form-item>
        </div>
      </el-form>
    </template>
    <template slot="content">
      <div class="detail-v1-detail__flex">
        <pagoda-sub-title>这里是栏目标题</pagoda-sub-title>
        <pagoda-form-table-layout class="detail-layout-v1-content__form-table-layout">
          <!-- 实现一屏展示时 一定要配置表格高度 -->
          <template slot="table" slot-scope="scope">
            <pagoda-table-v2
              :columns="columns"
              :request="tableRequest"
              :height="scope.height"
            >
            </pagoda-table-v2>
          </template>
        </pagoda-form-table-layout>
      </div>
    </template>
  </pagoda-detail-layout-v1>
</template>

<script>
export default {
  data () {
    return {
      editable: false,
      form: {
        value1: '输入框输入的文字输入框输入的文字输入框输入的文字输入框输入的文字输入框输入的文字',
        value2: '1234567890',
        value3: '0987654321',
        value4: 'pagoda@pagoda.com',
        value5: '123456789011',
        value6: '4001811212',
        value7: 'www.pagoda.com.cn',
        value8: '百果园',
        value9: '5',
        value0: '100元',
        value10: '备注信息'
      },
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
      }],
      editForm: {}
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
    handleEdit () {
      this.editable = true
      this.editForm = Object.assign({}, this.form)
    },
    handleCancel () {
      this.form = Object.assign({}, this.editForm)
      this.editable = false
    },
    handleSave () {
      this.editable = false
    },
    handleBack () {
      this.$router.push('/main')
    }
  }
}
</script>
