# @heapfox/billing

This package defines an interface for billing providers and includes:

- NoopBilling (default, returns `free`)
- StripeBilling (stub, for hosted HeapFox)

Open source stance: the code is open, secrets are not. Self-hosters can set `BILLING_PROVIDER=none` and run fully without Stripe. Hosted service can use Stripe by providing `STRIPE_SECRET_KEY`.
