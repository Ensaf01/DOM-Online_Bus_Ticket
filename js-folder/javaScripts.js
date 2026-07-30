
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

}
let count = 0;
let message = "";
function setBooking(element) {
  
  //select previous now want unselect
  let alreadySelected=element.classList.contains('bg-green-600');
  if(alreadySelected==true){
    element.classList.remove('bg-green-600');
    count=count-1;
    const totalSeatCount = document.getElementById('seat_count');
    totalSeatCount.innerText = count;
    message="";
  }
  else{
    if ( count < 4) {
    element.classList.add('bg-green-600');
    count = count + 1;
    const totalSeatCount = document.getElementById('seat_count');
    totalSeatCount.innerText = count;
    // now show the seat in display add comment

    console.log(count);
  }
  else {
    message = "you can not select more then 4 seat";
  }


  }
  
document.getElementById('display-message').innerText = message;



}




