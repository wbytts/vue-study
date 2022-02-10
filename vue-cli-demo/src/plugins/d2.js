import d2Crud from '@d2-projects/d2-crud';
import { d2CrudPlus } from 'd2-crud-plus';
// import d2Crud from '@d2-projects/d2-crud' 【d2-crud官方已停止维护，推荐使用增强版d2-crud-x】
// 推荐将d2-crud替换为d2-crud-x【使用方式基本与d2-crud一致】
import d2CrudX from 'd2-crud-x';
import {
  D2pAreaSelector,
  D2pFileUploader,
  D2pIconSelector,
  D2pTreeSelector,
  D2pFullEditor,
  D2pUploader,
  D2pDemoExtend,
} from 'd2p-extends'; // 组件支持懒加载

/*
演示地址  http://preview.d2-crud-plus.docmirror.cn/D2CrudPlusExample/
文档  http://d2-crud-plus.docmirror.cn/d2-crud-plus/
Gitee   https://gitee.com/greper/d2-crud-plus
GitHub  https://github.com/greper/d2-crud-plus
请不要吝啬您的star，谢谢！
可以通过 vue.use(d2CrudPlus,{starTip:false}) 来关闭以上消息
*/

export default function (Vue) {
  // Vue.use(D2Crud);
  Vue.use(d2Crud, { size: 'small' }); // 设置默认尺寸
  Vue.use(d2CrudX, { name: 'd2-crud-x' }); //注册名称为d2-crud-x ，不传name则使用d2-crud作为标签名称
  Vue.use(d2CrudPlus, {
    starTip:false, // 启动时控制台的提示消息
    //获取数据字典的请求方法
    //可在dict中配置getData方法覆盖此全局方法
    getRemoteDictFunc(url, dict) {
      return request({
        // 用你项目中的http请求
        url: url,
        method: 'get',
      }).then(ret => {
        return ret.data; //返回字典数组
      });
    },
    commonOption() {
      //d2-crud option 全局配置，每个页面的crudOptions会以全局配置为基础进行覆盖
      return {
        format: {
          page: {
            // page接口返回的数据结构配置，
            request: {
              // 请求参数
              current: 'current', //当前
              size: 'size',
            },
            response: {
              //返回结果
              current: 'current', // 当前页码 ret.data.current
              size: 'size', // 每页条数，ret.data.size,
              //size: (data) => { return data.size }, //你也可以配置一个方法，自定义返回
              total: 'total', // 总记录数 ret.data.total
              records: 'records', // 列表数组 ret.data.records
            },
          },
        },
        formOptions: {
          defaultSpan: 12, // 默认的表单 span
        },
        options: {
          height: '100%', // 表格高度100%，此时d2-crud-x外部容器必须有高度, 使用toolbar必须设置
        },
        pageOptions: {
          compact: true, // 是否紧凑型页面
        },
        viewOptions: {
          disabled: false, // 开启查看按钮
        },
      };
    },
  });

  // 安装扩展插件
  Vue.use(D2pTreeSelector);
  Vue.use(D2pAreaSelector);
  Vue.use(D2pIconSelector);
  Vue.use(D2pFullEditor);
  Vue.use(D2pFileUploader);
  Vue.use(D2pDemoExtend);
  // Vue.use(D2pUploader);
}
