export default {
  // 这里需要手动注入 h，保证h在作用域中
  // 如果babel配置里开启了 'injectH': false  就会自动注入，不用管了
  render(h) {
    return (
      <div>
        <input type="text" />
      </div>
    );
  },
};
