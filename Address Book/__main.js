document.getElementById("filterInput").addEventListener("keyup", () => {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // console.log(filterValue);
  let ul = document.getElementById("names");
  //console.log(ul);
  let li = ul.querySelectorAll("li.collection-items");
  // console.log(li);
  li.forEach((items) => {
    let a = document.getElementsByTagName("a")[0];
    items.style.display = a.innerHTML.toUpperCase().startsWith(filterValue)
      ? "block"
      : "none";
  });
});
