const getSleepHours = day => {
  switch(day) {
    case 'Monday':
    return 8;
    break;
    case 'Tuesday':
    return 8;
    break;
    case 'Wednesday':
    return 8;
    break;
    case 'Thursday':
    return 8;
    break;
    case 'Friday':
    return 8;
    break;
    case 'Saturday':
    return 8;
    break;
    case 'Sunday':
    return 8;
    break;
    default:
    return 8;
    break;
  }
}
/*  const getActualSleepHours = () => 
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); */
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 9;

/* const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}; */
const getIdealSleepHours = idealHours => idealHours * 7;
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('You had the perfect amount of sleep');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
  }
  else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};
calculateSleepDebt();
