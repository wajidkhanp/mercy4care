

  $(function(){
  $('.my-date').hijriDate({
    showWeekDay: true,
    showGregDate: true,
    separator: '&nbsp;|&nbsp;',
    weekDayLang: 'en',
    hijriLang: 'en',
    gregLang: 'en',
    correction: +1
  });
});

function myFunction() {
var dt = new Date();
document.getElementById('date-time').innerHTML=dt; }    