export default class TodoItem {
  id;
  title = '輸入要做的事';
  description = '請輸入您要做的事的詳細內容';
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
    this.title = title || '輸入要做的事' ;
    this.description = description ;
    this.priority =   priority;
    this.done =   done;
    this.createTime =   createTime;
    this.updateTime =   updateTime;
  }
}