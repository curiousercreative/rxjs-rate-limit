const fetch = require('node-fetch');
const { Subject } = require('rxjs');
const { mergeMap } = require('rxjs/operators');
// const rateLimit = require('@curiouser/rxjs-rate-limit');
const rateLimit = require('../src/index.js');

const subject = new Subject().pipe(
  rateLimit(20, 1000),
  mergeMap(async v => {
    const { ok, status } = await fetch('http://httpstat.us/204');

    if (!ok) throw new Error(`Unexpected response status ${status}`);

    return `Response status ${status} for ${v}`;
  }),
);

subject.subscribe(console.info);

Array.from(Array(200)).forEach((_, i) => subject.next(i + 1));
