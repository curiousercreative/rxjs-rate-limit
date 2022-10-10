const { of, pipe } = require('rxjs');
const { delay, map, mergeMap, tap } = require('rxjs/operators');

/**
 * @param  {number} count
 * @param  {number} interval in ms
 * @return {RxJS Operator}
 */
module.exports = function rateLimit (count, interval) {
  let i = 0;
  let start = Date.now();
  let windowI = 0;

  return pipe(
    tap(() => {
      const now = Date.now();

      // our bufferCount is full, start a new window
      if (i === count) {
        i = 1;
        start = Math.max(now, start + interval);
        windowI++;
      }
      // our bufferTime has past, start a new window
      else if (now > start + interval) {
        i = 1;
        start = now;
        windowI++;
      }
      // add to current window
      else i++;
    }),
    mergeMap(v => {
      const scheduledDelay = Math.max(start - Date.now(), 0);

      return of(v).pipe(delay(scheduledDelay));
    }),
  );
};
