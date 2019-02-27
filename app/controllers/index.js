import Ember from "ember";

export default Ember.Controller.extend({
  todoList: [
    { name: "Item qwerty" },
    { name: "Item abcde" },
    { name: "Item 12345" }
  ],
  actions: {
    addItem: function(todoItem, itemindex) {
      let todoList = this.get("todoList");
      if (itemindex) {
        todoList.insertAt(itemindex, { name: todoItem });
      } else {
        todoList.addObject({ name: todoItem });
      }
    },
    deleteItem: function(index) {
      let todoList = this.get("todoList");
      todoList.removeAt(index);
    },
    editItem: function(index) {
      let todoList = this.get("todoList");
      todoList.removeAt(index);
    }
  }
});
