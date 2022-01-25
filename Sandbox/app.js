document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // Get response text
      const customer = JSON.parse(this.responseText);

      document.getElementById('customer').innerHTML = 
      `<ul>
        <li>Id: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      `
    }
  }

  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // Get response text
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(customer => {
        output += 
        `<ul>
          <li>Id: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `;
      });

      document.getElementById('customers').innerHTML = output;

    }
  }

  xhr.send();
}