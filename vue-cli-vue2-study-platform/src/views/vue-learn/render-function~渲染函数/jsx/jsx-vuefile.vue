<script>
export default {

  data() {
    return {
      msg: 'hello world'
    }
  },

  render (h) {
    // 定义标题
    let title = <h3 class="title">{this.msg}</h3>;

    let liArr = [];
    for(let i=0; i<10; i++) {
      liArr.push(<li>{i * i}</li>)
    }

    let list = <ul>{liArr}</ul>

    // 返回模板
    return (
      <div>
        {title}
        {list}
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>