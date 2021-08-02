const DEFAULT_SAMPLE = [{
  title: '買蘋果',
  description: '到costco買一大堆蘋果吧',
  priority: '2',
  done: false,
  createTime: new Date(),
  updateTime: new Date()
},
{
  title: '大掃除',
  description: '過年大掃除',
  priority: '3',
  done: true,
  createTime: new Date(),
  updateTime: new Date()
},
{
  title: '大掃除用品',
  description: '過年大掃除前，要先買打掃工具與清潔用品',
  priority: '3',
  done: false,
  createTime: new Date(),
  updateTime: new Date()
},
{
  title: '繳電話費',
  description: '再不繳電話費，就完蛋了啦，要被停話了',
  priority: '5',
  done: true,
  createTime: new Date(),
  updateTime: new Date()
}]

export default () => {
  return JSON.parse(JSON.stringify(DEFAULT_SAMPLE))
}
