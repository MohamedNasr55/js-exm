let usersArray = [];
function number() {
  let nuberUser = Number(prompt("Enter Number of User"));
  for (let i = 0; i < nuberUser; i++) {
    addUser();
  }
}
function addUser() {
  let user = {
    id: Number(prompt("Enter your id")),
    balnce: Number(prompt("Enter Number of balnce")),
    name: prompt("Enter your name"),
  };
  usersArray.push(user);
}
number();
console.table(usersArray);

let editUser = function () {
  let id = Number(prompt("Search by id"));
  let newBalnce = Number(prompt("Enter new balnce"));
  let index = usersArray.findIndex((item) => item.id == id);
  usersArray[index].balnce = newBalnce;
};
editUser();
console.table(usersArray);

let deleteUser = function () {
  let id = Number(prompt("delete by id"));
  let index = usersArray.findIndex((item) => item.id == id);
  usersArray.splice(index, 1);
};
deleteUser();
console.table(usersArray);
