export default class Todo {
    constructor(){
      this.list = ['jerk off'];
    }
  
    add(todo){
      this.list.push(todo);
    }
  
    remove(index){
      this.list.splice(index,1);
    }
  
    update(index,updatedTodo){
      if(index < this.list.length){
        this.list[index] = updatedTodo;
      }
    }
  
    getAll(){
      return this.list;
    }
  
    get(index){
      if(index < this.list.length){
        return this.list[index];
      }else {
        return null;
      }
    }
  
    clear(){
      this.list = [];
    }
  
  }