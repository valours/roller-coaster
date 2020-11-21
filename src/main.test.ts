import main, { Data } from './main';
import { parseFile } from './utils/parseFile';

describe('Revenue forecast', () => {
  describe('Cases with data', () => {
    it('case n°1', () => {
      // given
      const data: Data = {
        numberPlacesPerTurn: 3,
        turnsPerDay: 3,
        queueSize: 4,
        queue: [3, 1, 1, 2],
      }

      // when
      const revenue = main(data);

      // then
      expect(revenue).toEqual(7);
    });

    it('case n°2', () => {
      // given
      const data: Data = {
        numberPlacesPerTurn: 5,
        turnsPerDay: 3,
        queueSize: 4,
        queue: [2, 3, 5, 4],
      }

      // when
      const revenue = main(data);

      // then
      expect(revenue).toEqual(14);
    });

    it('case n°3', () => {
      // given
      const data: Data = {
        numberPlacesPerTurn: 10,
        turnsPerDay: 100,
        queueSize: 1,
        queue: [1],
      }

      // when
      const revenue = main(data);

      // then
      expect(revenue).toEqual(100);
    });
  })

  describe('Compute from file', () => {
    it('should return 8974489271113753 for roller_coaster.hard file', async () => {
      // given
      const data = await parseFile(__dirname + '/../data/roller_coaster.hard');

      // when
      //const revenue = main(data);

      // then
      expect(false).toBeTruthy();
      // expect(revenue).toEqual(8974489271113753);
    });

    it('should return 89744892714152289 for roller_coaster.harder file', async () => {
      // given
      const data = await parseFile(__dirname + '/../data/roller_coaster.harder');

      // when
      // const revenue = main(data);

      // then
      expect(false).toBeTruthy();

      // expect(revenue).toEqual(8974489271113753);
    });
  })
});