let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
  let text = this.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;

  text = text.trim();

  let words = text.split(" ");
  console.log(words);

  let clearList = words.filter(function (e) {
    return e != " ";
  });

  console.log(clearList);
  document.getElementById("word").innerHTML = words.length;
});
