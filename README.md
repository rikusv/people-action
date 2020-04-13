# people-action map

The people-action map aims to make community action and support information useful.

The end-user solution consists of 2 parts:

- [Interactive Map](https://people-action-map.web.app) for viewing information
- [Admin app](https://people-action.web.app) for maintaining information

The technology solution consists mainly of the following:

- Leaflet.js [map](./map) website
- Angular [admin](./admin) web app
- Firestore [database](./database) including [Cloud Functions](./database/functions)

See the README.md documents in the above directories for further technical information.

## Creating a deployment

> TODO: automate the below

Create a project in [Firebase console](https://console.firebase.google.com/).

Change to Blaze pay-as-you-go plan and enable billing in Firebase console](https://console.firebase.google.com/).

Create Firebase apps for the admin app and map website respectively, in [Firebase console](https://console.firebase.google.com/). Select type 'web', and create/include Firebase Hosting sites for each.

Get the service config details for the staging and production admin apps from [Firebase console](https://console.firebase.google.com/). Paste the details against `firebase` in `./admin/src/environments/environment.ts` and `./admin/src/environments/environment.prod.ts`, for example:

```typescript
firebase: {
  projectId: 'some-app',
  appId: '...',
  databaseURL: 'https://some-app.firebaseio.com',
  storageBucket: 'some-app.appspot.com',
  apiKey: '...',
  authDomain: 'some-app.firebaseapp.com',
  messagingSenderId: '...'
}
```

Create a Firestore database in [Firebase console](https://console.firebase.google.com/).

Activate Authentication providers 'Google' and 'Phone' in [Firebase console](https://console.firebase.google.com/).

Select the project in the Google Cloud Platform IAM [Service Accounts pane](https://console.cloud.google.com/iam-admin/serviceaccounts), select the app engine default service account, and create a JSON key. Save it somewhere safe for use with `GOOGLE_APPLICATION_CREDENTIALS` - see [database/functions/README.md](./database/functions/README.md).

Create an API key in the Google Cloud Platform APIs [Credentials pane](https://console.cloud.google.com/apis/credentials) (ideally restrict the key), and keep it safe for use with `GOOGLE_MAPS_API_KEY` - see [database/functions/README.md](./database/functions/README.md).

Enable the following APIs in the Google Cloud Platform APIs [Dashboard pane](https://console.cloud.google.com/apis/dashboard):

- Places API
- Maps Embed API

Replace old project and app names with new in all files (yes, blunt knife find and replace for now).

Deploy the rest using the instructions in README.md files in:

- [map/](./map/)
- [admin/](./admin/)
- [database/](./database/)
- [database/functions/](./database/functions/)
