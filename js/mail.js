
// function SendMSG(e) {
//     e.preventDefault()
//       let nam_txt = document.querySelector("#name")
//       let email_txt = document.querySelector("#email")
//       let subject_txt = document.querySelector("#subject")
//       let message_txt = document.querySelector("#message")
//       let body = "Name:" + nam_txt.value + ",  " + "email:" + email_txt.value + ",  " + "subject:" + subject_txt.value +  ",  "+ "Message : " + message_txt.value
  
//   let temp = {
//     from_name : nam_txt.value,
//     to_name : "priyanka phulmante",
//     message : body
//   }
  
//   // emailjs.send('service_f3etz3t', 'template_v4x8ndu', temp)
  
//   emailjs.send('https://formsubmit.co/el/rodode','temp')
//   .then((res) => {
//     if(res.status == 200) {
//       success()
//     }else {
//       failure()
//     }
//   })
  
  
//   nam_txt.value = ""
//   email_txt.value = ""
//   subject_txt.value = ""
//   message_txt.value = ""
  
  
//   }

// document.querySelector("#form").addEventListener("submit",sendEmail());
function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "priyankaphulmante98@gmail.com",
      Password : "7186272595B8F8315A0E52829E7207630A34",
      To : 'priyankaphulmante98@gmail.com',
      From : document.querySelector("#email").value,
      Subject : "New Contact from Portfolio",
      Body : "Name: "+document.querySelector("#f_name").value+" "+document.querySelector("#l_name").value
      +"<br>Email: "+document.querySelector("#email").value
      +"<br>Phone Number: "+document.querySelector("#phone").value
      +"<br>Message: "+document.querySelector("#msg").value
  }).then(
    message => alert("Message Sent Successfully, Thank You")
  );
}
  
//   function success() {
//     let thank = document.querySelector(".msg-pop-up")
//     thank.style.display = "block"
//     setTimeout(() => {
//       thank.style.display = "none"
//     },2000)
//   }
  
//   function failure() {
//     let fail = document.querySelector(".failed-msgpop")
//     fail.style.display = "block"
//     setTimeout(() => {
//       fail.style.display = "none"
//     },2000)
//   }
  
  