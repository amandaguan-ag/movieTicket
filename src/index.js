import Ticket from "./ticket.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

//UI Logic    
function showTicket(newTicket) {
  //<== pass newTicket into the ()
  const ticket = document.querySelector(".ticket");
  ticket.removeAttribute("class");
  document.querySelector("#movie-name").innerText = newTicket.movie;
  document.querySelector("#movie-time").innerText = newTicket.time;
  document.querySelector("#movie-cost").innerText = newTicket.cost;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedMovie = document.querySelector("#movie").value;
  let inputtedTime = document.querySelector("#time").value;
  let inputtedAge = document.querySelector("#age").value;
  let newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
  showTicket(newTicket);
}  
    
window.addEventListener("load", function () {
  const movieSelect = document.querySelector("#movie-select");
  movieSelect.addEventListener("submit", handleFormSubmission);
});