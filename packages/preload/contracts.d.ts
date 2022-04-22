/* eslint-disable @typescript-eslint/consistent-type-imports */

interface Exposed {
  readonly nodeCrypto: Readonly<typeof import('./nodeCrypto').nodeCrypto>;
  readonly versions: Readonly<typeof import('./versions').versions>;
  readonly nativeTheme: Readonly<typeof import('./theme').versions>;
}


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window extends Exposed {}