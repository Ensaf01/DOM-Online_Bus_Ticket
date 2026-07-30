
// First function for click by ticket

function buy_tickets() {
  const getTicketSectionID = document.getElementById("ticket-section");
  getTicketSectionID.classList.remove('hidden');
  if (getTicketSectionID) {
    // 3. Scroll smoothly to the chosen element
    getTicketSectionID.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  const getBannerImageId = document.getElementById("banner-section");
  getBannerImageId.classList.add("hidden");

  // after click buy ticket ,seat count set 0
  const totalSeatCount = document.getElementById('seat_count');
  totalSeatCount.innerText = 0;

  const deafultTicket = document.getElementById('default-show-ticket_ID');
  deafultTicket.classList.add('hidden');

}



// second function off ticket 

// step-1 select the seat and unselected seat

let count = 0;
let message = "";
function setBooking(element) {
  //select previous now want unselect
  let alreadySelected = element.classList.contains('bg-green-600');
  if (alreadySelected == true) {
    element.classList.remove('bg-green-600');
    count = count - 1;
    const totalSeatCount = document.getElementById('seat_count');
    totalSeatCount.innerText = count;

    message = "";
  }
  else {
    if (count < 4) {
      element.classList.add('bg-green-600');
      count = count + 1;
      const totalSeatCount = document.getElementById('seat_count');
      totalSeatCount.innerText = count;
      console.log(count);

    }

    else {
      message = "you can not select more then 4 seat";
    }


  }
  document.getElementById('display-message').innerText = message;

  //step-2

  //  now show the seat in display add comment
  // find the id, where want to show selected seat

  const container = document.getElementById('set_selected_seat');
  container.innerHTML = "";
  // find the bg-green seat
  const activeSeats = document.querySelectorAll('.bg-green-600'); //remember do not use bg-green-600 class without seat color
  let totalAmount = 0;
  let price = 500;
  activeSeats.forEach(function (activeSeat) { //loop 

    let seatName = activeSeat.innerText;
    totalAmount += price;
    const row = document.createElement('div');
    row.className = "flex justify-between";// for css

    row.innerHTML = `
<p> ${seatName}</p>
<p> Economy</p>
<p ${price}> 500</p>
`;
    container.appendChild(row);

  });

//step-3

//  set total amount 
  //get id where i want to show total amount 
  const display = document.getElementById('total-amountId');
  //set amount
  display.innerText = totalAmount;
  console.log(totalAmount);

//step 4

  // coupon button disable enable

  const applybtn = document.getElementById('applt-btn');
  if (count == 4) {
    applybtn.disabled = false;


  }
  else {
    applybtn.disabled = true;
  }


// step -5 

// set up grand total amount
const grandDiscountElement = document.getElementById('grand_tottal_after_discountID');
  if (grandDiscountElement) {
    grandDiscountElement.innerText = totalAmount;
  }


}

// //coupon id and code = Couple20 ,NEW15 
  function applybutton() {
  const inputId = document.getElementById('input_coupon');
  const inputCouponID = inputId.value.trim();
  // const couponId1 = document.getElementById('NEW15');
  // const couponCode1 = couponId1.innerText;
  const couponId1 = document.getElementById('NEW15').innerText.trim();

  // const couponId2 = document.getElementById('Couple20');
  // const couponCode2 = couponId2.innerText;
   const couponId2 = document.getElementById('Couple20').innerText.trim();

   const totalAmountGetId=document.getElementById('total-amountId');
   const totalTaka=totalAmountGetId.innerText
   console.log("total taka: ",totalTaka);
   let grandTotal=totalTaka;
   console.log("grandTotal: ",totalTaka)
   console.log("Original Total before discount: ",grandTotal);

  if (couponId1 === inputCouponID) {
    
      grandTotal =totalTaka-(totalTaka * .15) ;
      
      console.log("15% Discount Applied. New Grand Total:", grandTotal);

    

  }
  else if (couponId2 === inputCouponID) {
    
       grandTotal =totalTaka-(totalTaka *(.20)) ;
      
      console.log("20% Discount Applied. New Grand Total:", grandTotal);

  }
  else {
    console.log("Invalid Coupon Entered!");
  }


  const grandDiscount = document.getElementById('grand_tottal_after_discountID');
      if (grandDiscount) {
    grandDiscount.innerText = grandTotal;
  }


  }




