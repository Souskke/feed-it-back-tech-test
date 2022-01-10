# feed-it-back-tech-test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### known issues

- Path for selecting a date/range that has no data hasn't been implemented
- Vuetify date range picker returns dates in order selected so its possible to select the end date first this breaks the api call, need to add code to push dates to api in date order
- Alignment bug in the order dropdown on mobile, the <td> element seems to prevent the <order-display> component from taking up the full width of the table, however removing it causes the issue to affect desktop instead
- Axios headers are overidden in the store, this was done to get the api calls working but I ran out of time to move it out of this file as a plugin or an interceptor

### Notes

time spent: 5 hrs