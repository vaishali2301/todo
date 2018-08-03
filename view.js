var store = new ToDoApp();

document.getElementById("input-place").onkeypress = function (event) {
  if (event.key == "Enter") {
    var content = document.getElementById("input-place");
    store.addItem(content.value);
    content.value = "";
    render();
  }
};
function render() {
  document.getElementById("main-app").innerHTML = "";
  var data = store.ToDoCollection;
  console.log(data);
  for (var index in data) {
    const ul = document.getElementById("main-app");
    var li = document.createElement("li");

    var labelCheck = document.createElement("label");
    labelCheck.classList = "checkContainer";
    var check = document.createElement("input");
    check.type = "checkbox";
    var checkSpan = document.createElement("span");
    checkSpan.classList = "checkmark";
    labelCheck.appendChild(check);
    labelCheck.appendChild(checkSpan);

    var text = document.createElement("span");
    text.innerText = data[index].caption;

    check.onclick = function (index) {
      check.checked = "checked";
      store.ToDoCollection[index].toggle();
      render();
    }.bind(null, index);

    if (data[index].isCompleted) {
      text.style.textDecoration = "line-through";
      check.checked = "checked";
    }
    var cross = document.createElement("p");
    cross.classList.add("remove-todo");
    cross.innerHTML = "&#10005;";
    cross.onclick = function (index) {
      store.removeItem(index);
    }.bind(null, index);

    text.contentEditable = true;

    li.classList.add("input-field");
    li.appendChild(labelCheck);
    li.appendChild(text);
    li.appendChild(cross);
    ul.appendChild(li);
  }
  total();
  function total() {
    document.getElementById("total").innerHTML =
      store.ToDoCollection.length + " Items Left";
  }
}
document.getElementById("active").onclick = function () {
  var f = document.getElementsByTagName("li");
  for (i = 0; i < f.length; i++) {
    var m = f[i].getElementsByTagName("label")[0].firstChild;
    var ch = m.checked;
    if (!ch) {
      f[i].style.display = "none";
    } else {
      f[i].style.display = "block";
    }
  }
};
document.getElementById("inactive").onclick = function () {
  var f = document.getElementsByTagName("li");
  for (i = 0; i < f.length; i++) {
    var m = f[i].getElementsByTagName("label")[0].firstChild;
    var ch = m.checked;
    if (ch) {
      f[i].style.display = "none";
    } else {
      f[i].style.display = "block";
    }
  }
};
document.getElementById("all").onclick = function () {
  var f = document.getElementsByTagName("li");
  for (i = 0; i < f.length; i++) {
    var m = f[i].getElementsByTagName("label")[0].firstChild;
    f[i].style.display = "block";
  }
};
