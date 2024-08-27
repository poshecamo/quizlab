//  replace placeholder with the user's full name on page load
function replaceNameOnLoad() {
    const fullNamePlaceholder = document.querySelector('h3 span.text-danger'); //line 223
    const fullName = "Polina Moshenets"; 
    fullNamePlaceholder.textContent = fullName;
  }
  
  // Function to replace placeholders with the current date and email
  function replaceDateAndEmail() {
    const currentDateElement = document.querySelector('h2:nth-of-type(1)');
    const emailElement = document.querySelector('h2:nth-of-type(2)');
  
    const currentDate = new Date().toLocaleDateString(); 
    const email = "posh@posh.ca";
  
    currentDateElement.textContent = currentDate;
    emailElement.textContent = email;
  }
  
  // Function "Change my name" button click
  window.onload = function() {    
    document.getElementById('changeling').addEventListener('click', function() {
        let name;
        while (true) {
            name = prompt("what is your name?");            
            if (name && isNaN(name)) {
                document.getElementById('name-polina').textContent = name;
                break;
            } else {
                alert("Invalid input");
            }
        }
    });
    document.getElementById('date-now').textContent = getCurrentDate();
    document.getElementById('email-polina').textContent = email;
};




///////////////
  // Function to replace "xx" with the correct default ports
  function replacePorts() {
    const protocols = [
      { protocol: "HTTP", port: 80 },
      { protocol: "HTTPS", port: 443 },
      { protocol: "SSH", port: 22 },
      { protocol: "DNS", port: 53 },
    ];
  
    protocols.forEach((protocol) => {
      const protocolElement = document.querySelector(`h2 span.text-${protocol.protocol.toLowerCase()}`).parentElement.nextElementSibling;
      protocolElement.textContent = `${protocol.port} port / Layer 7`;
    });
  }
  
  // Function to handle the "How many items would you like in the list?" button click
  function dynamicList() {
    let itemCount = prompt("How many items would you like in the list? (1-10)");
  
    // Validate input
    while (isNaN(itemCount) || itemCount <= 0 || itemCount > 10) {
      alert("Please enter a valid number between 1 and 10.");
      itemCount = prompt("How many items would you like in the list? (1-10)");
    }
  
    const listContainer = document.getElementById("dynamic-list");
    listContainer.innerHTML = ""; // Clear previous list
  
    for (let i = 1; i <= itemCount; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${i}`;
      listContainer.appendChild(listItem);
    }
  }
  
  // Event listeners
  window.onload = function() {
    replaceNameOnLoad();
    replaceDateAndEmail();
    replacePorts();
  
    const changeNameButton = document.querySelector('.btn-primary');
    changeNameButton.addEventListener('click', changeName);
  
    const listButton = document.querySelector('.btn-list');
    listButton.addEventListener('click', dynamicList);
  };
  