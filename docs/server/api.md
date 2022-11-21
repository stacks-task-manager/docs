# Web API

## Authentication

## Realtime

The Realtime API is implemented via Server-Sent Events (SSE). Generally, it consists of 2 operations:

1. establish SSE connection
2. submit client subscriptions

SSE events are sent for **create**, **update** and **delete** record operations.
You could subscribe to a single record or to an entire collection.

Have a more in-depth look at the usage examples and docs on the PocketBase [website](https://pocketbase.io/docs/api-realtime/).