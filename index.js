$(".row").each((i, el) => {
  $(`<li class="chapter">${el.title}</li>`).appendTo($(".titles"));
});

$(".chapter").each((i, el) => {
  $("<ul class='paragraph'></ul>").addClass("list-margin").appendTo(el);
});

$(".row").each((i, el) => {
  const chapter = el.dataset.chapter;
  $(`.${chapter} p`).each((j, p) => {
    $(`<li>Akapit ${j + 1}</li>`)
      .addClass("bold")
      .appendTo($(".paragraph")[i]);
  });
});
// zadanie 2
$(`<table>
  <tr>
  </tr>
</table>
`).appendTo("body");

$("<th></th>").appendTo("tr");

$(".row").each((i, el) => {
  $(`<th>${el.title}</th>`).appendTo("tr");
});

$("<tr></tr>").insertAfter("tr");

$("<td>Obrazy</td>").appendTo("tr:nth-child(2)");

$("img").each((i, el) => {
  $(`<td>${el.alt}</td>`).appendTo("tr:nth-child(2)");
});

$("<tr></tr>").insertAfter("tr:nth-child(2)");

$("<td>Link</td>").appendTo("tr:nth-child(3)");

$("img").each((i, el) => {
  $(`<td>${el.src}</td>`).appendTo("tr:nth-child(3)");
});
