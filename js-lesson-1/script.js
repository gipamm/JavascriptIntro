/*

 */
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";

var id = "container";

var el = document.getElementById(id);

for (var i = 0; i < 10; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var j = 0; j < 3; j++) {
        var col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = lorem;
        col.style.backgroundColor = "#5" + i + j * 4;
        row.appendChild(col);
    }
    el.appendChild(row);
}

