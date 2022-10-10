# RxJS Rate Limiter (mostly lossless)
### Installation
```bash
npm add @curiouser/rxjs-rate-limit
```

### Usage
```bash
const rateLimit = require('@curiouser/rxjs-rate-limit');

someObservable.pipe(
  rateLimit(20, 1000),
  // do something that should be rate limited
);
```

### Examples
See [examples directory](./examples) for examples you can run from CLI.
