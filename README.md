# Gmail Microfrontend Sample
To install project dependencies, use the following command:

```bash
yarn install
```

To run the project , use the following command:

```bash
yarn start
```
# Architecture

There are 3 apps 
`gmail-app` (container)
`chat-app` `calendat-app`(remotes)

User details are shared from gmail-app to both the remotes . use `Switch User` to see the example.

Centralised Error Tracking is done in gmail-app , click `Throw Error` on the Chat to demonstrate this.

# Gmail System Design

Please check `gmail-app/src/System-Design` directory to find basic Gmail components with props

