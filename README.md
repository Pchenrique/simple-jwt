## Install
    $ git clone repo
    $ yarn install
## Usage

```javascript
const payload = { sub: 'test' };
const secret = process.env.JWT_SECRET;

// generate token
const token = sign(exp, payload, secret);

// verify
const verify = verify(token, secret);
```

### Algorithms

By default the algorithm to encode is `HS256`.
