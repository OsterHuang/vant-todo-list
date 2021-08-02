export default class TodoItem {
  id;
  title = '';
  description = '';
  priority = 0;
  done = false;
  createTime = new Date();
  updateTime = null;

  constructor(
    id,
    title = '',
    description = '',
    priority = 3,
    done = false,
    createTime = new Date(),
    updateTime = null
  ) {
    this.id = id;
    this.title = title || '請輸入您要做的事' ;
    this.description = description ;
    this.priority =   priority;
    this.done =   done;
    this.createTime =   createTime;
    this.updateTime =   updateTime;
  }
}