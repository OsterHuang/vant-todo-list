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
},
{
  title: '很不重要的事情',
  description: '但是這裡的描術，相當相當的長。長得很可怕，看看會發生什麼樣的事情，我們再來決定是不是繼續往下一步來走下去',
  priority: '3',
  done: false,
  createTime: new Date(),
  updateTime: new Date()
},]

export default () => {
  return JSON.parse(JSON.stringify(DEFAULT_SAMPLE))
}
