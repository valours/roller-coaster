import fs from 'fs';
import { Data } from '../main';

export const parseFile = (path: string): Promise<Data> => new Promise((res, rej) => {
  try {
    const fileContent = fs.readFileSync(path, 'utf8').split('\n')
    const [configuration, ...queue] = fileContent;
    const [numberPlacesPerTurn, turnsPerDay, queueSize] = configuration.split(' ').map(parseInt);
    const result: Data = {
      numberPlacesPerTurn,
      turnsPerDay,
      queueSize,
      queue: queue.map(group => parseInt(group, 10)),
    }
    res(result);
  } catch (error) {
    rej(error);
  }
})
