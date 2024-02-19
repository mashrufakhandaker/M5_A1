// Initialize total seats
//let totalSeats = 8;

// Function to update total seats count
//function updateTotalSeats() {
  //document.getElementById('total-seats').textContent = totalSeats;
//}

// Function to handle seat selection
//function selectSeat() {
  //totalSeats--;
  ///updateTotalSeats();
//}

// Generate bus seats dynamically (you can replace this with your own logic)
//function generateBusSeats() {
  //const busSeatsContainer = document.querySelector('.bus-seats');
  //for (let i = 1; i <= totalSeats; i++) {
    //const seat = document.createElement('div');
    //seat.textContent = `Seat ${i}`;
    //seat.classList.add('seat');
   // seat.addEventListener('click', selectSeat);
   // busSeatsContainer.appendChild(seat);
 // }
//}

// Initialize
///updateTotalSeats();
//generateBusSeats();

//add-btn is class of all seats  add buttons in the HTML file
//var btnAdd=document.getElementsByClassName("add-btn");
const allBtn = document.getElementsByClassName("add-btn");
let counnt = 0;
for(const btn of allBtn){
  btn.addEventListener( "click", function(e){
    counnt = counnt+1;
    //seat count change 
    //setInnertext("seat-count", counnt);
    document.getElementById("seat-count").innerText = counnt;
})  }; //seat-count is id for seat  number show on web page

//id wala tag er valu chage korbe and inner text change korbe
function setInnertext(id,value){
  document.getElementById(id).innerText = value;

}