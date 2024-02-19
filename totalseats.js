// Initialize total seats
let totalSeats = 8;

// Function to update total seats count
function updateTotalSeats() {
  document.getElementById('total-seats').textContent = totalSeats;
}

// Function to handle seat selection
function selectSeat() {
  totalSeats--;
  updateTotalSeats();
}

// Generate bus seats dynamically (you can replace this with your own logic)
function generateBusSeats() {
  const busSeatsContainer = document.querySelector('.bus-seats');
  for (let i = 1; i <= totalSeats; i++) {
    const seat = document.createElement('div');
    seat.textContent = `Seat ${i}`;
    seat.classList.add('seat');
    seat.addEventListener('click', selectSeat);
    busSeatsContainer.appendChild(seat);
  }
}

// Initialize
updateTotalSeats();
generateBusSeats();
