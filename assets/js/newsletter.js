
    document.querySelector('.newsletter-section form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = this.email.value;
    // Add your AJAX form submission logic here
    alert('Thank you for subscribing, ' + email + '!');
    this.reset();
});
