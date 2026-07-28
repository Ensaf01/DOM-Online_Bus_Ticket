
function  buy_tickets(){
    const getTicketSectionID=document.getElementById("ticket-section");
    getTicketSectionID.classList.remove('hidden'); 
     if (getTicketSectionID) {
    // 3. Scroll smoothly to the chosen element
    getTicketSectionID.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
    const getBannerImageId=document.getElementById("banner-section");
    getBannerImageId.classList.add("hidden");

}

 