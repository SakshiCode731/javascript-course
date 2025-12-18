let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + "<h1> Hello World! </h1>"

let div = document.createElement("div");
div.innerHTML = "<h1> Hello World! </h1>";
// a.appendChild(div);  // inserts at the end
// a.append(div);  // inserts at the end
// a.prepend(div); // inserts at the beginning
// a.before(div); // inserts before the element
// a.after(div); // inserts after the element
a.replaceWith(div); // replaces the element