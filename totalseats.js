const seats = document.querySelectorAll('.btn');
let seatsArray = [];
let availableSeats = 40;
let selectedSeats = 0;
let Total = 0;
let GrandTotal = 0;
for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (!seatsArray.includes(seat.innerText)) {
            if (seatsArray.length < 4) {
                seatsArray.push(seat.innerText);
                seat.style.backgroundColor = 'limegreen';
                setAvailableSeats();
                ticketlist();
                sum();

            }
            else {
                alert('You cant add more than 4 seat');
            }
        }
        else {
            seat.style.backgroundColor = '';
            const arraytext = seat.innerText;
            seatsArray = seatsArray.filter(i => i != arraytext);
            setAvailableSeats();
            ticketlist();
            sum();
        }
        console.log(seatsArray);
        console.log(seat.innerText);
    })
}
console.log(seats);

setAvailableSeats();
function setAvailableSeats() {
    document.getElementById('AvailableSeats').innerText = availableSeats - seatsArray.length;
    document.getElementById('selectedSeats').innerText = seatsArray.length;
}
ticketlist();
function ticketlist() {
    document.getElementById('ticketList').innerHTML = ``;
    for (const element of seatsArray) {
        const div = document.createElement('div');
        div.setAttribute('class', 'flex justify-between')
        div.innerHTML = `<p>C2</p>
    <p>Economy</p>
    <p>550</p>`;
        div.firstChild.innerText = element;
        document.getElementById('ticketList').appendChild(div);
    }
}

sum(); function sum() {
    Total = 550 * seatsArray.length;
    document.getElementById('total-price').innerText = Total;

    const gTotal = document.getElementById('grandPrice-total');
    gTotal.innerText = Total;

    document.getElementById('coupon').addEventListener('keyup', function (event) {
        const text = event.target.value;
        const couponBtn = document.getElementById('coupon-btn');
        if (text === 'NEW15') {
            couponBtn.removeAttribute('disabled');
            document.getElementById('coupon-btn').addEventListener('click', function (event) {
                const gTotal = document.getElementById('grandPrice-total');
                GrandTotal = Total * 0.85;
                gTotal.innerText = GrandTotal;
                document.getElementById('label').classList.add('hidden');
            })

        }
        else if (text === 'Couple 20') {
            couponBtn.removeAttribute('disabled');
            document.getElementById('coupon-btn').addEventListener('click', function (event) {
                const gTotal = document.getElementById('grandPrice-total');
                GrandTotal = Total * 0.80;
                gTotal.innerText = GrandTotal;
                document.getElementById('label').classList.add('hidden');
            })
        }
        else {
            couponBtn.setAttribute('disabled', true);
        }
    })
}



function nextbut() {

    const homeSec = document.getElementById('footer');
    homeSec.classList.add('hidden');

    const homeSec1 = document.getElementById('P-Ticket');
    homeSec1.classList.add('hidden');

    const homeSec11 = document.getElementById('best-offer');
    homeSec11.classList.add('hidden');

    const homeSec111 = document.getElementById('header');
    homeSec111.classList.add('hidden');

    const plySec = document.getElementById('success-msg');
    plySec.classList.remove('hidden');

}function butbut() {

    const homeSec = document.getElementById('foot');
    homeSec.classList.remove('hidden');

    const homeSec1 = document.getElementById('phtravels');
    homeSec1.classList.remove('hidden');

    const homeSec11 = document.getElementById('best-offer');
    homeSec11.classList.remove('hidden');

    const homeSec111 = document.getElementById('header');
    homeSec111.classList.remove('hidden');

    const plySec = document.getElementById('success');
    plySec.classList.add('hidden');

}