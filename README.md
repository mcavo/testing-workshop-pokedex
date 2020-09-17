Testing Workshop: Pokedex
====================================

## Prerequisites

Follow the [official guide](https://reactnative.dev/docs/environment-setup) to properly setup your environment.

__IMPORTANT: Use RN CLI, and not Expo.__

We highly recommend using [nvm](https://github.com/creationix/nvm) instead of brew or aptitude to install nodejs.


## Proyect Set Up

#### ENV setup

You must create the following `.env` file in the root with the following var:

```
API_BASE_URL="https://pokeapi.co/api/v2"
```

## Running aplication

To run a Android/iOS simulator with determinated environment, just run:

**ANDROID**  

`yarn android` 

**iOS**  

`yarn ios`

## Testing

To run tests:

`yarn test`

To run coverage:

`yarn coverage`

You can check [Jest CLI options](https://jestjs.io/docs/en/cli#options) to add more useful scripts :smile:





