<template>
  <div class="treelistitem">
    <el-tree
      :data="data"
      node-key="menuId"
      :render-content="renderContent"
      @node-click="handleNodeClick"
      :props="treeProps"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentId: '',
      currentName: '',
      addName: '',
      open: false,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    deletefn: {
      type: Function,
    },
    edietFn: {
      type: Function,
    },
    addFn: {
      type: Function,
    },
    getId: {
      type: Function,
    },
    opreateId: {
      type: Number,
      default: 0,
    },
    treeProps: {
      type: Object,
    },
    fatherIdKey: {
      type: String,
      default: 'attributes.fatherId',
    },
  },
  methods: {
    prevent() {
      this.currentId = '';
    },
    ok(data, node) {
      if (data.text == this.currentName) {
        this.currentId = '';
        return false;
      }

      let edietData = {
        data,
        node,
        name: this.currentName,
        id: this.currentId,
      };
      this.$emit('edietFn', edietData);
      data.text = this.currentName;
      this.currentId = '';
    },
    handleNodeClick(val) {
      this.$emit('getId', val.id);
    },
    handleInput(val) {
      this.currentName = val;
    },
    handClick(value, data, node) {
      if (value == '1') {
        this.currentId = data.id;
        this.currentName = data.text;
      } else if (value == '2') {
        let addData = { data, node };

        this.$emit('addFn', addData);
      } else {
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$emit('deletefn', data);
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
          })
          .catch(() => {});
      }
    },
    renderContent(h, { node, data, store }) {
      data[this.fatherIdKey] = data[this.fatherIdKey] || 0;
      return (
        <div class="custom-tree-node" style={{ width: '100%' }}>
          {!data.son ? (
            node.expanded ? (
              <i class="el-icon-folder-opened"></i>
            ) : (
              <i class="el-icon-folder"></i>
            )
          ) : (
            <i class="el-icon-document"></i>
          )}
          {this.currentId === data.id ? (
            <el-input value={this.currentName} on-input={this.handleInput} style={{ width: '40%' }}></el-input>
          ) : (
            <el-tooltip effect="dark" content={data.text} placement="top">
              <span class="custom-tree-node-text">{data.text}</span>
            </el-tooltip>
          )}
          {this.currentId === data.id ? (
            <span style={{ paddingLeft: '10px' }} class={this.opreateId != 3 ? 'showTreeList' : 'hideTreeList'}>
              <el-button
                type="info"
                icon="el-icon-circle-close"
                class="btnreturn"
                circle
                size="mini"
                on-click={this.prevent}></el-button>
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-check"
                class="btnsearch"
                circle
                on-click={() => {
                  this.ok(data, node);
                }}></el-button>
            </span>
          ) : (
            <el-dropdown
              style={{ float: 'right', paddingRight: '10px' }}
              class={this.opreateId != 3 ? 'showTreeList' : 'hideTreeList'}
              on-command={value => {
                this.handClick(value, data, node);
              }}>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1" class={data[this.fatherIdKey] == 0 ? 'hideCommand' : 'showCommand'}>
                  <i class="el-icon-edit"></i>
                </el-dropdown-item>
                <el-dropdown-item command="2">
                  <i class="el-icon-plus"></i>
                </el-dropdown-item>
                <el-dropdown-item command="3" class={data[this.fatherIdKey] == 0 ? 'hideCommand' : 'showCommand'}>
                  <i class="el-icon-delete"></i>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          )}
        </div>
      );
    },
  },
};
</script>

<style lang="scss" >
.el-tree > .el-tree-node {
  min-width: 100%;
  display: inline-block;
}
.showCommand {
  display: inline-block;
}
.hideCommand {
  display: none;
}
.treelistitem.showTreeList {
  display: inline-block;
}
.treelistitem .hideTreeList {
  display: none;
}
.treelistitem .el-tree {
  width: 100% !important;
}
.treelistitem .el-dropdown {
  float: right;
  padding-right: 10px;
}
.treelistitem .custom-tree-node {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
.treelistitem .custom-tree-node .custom-tree-node-text {
  width: 60%;
  height: 30px;
  padding-left: 10px;
  padding-bottom: 0.5px;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.treelistitem .el-tree-node__content {
  height: 50px !important;
}
.treelistitem .el-input {
  height: 20px;
  margin-top: -20px;
  margin-left: 10px;
}
.treelistitem .el-input__inner {
  height: 30px;
}
</style>
