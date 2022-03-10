export function copyText(val) {
  // 创建一个 Input标签
  const cInput = document.createElement('input');
  cInput.value = val;
  document.body.appendChild(cInput);
  cInput.select(); // 选取文本域内容;
  document.execCommand('copy');
  Message.success('复制成功');
  cInput.remove();
}
