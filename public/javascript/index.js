const charactersAPI = new APIHandler('http://localhost:8000/characters');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(res => {
      console.log("res.data: ", res.data)
    })
    .catch(err => {
      console.log("err: ", err)
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('character-id1').value)
    .then(res => {
      console.log("res.data.findOne: ", res.data)
    })
    .catch(err => {
      console.log("err: ", err)
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('character-id-delete').value)
    .then(res => {
      console.log("res.data.findOne-And Delete: ", res.data)
    })
    .catch(err => {
      console.log("err: ", err)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
      "name": document.getElementById("characterNameEdit").value,
      "Occupation": document.getElementById("characterOccupationEdit").value,
      "Weapon": document.getElementById("characterWeaponEdit").value,
      "Cartoon": document.getElementById("characterCartoonEdit").value
    }
    charactersAPI.updateOneRegister(document.getElementById("characterIdEdit").value, data, after="true")
    .then(resp => {
      console.log("resp edit character ", resp)
    })
    .catch(err => {
      console.log("err creacio: ", err)
  });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const data = {
      "name": document.getElementById("nameCreate").value,
      "occupation": document.getElementById("occupationCreate").value,
      "cartoon": document.getElementById("cartoonCreate").checked,
      "weapon": document.getElementById("weaponCreate").value
    }
    console.log("data: ", data)
    charactersAPI.createOneRegister(data)
    .then(resp => {
      console.log("res.data Create: ", resp.data)
    })
    .catch(err => {
      console.log("err creacio: ", err)
    })
  });
});
