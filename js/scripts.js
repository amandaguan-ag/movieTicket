//Business Logic
function Ticket(movie, time, age) {
    this.movie = movie;
    this.time = time;
    this.age = age;
    this.cost = this.calculateCost();
    }
    
Ticket.prototype.calculateCost = function () {
    let baseCost = 10;
    if (this.movie === "Fast & Furious 20") {
    baseCost += 2;
    }
    if (this.time === "3pm") {
    baseCost -= 1;
    }
    if (this.age === "senior") {
    baseCost *= 0.5;
    } else if (this.age === "junior") {
    baseCost *= 0.75;
    }
    return baseCost;
};
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
};    
    
window.addEventListener("load", function () {
    const movieSelect = document.querySelector("#movie-select");
    movieSelect.addEventListener("submit", handleFormSubmission);
});