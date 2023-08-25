 // geeting everything in page ready before excuting any function
  $(document).ready(function () {
  // getting save Btn to do function on clicking 
  $('.saveBtn').on('click', function() {
    // setting value of text area 
    var value = $(this).siblings('.description').val();
    // refering to time of each hour to it's save Btn
    var time = $(this).parent().attr('id');
    // saving value of text area of each time to local storage
    localStorage.setItem(time, value);
  })
  // setting class(colors) for each hour depending on time
  function hourUpdate() {
    // setting current time
    var now = dayjs();
    var currentHour = now.hour();
    // getting each div time by it's id
    $('.time-block').each(function () {
      var hourBlock = parseInt($(this).attr('id'));
      // conditions for past, present & future time
      if (hourBlock < currentHour) {
        $(this).addClass('past');
      } else if (hourBlock === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
  });
  }

  hourUpdate();
  // getting to update time every 20s
  setInterval(hourUpdate, 20000);

  //code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements by;
  // creating an array of each div by it's id
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  // looping through all divs text area values and getting local storage value of each one
  for (var i = 0; i < hours.length; i++) {
    $('#' + hours[i] + ' .description').val(localStorage.getItem(hours[i].toString()));
  }

 //  code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('ddd, MMM D, YYYY'));
});
