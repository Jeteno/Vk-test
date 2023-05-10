function changeText(ev) {
   try {
      if( 
         document.getElementById("tower").value != "" 
         && document.getElementById("floor").value != ""
         && document.getElementById("meetingRoom").value != ""
         && document.getElementById("date").value != ""
         && document.getElementById("popup__text").value != ""
         && ev.getAttribute('data-show') === "true") {
          ev.innerText = "Отправлено";
          ev.setAttribute('data-show', "false"); 
      }
      else {
          ev.innerText = "Отправить"
          ev.setAttribute('data-show', "true"); 
      }
   } catch (error) {
      console.log(error);
   }
};

function clearInput() {
   try {
      document.getElementById("tower").value = "";
      document.getElementById("floor").value = "";
      document.getElementById("meetingRoom").value = "";
      document.getElementById("date").value = "";
      document.getElementById("popup__text").value = "";

      const send = document.getElementById("sendButton");
      if (send.getAttribute('data-show') === "false") {
         send.innerText = "Отправить"
         send.setAttribute('data-show', "true");    
      }
   } catch (error) {
      console.log(error);
   }
}

function openPopup() {
   try {
      let popup = document.getElementById("popup");
      popup.classList.toggle("display");
   
      let openBtn = document.getElementById("popup__open");
      openBtn.classList.toggle("display"); 
   } catch (error) {
      console.log(error);
   }
};

function closePopup() {
   try {
      let popup = document.getElementById("popup");
      popup.classList.toggle("display");
   
      let openBtn = document.getElementById("popup__open");
      openBtn.classList.toggle("display");
   
      clearInput()
   } catch (error) {
      console.log(error);
   }
};

document.forms.publish.onsubmit = function() {
   let tower = this.tower.value;
   let floor = this.floor.value;
   let meetingRoom =this.meetingRoom.value;
   let date = this.date.value;
   let message = this.message.value;

   const obj = {tower, floor, meetingRoom, date, message};
   let json = JSON.stringify(obj);
   
   console.log(json);
   return false;

 };
