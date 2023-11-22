# Stam Messenger
sample messaging app in react typescript
based off material-ui cra ts example
## How to use

Clone the repository locally then install it and run like so:

```bash
npm install
npm start
```
## Some notes about the app

Right now, the app is desktop only. A responsive version would need to be created by introducing a router, making the discussion list view a separate route from the discussion detail view.

Layout needs a bit more work. For example, a discussion with a long title and/or many participants, will cause the discussion detail component contents to overflow and it introduces ugly scrollbars.

The data is only local. There is a context object to handle retrieval and updates to data even from deeply nested components. this context can be easily changed to communicate with an external server without having to change the corresponding interface.





