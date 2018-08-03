function ToDoItem() {
  this.caption = "";
  this.isCompleted = false;
  this.toggle = function() {
    this.isCompleted = !this.isCompleted;
  };
}
function ToDoApp() {
  this.ToDoCollection = [];
  this.render = render.bind(this);
  this.addItem = function(cap) {
    let item = new ToDoItem();
    item.caption = cap;
    this.ToDoCollection.push(item);
  };
  this.removeItem = function(index) {
    this.ToDoCollection.splice(index, 1);
    document.getElementById("main-app").innerHTML = "";
    render();
  };
}
