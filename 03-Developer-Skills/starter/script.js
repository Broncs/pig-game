// Remember, we're gonna use strict mode in all scripts now!
('use strict');

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// understand the problem ,
// - what is temp amplitude ? difference between higest and lowest temp;
// - how to compute max and min temperates ?
// What's a sensor error ? and what to od ?
//

//breaking up into sub problems
// how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - Subtract min from max (amplitude ) and return it
const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }

  return max - min;
};

// const calcTempAmplitudeTwo = (t1, t2) => {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }

//   return max - min;
// };

// const amplitude = calcTempAmplitudeTwo([3, 5, 1], [9, 0, 2]);

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// const printForecast = arr => {
//   const newArr = arr
//     .map((item, index) => {
//       return `... ${item}C in ${index + 1} days `;
//     })
//     .join('');
//   console.log(newArr);
//   return newArr;
// };

// printForecast([12, 5, -5, 0, 4]);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: 10,
    // value: Number(prompt('degrees celcius')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 237;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }

  return max - min;
};

const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 0, 2]);
