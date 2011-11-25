Todos.main = function main() {
  Todos.mainPane = SC.TemplatePane.append({
    layerId: 'todos',
    templateName: 'todos'
  });
  
  var todos = Todos.store.find(Todos.Todo);
  Todos.todoListController.set('content', todos);
  
};

function main() { Todos.main(); }