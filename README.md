# Stam Messenger
sample messaging app in react typescript
based off material-ui cra ts example
## How to use

Clone the repository locally then install it and run like so:

```bash
npm install
npm start
```
alternatively you may try the vercel deployment on: https://stam-messenger.vercel.app
## Some notes about the app

Right now, the app is desktop only. A responsive version could be created by placing the discussion list view inside a Drawer element and have a responsive behavior for the drawer element (persistent on desktop, temporary on mobile).

Layout needs a bit more work. For example, a discussion with a long title and/or many participants, will cause the discussion detail component contents to overflow and it introduces ugly scrollbars.

The data is only local. There is a context object to handle retrieval and updates to data even from deeply nested components. this context can be easily changed to communicate with an external server without having to change the corresponding interface.





