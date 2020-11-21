export interface Data {
  numberPlacesPerTurn: number,
  turnsPerDay: number,
  queueSize: number,
  queue: number[],
}

const reducerByAddition = (a: number, b: number) => a + b;
const getNextGroup = (queue: number[]) => {
  const [nextGroup] = queue;
  return nextGroup
}

const main = ({ turnsPerDay, queue, numberPlacesPerTurn: numberPlaces }: Data) => {
  let revenue: number = 0;

  if (queue.length === 0) {
    return 0;
  }

  let currentQueue = queue
  for (let turn = 1; turn <= turnsPerDay; turn++) {
    const tempQueue = [...currentQueue];

    const car: number[] = [];
    while (tempQueue.length !== 0 && car.reduce(reducerByAddition, 0) + getNextGroup(tempQueue) <= numberPlaces) {
      if (getNextGroup(tempQueue)) {
        const nextGroup = tempQueue.shift() as number;
        car.push(nextGroup);
      }
    }
    tempQueue.push(...car);
    currentQueue = tempQueue;
    revenue = revenue + car.reduce(reducerByAddition, 0);
  }

  return revenue;
};


export default main;