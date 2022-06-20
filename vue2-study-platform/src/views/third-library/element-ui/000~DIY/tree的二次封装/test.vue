<template>
  <div>
    <el-tree :data="treeList" :props="treeProps">
      <template #default=" { node, data }">
        <div>
          <template v-if="node.childNodes.length != 0">
            <i v-if="node.expanded" class="el-icon-folder-opened"></i>
            <i v-if="!node.expanded" class="el-icon-folder"></i>
          </template>
          <template v-else>
            <i class="el-icon-document"></i>
          </template>
          &nbsp;
          <span>{{data.menuName}}</span>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<script>
export const name = 'ElementUI#Tree';
import menuData from './data.js';

export default {
  data() {
    return {
      treeList: [...menuData],
      opreateId: 0,
      treeProps: {
        children: 'children',
        label: 'menuName',
      },
    };
  },
  methods: {},
};
</script>


