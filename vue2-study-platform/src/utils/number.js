// 将数字转换为大写金额
export function changeToChinese(Num) {
	const fraction = ['角', '分']
	const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
	const unit = [
		['元', '万', '亿'],
		['', '拾', '佰', '仟']
	]
	const head = Num < 0 ? '负' : ''
	Num = Math.abs(Num)
	let s = ''
	for (let i = 0; i < fraction.length; i++) {
		s += (
			digit[Math.floor((Math.floor(Num * 1000 * 10 * Math.pow(10, i)) % (10 * 1000)) / 1000)] + fraction[i]
		).replace(/零./, '')
	}
	s = s || '整'
	Num = Math.floor(Num)
	for (let i = 0; i < unit[0].length && Num > 0; i++) {
		let p = ''
		for (let j = 0; j < unit[1].length && Num > 0; j++) {
			p = digit[Num % 10] + unit[1][j] + p
			Num = Math.floor(Num / 10)
		}
		s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
	}
	return (
		head +
		s
			.replace(/(零.)*零元/, '元')
			.replace(/(零.)+/g, '零')
			.replace(/^整$/, '零元整')
	)
}
