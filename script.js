let data = [
  { id: 1, name: "vishal", email: "vishal@gmail.com" },
  { id: 2, name: "jaydeep", email: "jaydeep@gmail.com" },
];

function readAll() {
  var tbdata = document.querySelector(".table_data");
  var elements = "";
  data.map(
    (d) =>
      (elements += `<tr>
        <td>${d.name}</td>
        <td>${d.email}</td>
        <td>
            <button onclick={edit(${d.id})}>Update</button>
            <button onclick={delet(${d.id})}>Delete</button>
        </td>
    </tr>`)
  );
  tbdata.innerHTML = elements;
}

function createForm() {
  document.querySelector(".form_create").style.display = "block";
  document.querySelector(".addbtn").style.display = "none";
}

function add() {
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;

  var newobj = { id: 3, name, email };
  data.push(newobj);

  document.querySelector(".form_create").style.display = "none";
  document.querySelector(".addbtn").style.display = "block";
  readAll();
}

function edit(id) {
  document.querySelector(".update_form").style.display = "block";
  document.querySelector(".addbtn").style.display = "none";

  var updateobj = data.find((f) => f.id === id);
  document.querySelector(".update_id").value = updateobj.id;
  document.querySelector(".uname").value = updateobj.name;
  document.querySelector(".uemail").value = updateobj.email;
}

function update() {
  var id = parseInt(document.querySelector(".update_id").value);
  var name = document.querySelector(".uname").value;
  var email = document.querySelector(".uemail").value;

  var updateobj = { id, name, email };

  var index = data.findIndex((f) => f.id === id);
  data[index] = updateobj;

  document.querySelector(".update_form").style.display = "none";
  document.querySelector(".addbtn").style.display = "block";

  readAll();
}

function delet(id) {
  var newdata = data.filter((f) => f.id !== id);
  data = newdata;
  readAll();
}
