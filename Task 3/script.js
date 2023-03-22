// Test 2 
// Get all elements that can open a modal
var modalButtons = document.querySelectorAll(".open-modal");

// Loop through the modal buttons and add event listeners
modalButtons.forEach(function (btn) {
  var targetModal = document.querySelector(btn.getAttribute("data-target"));
  var closeBtn = targetModal.querySelector(".close");

  // When the user clicks the button, show the modal
  btn.addEventListener("click", function () {
    targetModal.style.display = "block";
  });

  // When the user clicks the close button, hide the modal
  closeBtn.addEventListener("click", function () {
    targetModal.style.display = "none";
  });

  // When the user clicks anywhere outside the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == targetModal) {
      targetModal.style.display = "none";
    }
  });
});


//  task three






const chat = document.querySelector('#chat-active');
const need = document.querySelector('#need-active');
const attachments = document.querySelector('#attachments-active');

const loadData = () => {

  fetch('https://api.npoint.io/8e70e280acbee2b259fc')
    .then(response => response.json())
    .then(data => {
      const user = data;
      chat.innerHTML = user.chat;
      need.innerHTML = user.active;
      attachments.innerHTML = user.attachement;
    })
    .catch(error => console.error(error));
}
loadData();
