let now = new Date();
console.log( now ); // shows current date/time
let Sept07_2022 = new Date(0);
console.log(Sept07_2022);
let Jan10_2022 = new Date(24*3600*1000);
console.log(Jan10_2022);


//local time zone v/s UTC
// current date
let date = new Date();

// the hour in your current time zone
alert( date.getHours() );
alert( new Date().getTimezoneOffset() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date.getUTCHours() );



//task1-create a date-Feb 20,2012,3:12am
let newdate = new Date(2012,1,20,3,12,0);
console.log(newdate);

//task2-show a weekday
let dates = new Date(2012, 0, 3);  // 3 Jan 2012
function getWeekDay(date){
    let days =['SU','MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[dates.getDay()];
}
console.log( getWeekDay(dates) );        // should output "TU"

//European weekday
function getLocalDay(date){
    let day =date.getDay();
    if(day==0){
        day=7;
    }
    return day;
}
console.log(dates);


//task3- which day of month was many days ago?
function getLastDayOfMonth(year, month){
    
let date = new Date(year, month + 1, 0);//we pass 0 because one day before 1st day of month,means last day of previous month..so we add 1 to the month
return date.getDate();
}
console.log(getLastDayOfMonth(2012,0));
console.log(getLastDayOfMonth(2016,5));
console.log(getLastDayOfMonth(2022,8));

//task-4 how many seconds have passed today
function getSecondsToday() {
    let now = new Date();
  
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
  }
  
  alert( getSecondsToday() );

  //task-5 how many seconds till tomarrow
  function getSecondsToTomorrow(){
    let now = new Date();
    let tomarrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let dif = tomarrow - now;
    return Math.round(dif / 1000);
    
  }
alert(getSecondsToTomorrow());


//format the relative date
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); // convert diff to seconds
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }
  
    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component
  
    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); // "right now"
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
  
  // yesterday's date like 31.12.2016 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );