/*
参考：
  https://xie.infoq.cn/article/6af7782f35bfe69f25548470e
*/

export default {

  data() {
    return {
      content: '<h3>hello</h3>'
    }
  },

  methods: {
    handleClick() {
      console.log('点击了~~~');
    }
  },

  // 这里需要手动注入 h，保证h在作用域中
  // 如果babel配置里开启了 'injectH': false  就会自动注入，不用管了
  render(h) {
    console.log(this);
    const divStyle = { width: '200px', height: '200px', border: '1px solid red' };
    return (
      <div>
        {/* 插槽里的东西要自己去 this.$slots 上去拿 */}
        <div style={divStyle}>{this.$slots.default}</div>
        {/* 具名插槽（也可以自己定义） */}
        <template slot="named-slot"></template>
        {/*
            scopedSlots即作用域插槽，default为默认插槽，如果是具名插槽，将default该为对应插槽名称即可
                scopedSlots={{
                  default: ({ row }) => {
                    return <div style="color:red;">{row.name}</div>
                  }
                }}
            也可以从实例上单独获取作用域插槽然后自定义
        */}
        {/* 
            监听事件要使用 onXxx 的形式
            监听原生事件....  nativeOnClick
            甚至可以使用对象的方式去监听事件
              on={{
                focus: this.$_handleFocus,
                input: this.$_handleInput
              }}
              nativeOn={{
                click: this.$_handleClick
              }}
         */}
        <button onClick={this.handleClick}>点击</button>
        <div domPropsInnerHTML={this.content}></div>
        {/* 
          同理 innerText 对应着 domPropsInnerText 
          但其实更简单的方法是直接 {xxx} 放到标签中间去即可
        */}
      </div>
    )
  },
}

/*
关于事件修饰符：
  .stop ： 阻止事件冒泡，在JSX中使用event.stopPropagation()来代替
  .prevent：阻止默认行为，在JSX中使用event.preventDefault() 来代替
  .self：只当事件是从侦听器绑定的元素本身触发时才触发回调，使用下面的条件判断进行代替
        if (event.target !== event.currentTarget){
          return
        }
  .enter与keyCode:  在特定键触发时才触发回调

前缀语法：
    on={{
      '!click': this.$_handleClick, // 相当于 :click.capture
      '~input': this.$_handleInput, // 相当于 :input.once
      '&mousedown': this.$_handleMouseDown, // 相当于 :mousedown.passive
      '~!mouseup': this.$_handleMouseUp // 相当于 :mouseup.capture.once
    }}
*/