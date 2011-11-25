Todos.todoListController = SC.ArrayController.create({
  content: [],
  
  createTodo: function(title) {
    Todos.store.createRecord(Todos.Todo, {title: title});
  },
  
  remaining: function() {
    return this.filterProperty('isDone', false).get('length');
  }.property('@each.isDone'),
    
  clearCompletedTodos: function() {
    this.filterProperty('isDone', true).forEach(function(item) {
      item.destroy();
    });
  },
  
  allAreDone: function(key, value) {
    if (value !== undefined) {
      this.setEach('isDone', value);
      return value;
    } else {
      return this.get('length') && this.everyProperty('isDone', true);
    }
  }.property('@each.isDone')
  
});