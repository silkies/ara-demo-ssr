# Ara SSR

Web application that consists of 3 micro-frontends: Product Catalog ([Angular](https://angular.io/)), Navigation Bar ([Vue.js](https://vuejs.org/)) and Related Products ([React](https://reactjs.org/)).

To run the application:

## Product Catalog (Micro-frontend)

Install dependencies

```shell
npm install 
```

Run application

```shell
npm run dev
```

## Navigation Bar (Micro-frontend)

Install dependencies

```shell
npm install
```

Run application

```shell
npm run dev
``` 

## Related Products (Micro-frontend)

Install dependencies

```shell
npm install
```

Run application

```shell
npm run dev
```

## Root application (nuxt-site)

Install dependencies

```shell
npm install
``` 

Run application
```shell
npm run dev
```
## Cluster

Run cluster in root folder
```shell
ara run:cluster --config ./views.json
```
Then execute the following command before running proxy
```
export HYPERNOVA_BATCH=http://localhost:8000/batch
```

## Proxy
Run proxy in root folder 
```shell
ara run:proxy --config ./nova-proxy.json --port 1234
```
