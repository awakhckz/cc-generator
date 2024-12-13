// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Grab radio buttons and output sections
  const votersRadio = document.getElementById("vote");
  const driversRadio = document.getElementById("drive");
  const creditRadio = document.getElementById("credit");

  const vcard = document.querySelector(".vcard");
  const dcard = document.querySelector(".dcard");
  const ccard = document.querySelector(".ccard");

  // Function to generate random IDs
  const generateRandomID = (prefix) => {
    return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  // Function to handle displaying the generated ID
  const displayGeneratedID = (type) => {
    // Hide all sections first
    vcard.style.display = "none";
    dcard.style.display = "none";
    ccard.style.display = "none";

    // Generate and display the relevant ID
    switch (type) {
      case "voters":
        vcard.textContent = `Voter ID: ${generateRandomID("VOT")}`;
        vcard.style.display = "block";
        break;
      case "drivers":
        dcard.textContent = `Driver's Licence ID: ${generateRandomID("DRV")}`;
        dcard.style.display = "block";
        break;
      case "credit":
        ccard.textContent = `Credit Card Number: ${generateRandomID("CRD")}`;
        ccard.style.display = "block";
        break;
    }
  };

  // Add event listeners for radio buttons
  votersRadio.addEventListener("change", () => displayGeneratedID("voters"));
  driversRadio.addEventListener("change", () => displayGeneratedID("drivers"));
  creditRadio.addEventListener("change", () => displayGeneratedID("credit"));
});
