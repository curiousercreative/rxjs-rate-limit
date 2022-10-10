# RxJS Rate Limiter (mostly lossless)
- RxJS 7 pipeline operator
- Dead simple (40 lines)
- No dependencies
- Processes immediately, no delay to emissions

## Beware
- No retries, that's up to you
- Currently only packaged for CommonJS. Open an issue if you'd like to consume an ESM.

## Installation
```bash
npm add @curiouser/rxjs-rate-limit
```

## Usage
```javascript
const rateLimit = require('@curiouser/rxjs-rate-limit');

// 20 per second
someObservable.pipe(
  rateLimit(20, 1000),
  // do something that should be rate limited
);
```

## Examples
See [examples directory](./examples) for examples you can run from CLI.
