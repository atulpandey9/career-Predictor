const ranges = document.querySelectorAll('.range');
const button = document.querySelector('.btn');
const result = document.getElementById('result');

button.addEventListener("click", () => {
  let total = 0;

  ranges.forEach(range => {
    total += parseInt(range.value); 
  });

 
  let message = "";

  if (total <= 200) {
    message = "Tu abhi bhi confused hai... Chai peeke soch! ☕😵";
  } else if (total > 200 && total <= 400) {
    message = "Naukri kar le bhai, Sharma ji ke bete ne bhi wahi kiya hai! 🧑‍💼📈";
  } else if (total > 400 && total <= 500) {
    message = "Freelancer ban ja! Apna time aayega 💻😎";
  } else if (total > 500 && total <= 800) {
    message = "Baba ban ja! Ashram khol le... Shanti milegi 🧘‍♂️🌿";
  } else if (total > 800 && total < 950) {
    message = "Startup ka sapna sach hoga... bas funding mil jaaye! 🚀💸";
  } else if (total >= 950) {
    message = "Pitaji ameer hai, tu toh Travel Blogger ban ja! ✈️📸";
  } else {
    message = "Kuch bhi kar le bhai, par shaadi se pehle career set kar le! 😂💍";
  }

  result.textContent = message;
  console.log("Total Score:", total);
});
