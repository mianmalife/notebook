const nodes = [
  { id: 1, pId: 0, name: "父节点1 - 展开", open: true },
  { id: 11, pId: 1, name: "父节点11 - 折叠" },
  { id: 111, pId: 11, name: "叶子节点111" },
  { id: 112, pId: 11, name: "叶子节点112" },
  { id: 113, pId: 11, name: "叶子节点113" },
  { id: 114, pId: 11, name: "叶子节点114" },
  { id: 12, pId: 1, name: "父节点12 - 折叠" },
  { id: 121, pId: 12, name: "叶子节点121" },
  { id: 122, pId: 12, name: "叶子节点122" },
  { id: 123, pId: 12, name: "叶子节点123" },
  { id: 124, pId: 12, name: "叶子节点124" },
  { id: 13, pId: 1, name: "父节点13 - 没有子节点", isParent: true },
  { id: 2, pId: 0, name: "父节点2 - 折叠" },
  { id: 21, pId: 2, name: "父节点21 - 展开", open: true },
  { id: 211, pId: 21, name: "叶子节点211" },
  { id: 212, pId: 21, name: "叶子节点212" },
  { id: 213, pId: 21, name: "叶子节点213" },
  { id: 214, pId: 21, name: "叶子节点214" },
  { id: 22, pId: 2, name: "父节点22 - 折叠" },
  { id: 221, pId: 22, name: "叶子节点221" },
  { id: 222, pId: 22, name: "叶子节点222" },
  { id: 223, pId: 22, name: "叶子节点223" },
  { id: 224, pId: 22, name: "叶子节点224" },
  { id: 23, pId: 2, name: "父节点23 - 折叠" },
  { id: 231, pId: 23, name: "叶子节点231" },
  { id: 232, pId: 23, name: "叶子节点232" },
  { id: 233, pId: 23, name: "叶子节点233" },
  { id: 234, pId: 23, name: "叶子节点234" },
  { id: 3, pId: 0, name: "父节点3 - 没有子节点", isParent: true }
]

function nodeChildren(node, newChildren) {
  if (!node) {
    return null
  }

  if (typeof newChildren !== 'undefined') {
    node['children'] = newChildren
  }

  return node['children']
}

function transformToJson(sNodes) {
  const key = 'id';
  const parentKey = 'pId'
  const temple = {}
  const r = []
  for (let i = 0; i < sNodes.length; i++) {
    temple[sNodes[i][key]] = sNodes[i] // 得到以节点id为key 节点为value的对象 { 1: { id: 1, pId: 0, name: "父节点1 - 展开", open: true }, 11: { id: 11, pId: 1, name: "父节点11 - 折叠" } }
  }
  for (let i = 0; i < sNodes.length; i++) {
    // 获取父节点p, p如果为undefined说明没有找到父节点(p是根节点), 直接放数组r里存起来(63行)
    const p = temple[sNodes[i][parentKey]]
    // 找到sNode[i]的父节点p & sNode[i]的pId和Id不相等
    if (p && sNodes[i][parentKey] !== sNodes[i][key]) {
      let children = nodeChildren(p)
      if (!children) {
        children = nodeChildren(p, [])
      }
      children.push(sNodes[i])
    } else {
      r.push(sNodes[i])
    }
  }
  return r
}

console.log(transformToJson(nodes))