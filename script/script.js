function changeText(ev) {
   try {
      const isCanBeSended = document.getElementById("tower").value !== "" 
         && document.getElementById("floor").value !== ""
         && document.getElementById("meetingRoom").value !== ""
         && document.getElementById("date").value !== ""
         && document.getElementById("timeWith").value !== ""
         && document.getElementById("timeBefor").value !== ""
         && document.getElementById("popup__text").value !== ""
         && ev.getAttribute('data-show') === "true";

      if (isCanBeSended) {
            ev.innerText = "Отправлено";
            ev.setAttribute('data-show', "false"); 
      } else {
         ev.innerText = "Отправить";
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
      document.getElementById("timeWith").value = "";
      document.getElementById("timeBefor").value = "";
      document.getElementById("popup__text").value = "";

      const send = document.getElementById("sendButton");

      if (send.getAttribute('data-show') === "false") {
         send.innerText = "Отправить";
         send.setAttribute('data-show', "true");    
      }
   } catch (error) {
      console.log(error);
   }
}

function openPopup() {
   try {
      const popup = document.getElementById("popup");
      popup.classList.toggle("display");
   
      const openBtn = document.getElementById("popup__open");
      openBtn.classList.toggle("display"); 
   } catch (error) {
      console.log(error);
   }
};

function closePopup() {
   try {
      const popup = document.getElementById("popup");
      popup.classList.toggle("display");
   
      const openBtn = document.getElementById("popup__open");
      openBtn.classList.toggle("display");
   
      clearInput();
   } catch (error) {
      console.log(error);
   }
};

document.forms.publish.onsubmit = function() {
   const send = document.getElementById("sendButton");

   if (send.getAttribute('data-show') === "false") {
      const tower = this.tower.value;
      const floor = this.floor.value;
      const meetingRoom =this.meetingRoom.value;
      const date = this.date.value;
      const timeWith = this.timeWith.value;
      const timeBefor = this.timeBefor.value;
      const message = this.message.value;
   
      const obj = {tower, floor, meetingRoom, date, timeWith, timeBefor, message};
      const json = JSON.stringify(obj);
      
      console.log(json);   
   } else {
      console.log("Данные уже отправлены");
   }

   return false;
 };