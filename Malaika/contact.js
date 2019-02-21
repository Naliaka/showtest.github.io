// Initialize Firebase (ADD YOUR OWN DATA)
  // Initialize Firebase
  var config = {
    apiKey: "",
    authDomain: "contact-form-9bd61.firebaseapp.com",
    databaseURL: "https://contact-form-9bd61.firebaseio.com",
    projectId: "contact-form-9bd61",
    storageBucket: "contact-form-9bd61.appspot.com",
    messagingSenderId: "364693131995"
  };
  firebase.initializeApp(config);


  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e){
    e.preventDefault();

    console.log(123)

    // Get values
    var name = getInputVal('name');
    var country = getInputVal('country');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, country, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
  }

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, country, email, phone, message){
    var newMessageRef = messagesRef.push(); newMessageRef.set({
      name: name,
      country:country,
      email:email,
      phone:phone,
      message:message
    });
  }
