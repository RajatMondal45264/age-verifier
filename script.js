//  function verifyAge() {
//       const age = Number(document.getElementById("age").value);
//       const output = document.getElementById("output");

//       if (isNaN(age) || age < 0) {
//         output.innerText = "Please enter a valid age!";
//         output.style.color = "red";
//       } else if (age < 18) {
//         output.innerText = "You are underage 🚫";
//         output.style.color = "red";
//       } else {
//         output.innerText = "You are eligible ✅";
//         output.style.color = "green";
//       }
//     }

 function verifyAge() {
      const age = document.getElementById("age").value;
      const result = document.getElementById("output");

      if (isNaN(age) || age === "") {
        result.textContent = "Please enter a valid number!";
        result.style.color = "black";
        document.body.style.backgroundColor = "white";
        return;
      }

      if (age >= 18) {
        result.textContent = "You are eligible ✅";
        result.style.color = "green";
        document.body.style.backgroundColor = "#d4edda"; // light green
      } else {
        result.textContent = "You are not eligible ❌";
        result.style.color = "red";
        document.body.style.backgroundColor = "#f8d7da"; // light red
      }
    }