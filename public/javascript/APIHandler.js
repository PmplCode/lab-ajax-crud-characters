class APIHandler {
  constructor (charactersAPI) {
    this.charactersAPI = charactersAPI;
    this.api = axios.create({
      baseURL: this.charactersAPI,
    });
  }

  getFullList () {
    return this.api.get("/");
  }

  getOneRegister (idPersonatge) {
    return this.api.get("/"+idPersonatge);
  }

  createOneRegister (personatge) {
    return this.api.post("/", personatge)
  }

  updateOneRegister (idPersonatge, personatgeActualitzat) {
    return this.api.put("/"+idPersonatge, {personatgeActualitzat})
  }

  deleteOneRegister (idPersonatge) {
    return this.api.delete("/"+idPersonatge);
  }
}