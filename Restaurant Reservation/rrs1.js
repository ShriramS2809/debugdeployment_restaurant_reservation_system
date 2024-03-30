document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form values
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // You can add further validation here if needed
    
    // Construct reservation object
    var reservation = {
      date: date,
      time: time,
      guests: guests,
      name: name,
      email: email
    };
    
    // You can send this reservation object to your server using AJAX or fetch API
    
    // For demonstration purposes, we'll just log it to the console
    console.log(reservation);
    
    // Optionally, you can display a confirmation message to the user
    alert('Reservation submitted successfully!');
    
    // Reset the form
    document.getElementById('reservation-form').reset();
  });
  