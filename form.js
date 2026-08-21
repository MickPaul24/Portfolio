document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent = "Message sent successfully!!";
      form.reset();
    } else {
      status.textContent = "Oops! Submission failed.";
    }
  });
});

//smoothscroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});
const todoElements = document.querySelectorAll(".projectOne");
todoElements.forEach((el) => observer.observe(el));

//smoothscroll animation
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});
const todoElements2 = document.querySelectorAll(".stat1");
todoElements2.forEach((el) => observer2.observe(el));
