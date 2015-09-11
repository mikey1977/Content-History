window.onload = function() {
  var ll = linkedListGenerator();


  function output() {

    document.getElementById("output").innerHTML = LinkedListGenerator();
  }

  function saveHtml() {
    var save = document.getElementById("input").value;
    document.getElementById("input").innerHTML = ll.add(input);
  }

  function dumpHtml() {
  document.getElementById("input").innerHTML = ll.remove(input);
  }
};
