// add javascript here
document.getElementById("contactBtn")?.addEventListener("click", () => {
    const contact = document.getElementById("contactText");
    contact.toggleAttribute("hidden");
  });
document.getElementById("myButton")?.addEventListener("click", () => {
    const nothing = document.getElementById("myBtnText");
    nothing.toggleAttribute("hidden");
  });