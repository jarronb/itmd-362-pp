$.noConflict();
(function($) {
  $('#signup-form').on('submit', function(e) {
    e.preventDefault(); //No id value in url
    var x = new Date(document.getElementById('dob').value); //get person's dob
    var dob = x.getFullYear();
    var current_date = new Date(); //get current date
    var today = current_date.getFullYear(); //get the current year
    var age = today - dob; //subtract the peron's dob from current year
    console.log(age);

    if(age < 18) {
      $('#form-item-dob').toggleClass('age-warning');
      $('#form-item-dob').prepend('<span class="warning">You need to be 18 years old or older.</span>');
      $('#dob').css('background', '#D24D57')
    }
    if (age >= 18) {
      $('#signup-form').append('Form Submitted Succesfully');
    }

});
})(jQuery);
