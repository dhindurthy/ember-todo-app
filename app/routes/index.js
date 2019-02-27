import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    let someObject = {};

    /**someObject.todoList = [{"name":"Item qwerty"}, {"name":"Item abcde"}, {"name":"Item 12345"}];**/

    return someObject;
  }
});
