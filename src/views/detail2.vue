<template>
  <pagoda-left-right-layout title="左右详情页布局" sub-title="基本信息">
    <template slot="operation">
      <!-- 操作按钮栏插槽 -->
      <!-- 此处最多只展示3个按钮 其他的操作按钮显示在更多按钮内 -->
      <pagoda-collapse-button>
        <el-button type="primary">保存按钮</el-button>
        <el-button type="primary">提交按钮</el-button>
        <el-button>计算</el-button>
        <el-button>确认</el-button>
      </pagoda-collapse-button>
    </template>
    <template slot="tabs">
      <!-- 顶部tab栏插槽 -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="tab标签一" name="first"></el-tab-pane>
        <el-tab-pane label="tab标签二" name="second"></el-tab-pane>
        <el-tab-pane label="tab标签三" name="third"></el-tab-pane>
      </el-tabs>
    </template>
    <template slot="content">
      <!-- 主内容区插槽 -->
      <div v-if="activeName === 'first'">
        tab标签一
      </div>
      <div v-if="activeName === 'second'">
        tab标签二
      </div>
      <div v-if="activeName === 'third'">
        tab标签三
      </div>
    </template>
    <template slot="edit">
      <!-- 编辑按钮插槽 -->
      <div @click="handleEdit" v-show="!editable">
        <i class="iconfont icon-edit"></i>
      </div>
      <div class="pagoda-button-group" v-show="editable">
        <el-button @click="cancleEdit">取消</el-button>
        <el-button type="primary" @click="editable = false">保存</el-button>
      </div>
    </template>
    <template slot="content-form">
      <!-- 表单插槽 -->
      <el-form inline label-position="left" class="el-form-reset">
        <el-form-item label="状态">
          <el-input v-model="form.value1" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value1 }}</p>
        </el-form-item>
        <el-form-item label="发现版本">
          <el-input v-model="form.value2" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value2 }}</p>
        </el-form-item>
        <el-form-item label="模块">
          <el-input v-model="form.value3" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value3 }}</p>
        </el-form-item>
        <el-form-item label="优先级">
          <el-input v-model="form.value4" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value4 }}</p>
        </el-form-item>
        <el-form-item label="严重程度">
          <el-input v-model="form.value5" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value5 }}</p>
        </el-form-item>
        <el-form-item label="处理人">
          <el-input v-model="form.value6" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value6 }}</p>
        </el-form-item>
        <el-form-item label="创建人">
          <el-input v-model="form.value7" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value7 }}</p>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="form.value8" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value8 }}</p>
        </el-form-item>
        <el-form-item label="修复人">
          <el-input v-model="form.value9" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value9 }}</p>
        </el-form-item>
        <el-form-item label="修复状态">
          <el-input v-model="form.value0" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value0 }}</p>
        </el-form-item>
        <el-form-item label="进程">
          <el-input v-model="form.value11" v-show="editable"></el-input>
          <p v-show="!editable">{{ form.value11 }}</p>
        </el-form-item>
      </el-form>
    </template>
  </pagoda-left-right-layout>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      editable: false,
      form: {
        value1: '新的状态',
        value2: '新的版本',
        value3: '模块名字',
        value4: '优先',
        value5: '严重',
        value6: '李四',
        value7: '张三',
        value8: '--',
        value9: '--',
        value0: '--',
        value11: '--'
      },
      editForm: {}
    }
  },
  methods: {
    // 编辑icon触发事件
    handleEdit () {
      this.editable = true
      this.editForm = Object.assign({}, this.form)
    },
    cancleEdit () {
      this.form = Object.assign({}, this.editForm)
      this.editable = false
    }
  }
}
</script>
