'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(tasks, hourlyRate) {
  let earnings = 0;
  const listWithDuration = [];

  for (const task of tasks) {
    const { duration } = task;
    listWithDuration.push({ duration }); //but what if there won'be a duration key?
    //is there a way to complete this task without destructuring?
  }
  listWithDuration
    .map((value) => Object.values(value))
    .forEach((value) => (earnings += (value / 60) * hourlyRate));
  return `€${earnings.toFixed(2)}`;
}

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
