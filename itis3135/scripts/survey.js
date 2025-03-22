function validateRequiredFields(form) {
    const requiredFields = ["name", "mascot", "imageCaption", "personalBackground", "professionalBackground", "academicBackground", "webBackground", "computerPlatform"];
    for (let id of requiredFields) {
      const field = form.querySelector(`#${id}`);
      if (!field || field.value.trim() === "") {
        alert(`Please fill out the "${id}" field.`);
        field.focus();
        return false;
      }
    }
    const imageInput = form.querySelector("#image");
    if (!imageInput || imageInput.files.length === 0) {
      alert("Please upload an image (PNG or JPG).");
      imageInput.focus();
      return false;
    }
    const file = imageInput.files[0];
    if (!(file.type === "image/png" || file.type === "image/jpeg")) {
      alert("Image must be a PNG or JPG file.");
      return false;
    }
    const agreeCheckbox = form.querySelector("#agreeCheckbox");
    if (!agreeCheckbox || !agreeCheckbox.checked) {
      alert("You must agree to the statement before submitting.");
      return false;
    }
    return true;
  }
  
  function gatherFormData(form) {
    const formData = new FormData(form);
    const courseFields = form.querySelectorAll(".courseField");
    const courses = [];
    courseFields.forEach((field) => {
      if (field.value.trim() !== "") {
        courses.push(field.value.trim());
      }
    });
    return {
      name: formData.get("name"),
      mascot: formData.get("mascot"),
      imageFile: formData.get("image"),
      imageCaption: formData.get("imageCaption"),
      personalBackground: formData.get("personalBackground"),
      professionalBackground: formData.get("professionalBackground"),
      academicBackground: formData.get("academicBackground"),
      webBackground: formData.get("webBackground"),
      computerPlatform: formData.get("computerPlatform"),
      funnyThing: formData.get("funnyThing"),
      anythingElse: formData.get("anythingElse"),
      courses: courses
    };
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (!validateRequiredFields(form)) return;
    const data = gatherFormData(form);
    const reader = new FileReader();
    reader.onload = function (e) {
      const resultDiv = document.getElementById("result");
      let html = `<h2>${data.name}'s Introduction Page</h2>`;
      html += `<p><strong>Mascot:</strong> ${data.mascot}</p>`;
      html += `<img src="${e.target.result}" alt="${data.imageCaption}" style="max-width:200px; display:block; margin: 1em 0;">`;
      html += `<p><em>${data.imageCaption}</em></p>`;
      html += `<p><strong>Personal Background:</strong> ${data.personalBackground}</p>`;
      html += `<p><strong>Professional Background:</strong> ${data.professionalBackground}</p>`;
      html += `<p><strong>Academic Background:</strong> ${data.academicBackground}</p>`;
      html += `<p><strong>Background in Web Development:</strong> ${data.webBackground}</p>`;
      html += `<p><strong>Primary Computer Platform:</strong> ${data.computerPlatform}</p>`;
      if (data.courses.length > 0) {
        html += `<p><strong>Courses Currently Taking:</strong></p><ul>`;
        data.courses.forEach((course) => {
          html += `<li>${course}</li>`;
        });
        html += `</ul>`;
      }
      html += `<p><strong>Funny thing:</strong> ${data.funnyThing || "N/A"}</p>`;
      html += `<p><strong>Anything else:</strong> ${data.anythingElse || "N/A"}</p>`;
      html += `<p><a href="#" onclick="resetForm()">Reset and Try Again</a></p>`;
      resultDiv.innerHTML = html;
      form.style.display = "none";
    };
    reader.readAsDataURL(data.imageFile);
  }
  
  function resetForm() {
    const form = document.getElementById("byoForm");
    form.style.display = "block";
    form.reset();
    document.getElementById("coursesContainer").innerHTML = "";
    document.getElementById("result").innerHTML = "";
  }
  
  function addCourseField() {
    const coursesContainer = document.getElementById("coursesContainer");
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "0.5em";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "course";
    input.placeholder = "Enter course name";
    input.classList.add("courseField");
    input.style.marginRight = "0.5em";
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "#C2185B";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "4px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onclick = function () {
      coursesContainer.removeChild(wrapper);
    };
    wrapper.appendChild(input);
    wrapper.appendChild(deleteBtn);
    coursesContainer.appendChild(wrapper);
  }  