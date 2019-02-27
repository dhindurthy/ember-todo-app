import Ember from "ember";

export default Ember.Component.extend({
  itemindex: null,
  actions: {
    addItem: function() {
      if (this.get("todoItem")) {
        this.addItem(this.get("todoItem"), this.get("itemindex"));
        this.set("todoItem", "");
        this.set("itemindex", null);
      } else {
        alert("cannot be empty");
      }
    },
    deleteItem: function(index) {
      this.deleteItem(index);
    },
    editItem: function(index, todoItem) {
      this.set("todoItem", todoItem.name);
      this.set("itemindex", index);
      this.editItem(index);
      document.getElementById("addItem").focus();
    }
  }
});
