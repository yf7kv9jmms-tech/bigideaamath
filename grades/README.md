# Grade Library

## Game Saves

The library requests persistent browser storage when a game is launched. Browsers may grant or deny that request; when granted, the origin's saved data is less likely to be cleared automatically. Existing games keep using their own save systems.

Persistent storage does not create a save system for a game that has none. Every game must save its progress and restore it when it starts, using browser storage such as `localStorage` or IndexedDB. For new games, use game-specific keys or an IndexedDB database so saves do not collide with other titles, then add the page path to `FILES` in `index.html`.

## Bundled Game Files

Many game pages are single-file captures with multi-megabyte base64-encoded archives and assets embedded in the HTML. Avoid reading or reformatting the entire page for routine changes; inspect the relevant loader or markup section with targeted searches. Moving embedded payloads into separate assets can improve source readability, but requires updating that game's loader and verifying it still runs.
