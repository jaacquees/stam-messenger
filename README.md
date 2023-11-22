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

the app can be used on mobile, although it is not optimised for it. on small viewport widths, the list of dicussions is in a temporary drawer component. on larger viewport widths it becomes a persistent side pane.

The data is only local. There is a context object to handle retrieval and updates to data even from deeply nested components. this context can be easily changed to communicate with an external server without having to change the corresponding interface.





