export default {
	/**
	 * [深度递归 子节点 children不存在时需要空数组 ]
	 */
	loopTree: function(arr, pid) {
		const itemArr = []
		for (let i = 0; i < arr.length; i++) {
			const node = arr[i]
			if (node.pid == pid) {
				const newNode = {
					id: node.id + '',
					pid: node.pid,
					value: node.id + '',
					label: node.text ? node.text : 'null',
					text: node.text ? node.text : 'null'
				}

				const childArr = this.loopTree(arr, node.id)

				// if (childArr.length > 0) {
				newNode.children = childArr
				// }

				if (typeof node.attributes !== 'undefined') {
					newNode.url = node.attributes
				}

				if (typeof node.iconCls !== 'undefined') {
					newNode.iconCls = node.iconCls
				}

				itemArr.push(newNode)
			}
		}

		return itemArr
	},
	/**
	 * [深度递归 子节点]
	 */
	loop: function(arr, pid, parentId, keyId, textName) {
		const itemArr = []
		for (let i = 0; i < arr.length; i++) {
			const node = arr[i]
			if (node.parentId == pid) {
				const newNode = {
					...node
				}
				const childArr = this.loop(arr, node[keyId], parentId, keyId, textName)
				if (childArr.length > 0) {
					newNode.children = childArr
				}
				itemArr.push(newNode)
			}
		}
		return itemArr
	},

	loopId: function(arr, id, topid, idStr, pidStr, defaultArr) {
		const idArr = defaultArr || []

		for (let i = 0; i < arr.length; i++) {
			const liData = arr[i]
			if (liData[idStr] == id) {
				const _idStr = id + ''
				idArr.unshift(_idStr)

				const _pid = liData[pidStr]

				if (_pid !== topid) {
					// eslint-disable-next-line no-unused-vars
					const _arr = this.loopId(arr, _pid, topid, idStr, pidStr, idArr)
					// console.log(_arr)
				}
			}
		}

		return idArr
	},
	/**
	 * [深度递归 子节点]
	 */
	loopList: function(arr, pid, parentId, deptId, parentName) {
		const itemArr = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][parentId] == pid) {
				arr[i].name = arr[i].name ? arr[i].name : 'null'
				if (parentName) {
					arr[i].parentName = parentName
				}
				const newNode = Object.assign({}, arr[i])
				const childArr = this.loopList(
					arr,
					arr[i].deptId ? arr[i].deptId : arr[i].menuId,
					parentId,
					deptId,
					parentName ? arr[i].name : ''
				)
				if (childArr.length > 0) {
					newNode.children = childArr
				}
				itemArr.push(newNode)
			}
		}

		return itemArr
	},
	/**
	 * [返回列表查询键值对数据]
	 */
	getSearchData: function(searchItems) {
		const searchObj = {}
		for (let i = 0; i < searchItems.length; i++) {
			const rowItems = searchItems[i]
			for (let j = 0; j < rowItems.length; j++) {
				const item = rowItems[j]
				const itemKey = item.name
				const itemValue = item.value
				searchObj[itemKey] = itemValue
			}
		}
		return searchObj
	}
}
