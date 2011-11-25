Todos.Todo = SC.Record.extend({
  title: SC.Record.attr(String),
  isDone: SC.Record.attr(Boolean, { defaultValue: NO})
});