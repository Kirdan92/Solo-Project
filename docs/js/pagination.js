/*Pagination*/
var paginationContainer = document.querySelector(".pagination-container");
var pagination = document.querySelector(".pagination");
var paginationChildren = pagination.getElementsByTagName("*");


 document.addEventListener("DOMContentLoaded", function(event) {
  callPaginations();
  });
window.onresize = function(event) {
  callPaginations();
};

function displayPagintaions(num) {
   for(var i = 0; i < num; i++) {
      paginationChildren[i].style.display = "inline-block";
    }
};

function callPaginations() {
 if(paginationContainer.offsetWidth <= 525) {
      for(var i = 2 ; i < 11; i++) {
        paginationChildren[i].style.display = "none";
      }
      if(paginationContainer.offsetWidth <= 180){
      } else if(paginationContainer.offsetWidth <= 230){
          displayPagintaions(4);
      } else if(paginationContainer.offsetWidth <= 300){
          displayPagintaions(5);
      } else if(paginationContainer.offsetWidth <= 315){
          displayPagintaions(6);
      } else if(paginationContainer.offsetWidth <= 355){
          displayPagintaions(7);
      } else if(paginationContainer.offsetWidth <= 430){ 
          displayPagintaions(8);
      } else if(paginationContainer.offsetWidth <= 445){ 
          displayPagintaions(9);
      } else if(paginationContainer.offsetWidth <= 485){ 
          displayPagintaions(10);
      } else if(paginationContainer.offsetWidth <= 525){ 
          displayPagintaions(11)
      } else {
         
      }
  } else {
      for(var i = 2; i < 11; i++) {
        paginationChildren[i].style.display = "inline-block";
       }
  }
};