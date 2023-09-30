export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const taskInsideBlock = false;
    const task2InsideBlock = true;

    task = taskInsideBlock;
    task2 = task2InsideBlock;
  }

  return [task, task2];
}
