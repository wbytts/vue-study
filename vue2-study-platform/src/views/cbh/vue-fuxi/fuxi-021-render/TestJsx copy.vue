<script>
export default {
  // template: `
  //   <div>
  //     <h1>Hello World</h1>
  //   </div>
  // `,
  render(createElement) {
    // span
    // return createElement('h1', {}, ['Hello', createElement('span', { style: 'color: red;' }, 'World')]);

    // JSX 语法，借鉴React
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  },
};
</script>

<style>
</style>
