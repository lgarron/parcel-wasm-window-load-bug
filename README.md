# Parcel `wasm` window load bug

To repro, run:

    parcel serve index.html

Observe that the JS console contains only `code loaded!`. It should also contain `window loaded!`.

However, if you uncomment the call to `add` in [`index.ts`](./index.ts), then `window loaded!` is logged to the console!
