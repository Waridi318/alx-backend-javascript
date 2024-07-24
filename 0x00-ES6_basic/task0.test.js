import { taskFirst, getLast, taskNext } from './0-constants.js';

describe('Tasks Module', () => {
  test('taskFirst should return correct string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  test('getLast should return correct string', () => {
    expect(getLast()).toBe(' is okay');
  });

  test('taskNext should return correct combined string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
