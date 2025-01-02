// Create "Get Total Price" Button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate the total price
const getSum = () => {
  // Select all price elements
  const priceElements = document.querySelectorAll(".price");
  
  // Calculate the sum of prices
  let total = 0;
  priceElements.forEach(price => {
    total += parseFloat(price.textContent) || 0; // Parse text as a number, handle invalid numbers
  });

  // Check if a total row already exists and remove it
  let existingTotalRow = document.getElementById("ans");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "ans"; // Ensures Cypress can detect it

  // Create the cell spanning both columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Span across two columns
  totalCell.style.textAlign = "right";
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append the cell to the row and add the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
