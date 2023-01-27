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
  const earningListWithDuration = [];

  for (const task of tasks) {
    const { duration } = task;
    earningListWithDuration.push({ duration });
  }
  earningListWithDuration
    .map((value) => Object.values(value))
    .forEach((value) => (earnings += (value / 60) * hourlyRate));
  return `€${earnings.toFixed(2)}`;
}

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
