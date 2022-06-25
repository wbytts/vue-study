export default ({ props }) => {
  let tag = 'h' + props.level;
  return <tag>{props.text}</tag>;
};
