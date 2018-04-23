import axios from "axios";

export default {
  // Gets all homes
  getHomes: function() {
    return axios.get("/api/homes");
  },
  // Gets the home with the given id
  getHome: function(id) {
    return axios.get("/api/homes/" + id);
  },
  // Deletes the home with the given id
  deleteHome: function(id) {
    return axios.delete("/api/homes/" + id);
  },
  // Saves a home to the database
  saveHome: function(homeData) {
    return axios.post("/api/homes", homeData);
  }
};
