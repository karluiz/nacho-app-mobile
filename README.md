
# Nodrize - Expo Template

Esta plantilla de **[Expo](https://docs.expo.dev/)** `v42.0.1`, **[Native Base](https://docs.nativebase.io/)** `v3.0.7` y **[Apollo](https://www.apollographql.com/docs/)** genérica fue creada por el equipo de Nodrize para ser tomada como base para crear cualquier tipo de aplicación móvil híbrida.

## Instalación

Para utilizar esta plantilla, primero debemos tener instalado Yarn. 

```
npm install --global yarn 

yarn 

yarn android
yarn ios 

``` 
## Variables de Entorno

| Parameter | Description                |
| :-------- | :------------------------- |
| `NEXT_PUBLIC_DEFAULT_THEME` | `dark` \| `light` |
| `NEXT_PUBLIC_ENABLE_MULTILANGUAGE` | `true` \| `false` |
| `NEXT_PUBLIC_BASE_COLOR` | color primario en hex |
| `NEXT_PUBLIC_APP_API_URL` | URL para conexión a base de datos primaria |


## Arquitectura

### /types
En esta carpeta se encuentran los type definitions globales

### /src

#### /assets
Archivos multimedia separados en carpetas como
- /assets
    - /fonts
    - /images
        - /png
        - /svg
        - /jpg
    - /videos

#### /components
Components de uso **global**, es decir, que no se requieran en solo 1 vista o componente

#### /config
Configuraciones globales de `Native Base` y  `Apollo` y cualquier otra necesaria.

#### /gql
Todas las `mutation` y `query` de todos los schemas usados unificados en un `index.tsx`.
Las carpetas de cada `schema` (ejemplo: `User`) debe contener lo siguiente:

- /gql
    -  /User
        - index.tsx
        - mutations.ts
        - mutations.types.ts
        - queries.ts
        - queries.types.ts

`index.ts`
```javascript
export { default as gqlUser } from "./User";
```

`User/index.ts`
```javascript
import queries from "./queries";
import mutations from "./mutations";

export default {
  queries,
  mutations,
};
```


`mutations.ts` / `queries.ts`
```javascript
import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation AccessTokenMutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      refreshToken
    }
  }
`;

export default {
  LOGIN,
};

```


`mutations.types.ts` / `queries.types.ts`
```javascript
export interface ILoginRes {
  login: { accessToken: string; refreshToken: string };
}
export interface ILoginInput {
  loginInput: { email: string; password: string };
}

```

#### /lib

Lugar donde se almacenan  todas las funciones utility  y constantes de la aplicación

- /lib
    - /constants
        - asyncStorage.ts (nombre de las variables guardadas en AsyncStorage)
        - layout.ts (constantes de tamaños)
        - screens.ts (los nombres de todas las screens, divididas por su stack)
        - system.ts
    - /context
        - [name]
            - [name].context.tsx
            - [name].provider.tsx
    - /hooks
    - /i18n
        - en.ts
        - es.ts
        - languages.ts
    - dates.ts (funciones asociadas a dates)
    - files.ts (funciones asociadas a archivos)
    - string.ts (funciones asociadas a strings)
    - [type].ts (funcoones asociadas a [type])

#### /navigation

- navigation
    - /navigators (principales navigators del app)
        - AppNavigator.tsx
        - AuthNavigator.tsx
        - RootNavigator.tsx
    - /types (types específicos de los navigators)
    - Router.tsx

#### /screens

Screens del app, organizadas según root navigator y screen navigator o screen.

- /screens
    - [rootNavigator]
        - /[screenNavigator]
            - /[screenName]
                - index.tsx
            - index.tsx
        - /[screenName]
            - index.tsx
        - index.tsx

    - App
        - Profile
            -index.tsx
        - Activities
            - Home
                - index.tsx
            - Notifications
                - index.tsx
            - index.tsx
        - index.tsx

#### /theme

Configuraciones para el theme global del app