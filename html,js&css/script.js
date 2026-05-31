      // script.js
      alert("Welcome to CheckIT! Please enter the student's name and mark to see the result.");
      const form = document.getElementById("studentForm");
        const resultDiv = document.getElementById("result");
        const studentList = document.getElementById("studentList");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("studentName").value.trim();
            let mark = parseInt(document.getElementById("studentMark").value);

            // Validation
            if (name === "") {
                resultDiv.textContent = "Please enter a student name.";
                return;
            }

            if (isNaN(mark) || mark < 0 || mark > 100) {
                resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
                return;
            }

            let grade = "";
            let result = "";

            // Grading Scale
            if (mark >= 80) {
                grade = "Distinction";
                result = "PASS";
            } else if (mark >= 65) {
                grade = "Merit";
                result = "PASS";
            } else if (mark >= 50) {
                grade = "Pass";
                result = "PASS";
            } else {
                grade = "Fail";
                result = "FAIL";
            }

            // Display instant result
            resultDiv.textContent =
                `${name} scored ${mark}% - Grade: ${grade} (${result})`;

            // Add student to table
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>${mark}</td>
                <td>${grade}</td>
                <td>${result}</td>
            `;

            studentList.appendChild(row);

            // Clear form
            form.reset();
        });