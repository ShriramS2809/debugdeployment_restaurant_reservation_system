document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    
    var reservation = {
      date: date,
      time: time,
      guests: guests,
      name: name,
      email: email
    };
    

    
   
    console.log(reservation);
    
    
    alert('Reservation submitted successfully!');
    
    
    document.getElementById('reservation-form').reset();
  });
  
