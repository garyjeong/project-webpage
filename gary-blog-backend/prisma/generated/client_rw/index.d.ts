
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model user
 * 
 */
export type user = {
  id: string
  useremail: string
  username: string
  password: string | null
  createAt: Date
  updateAt: Date
  deleteAt: Date | null
}

/**
 * Model user_sns
 * 
 */
export type user_sns = {
  seq: number
  sns_id: string
  sns_type: PROVIDER
  user_id: string
}

/**
 * Model post
 * 
 */
export type post = {
  post_id: string
  title: string
  thumbnail: string
  content: string
  createAt: Date
  updateAt: Date
  deleteAt: Date | null
  author_id: string
}

/**
 * Model comment
 * 
 */
export type comment = {
  comment_id: string
  comment: string
  createAt: Date
  updateAt: Date
  deleteAt: Date | null
  author_id: string
  post_id: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PROVIDER: {
  KAKAO: 'KAKAO',
  NAVER: 'NAVER',
  GOOGLE: 'GOOGLE'
};

export type PROVIDER = (typeof PROVIDER)[keyof typeof PROVIDER]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.user_sns`: Exposes CRUD operations for the **user_sns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sns
    * const user_sns = await prisma.user_sns.findMany()
    * ```
    */
  get user_sns(): Prisma.user_snsDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    user: 'user',
    user_sns: 'user_sns',
    post: 'post',
    comment: 'comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    posts: number
    comments: number
  }

  export type UserCountOutputTypeSelect = {
    posts?: boolean
    comments?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    comments: number
  }

  export type PostCountOutputTypeSelect = {
    comments?: boolean
  }

  export type PostCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PostCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PostCountOutputType
    : S extends undefined
    ? never
    : S extends PostCountOutputTypeArgs
    ?'include' extends U
    ? PostCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PostCountOutputType ? PostCountOutputType[P] : never
  } 
    : PostCountOutputType
  : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    useremail: string | null
    username: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    useremail: string | null
    username: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    useremail: number
    username: number
    password: number
    createAt: number
    updateAt: number
    deleteAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    useremail?: true
    username?: true
    password?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    useremail?: true
    username?: true
    password?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    useremail?: true
    username?: true
    password?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    useremail: string
    username: string
    password: string | null
    createAt: Date
    updateAt: Date
    deleteAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    id?: boolean
    useremail?: boolean
    username?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    sns_id?: boolean | user_snsArgs
    posts?: boolean | postFindManyArgs
    comments?: boolean | commentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userInclude = {
    sns_id?: boolean | user_snsArgs
    posts?: boolean | postFindManyArgs
    comments?: boolean | commentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userGetPayload<
    S extends boolean | null | undefined | userArgs,
    U = keyof S
      > = S extends true
        ? user
    : S extends undefined
    ? never
    : S extends userArgs | userFindManyArgs
    ?'include' extends U
    ? user  & {
    [P in TrueKeys<S['include']>]:
        P extends 'sns_id' ? user_snsGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'posts' ? Array < postGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'comments' ? Array < commentGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'sns_id' ? user_snsGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'posts' ? Array < postGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'comments' ? Array < commentGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof user ? user[P] : never
  } 
    : user
  : user


  type userCountArgs = Merge<
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>> : CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>> : CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user>>, PrismaPromise<Array<userGetPayload<T>>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sns_id<T extends user_snsArgs = {}>(args?: Subset<T, user_snsArgs>): CheckSelect<T, Prisma__user_snsClient<user_sns | null >, Prisma__user_snsClient<user_snsGetPayload<T> | null >>;

    posts<T extends postFindManyArgs = {}>(args?: Subset<T, postFindManyArgs>): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>;

    comments<T extends commentFindManyArgs = {}>(args?: Subset<T, commentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<comment>>, PrismaPromise<Array<commentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     * 
    **/
    where: userWhereUniqueInput
  }

  /**
   * user: findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user: findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The data needed to create a user.
     * 
    **/
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The data needed to update a user.
     * 
    **/
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     * 
    **/
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     * 
    **/
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter which user to delete.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: userWhereInput
  }


  /**
   * user: findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = userFindUniqueArgsBase
      

  /**
   * user: findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = userFindFirstArgsBase
      

  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
  }



  /**
   * Model user_sns
   */


  export type AggregateUser_sns = {
    _count: User_snsCountAggregateOutputType | null
    _avg: User_snsAvgAggregateOutputType | null
    _sum: User_snsSumAggregateOutputType | null
    _min: User_snsMinAggregateOutputType | null
    _max: User_snsMaxAggregateOutputType | null
  }

  export type User_snsAvgAggregateOutputType = {
    seq: number | null
  }

  export type User_snsSumAggregateOutputType = {
    seq: number | null
  }

  export type User_snsMinAggregateOutputType = {
    seq: number | null
    sns_id: string | null
    sns_type: PROVIDER | null
    user_id: string | null
  }

  export type User_snsMaxAggregateOutputType = {
    seq: number | null
    sns_id: string | null
    sns_type: PROVIDER | null
    user_id: string | null
  }

  export type User_snsCountAggregateOutputType = {
    seq: number
    sns_id: number
    sns_type: number
    user_id: number
    _all: number
  }


  export type User_snsAvgAggregateInputType = {
    seq?: true
  }

  export type User_snsSumAggregateInputType = {
    seq?: true
  }

  export type User_snsMinAggregateInputType = {
    seq?: true
    sns_id?: true
    sns_type?: true
    user_id?: true
  }

  export type User_snsMaxAggregateInputType = {
    seq?: true
    sns_id?: true
    sns_type?: true
    user_id?: true
  }

  export type User_snsCountAggregateInputType = {
    seq?: true
    sns_id?: true
    sns_type?: true
    user_id?: true
    _all?: true
  }

  export type User_snsAggregateArgs = {
    /**
     * Filter which user_sns to aggregate.
     * 
    **/
    where?: user_snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sns to fetch.
     * 
    **/
    orderBy?: Enumerable<user_snsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: user_snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sns from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sns.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_sns
    **/
    _count?: true | User_snsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_snsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_snsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_snsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_snsMaxAggregateInputType
  }

  export type GetUser_snsAggregateType<T extends User_snsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_sns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_sns[P]>
      : GetScalarType<T[P], AggregateUser_sns[P]>
  }




  export type User_snsGroupByArgs = {
    where?: user_snsWhereInput
    orderBy?: Enumerable<user_snsOrderByWithAggregationInput>
    by: Array<User_snsScalarFieldEnum>
    having?: user_snsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_snsCountAggregateInputType | true
    _avg?: User_snsAvgAggregateInputType
    _sum?: User_snsSumAggregateInputType
    _min?: User_snsMinAggregateInputType
    _max?: User_snsMaxAggregateInputType
  }


  export type User_snsGroupByOutputType = {
    seq: number
    sns_id: string
    sns_type: PROVIDER
    user_id: string
    _count: User_snsCountAggregateOutputType | null
    _avg: User_snsAvgAggregateOutputType | null
    _sum: User_snsSumAggregateOutputType | null
    _min: User_snsMinAggregateOutputType | null
    _max: User_snsMaxAggregateOutputType | null
  }

  type GetUser_snsGroupByPayload<T extends User_snsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_snsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_snsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_snsGroupByOutputType[P]>
            : GetScalarType<T[P], User_snsGroupByOutputType[P]>
        }
      >
    >


  export type user_snsSelect = {
    seq?: boolean
    sns_id?: boolean
    sns_type?: boolean
    user_id?: boolean
    user?: boolean | userArgs
  }

  export type user_snsInclude = {
    user?: boolean | userArgs
  }

  export type user_snsGetPayload<
    S extends boolean | null | undefined | user_snsArgs,
    U = keyof S
      > = S extends true
        ? user_sns
    : S extends undefined
    ? never
    : S extends user_snsArgs | user_snsFindManyArgs
    ?'include' extends U
    ? user_sns  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? userGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? userGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof user_sns ? user_sns[P] : never
  } 
    : user_sns
  : user_sns


  type user_snsCountArgs = Merge<
    Omit<user_snsFindManyArgs, 'select' | 'include'> & {
      select?: User_snsCountAggregateInputType | true
    }
  >

  export interface user_snsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User_sns that matches the filter.
     * @param {user_snsFindUniqueArgs} args - Arguments to find a User_sns
     * @example
     * // Get one User_sns
     * const user_sns = await prisma.user_sns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_snsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_snsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_sns'> extends True ? CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>> : CheckSelect<T, Prisma__user_snsClient<user_sns | null >, Prisma__user_snsClient<user_snsGetPayload<T> | null >>

    /**
     * Find the first User_sns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snsFindFirstArgs} args - Arguments to find a User_sns
     * @example
     * // Get one User_sns
     * const user_sns = await prisma.user_sns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_snsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_snsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_sns'> extends True ? CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>> : CheckSelect<T, Prisma__user_snsClient<user_sns | null >, Prisma__user_snsClient<user_snsGetPayload<T> | null >>

    /**
     * Find zero or more User_sns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sns
     * const user_sns = await prisma.user_sns.findMany()
     * 
     * // Get first 10 User_sns
     * const user_sns = await prisma.user_sns.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const user_snsWithSeqOnly = await prisma.user_sns.findMany({ select: { seq: true } })
     * 
    **/
    findMany<T extends user_snsFindManyArgs>(
      args?: SelectSubset<T, user_snsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user_sns>>, PrismaPromise<Array<user_snsGetPayload<T>>>>

    /**
     * Create a User_sns.
     * @param {user_snsCreateArgs} args - Arguments to create a User_sns.
     * @example
     * // Create one User_sns
     * const User_sns = await prisma.user_sns.create({
     *   data: {
     *     // ... data to create a User_sns
     *   }
     * })
     * 
    **/
    create<T extends user_snsCreateArgs>(
      args: SelectSubset<T, user_snsCreateArgs>
    ): CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>>

    /**
     * Create many User_sns.
     *     @param {user_snsCreateManyArgs} args - Arguments to create many User_sns.
     *     @example
     *     // Create many User_sns
     *     const user_sns = await prisma.user_sns.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_snsCreateManyArgs>(
      args?: SelectSubset<T, user_snsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_sns.
     * @param {user_snsDeleteArgs} args - Arguments to delete one User_sns.
     * @example
     * // Delete one User_sns
     * const User_sns = await prisma.user_sns.delete({
     *   where: {
     *     // ... filter to delete one User_sns
     *   }
     * })
     * 
    **/
    delete<T extends user_snsDeleteArgs>(
      args: SelectSubset<T, user_snsDeleteArgs>
    ): CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>>

    /**
     * Update one User_sns.
     * @param {user_snsUpdateArgs} args - Arguments to update one User_sns.
     * @example
     * // Update one User_sns
     * const user_sns = await prisma.user_sns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_snsUpdateArgs>(
      args: SelectSubset<T, user_snsUpdateArgs>
    ): CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>>

    /**
     * Delete zero or more User_sns.
     * @param {user_snsDeleteManyArgs} args - Arguments to filter User_sns to delete.
     * @example
     * // Delete a few User_sns
     * const { count } = await prisma.user_sns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_snsDeleteManyArgs>(
      args?: SelectSubset<T, user_snsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sns
     * const user_sns = await prisma.user_sns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_snsUpdateManyArgs>(
      args: SelectSubset<T, user_snsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_sns.
     * @param {user_snsUpsertArgs} args - Arguments to update or create a User_sns.
     * @example
     * // Update or create a User_sns
     * const user_sns = await prisma.user_sns.upsert({
     *   create: {
     *     // ... data to create a User_sns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_sns we want to update
     *   }
     * })
    **/
    upsert<T extends user_snsUpsertArgs>(
      args: SelectSubset<T, user_snsUpsertArgs>
    ): CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>>

    /**
     * Find one User_sns that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {user_snsFindUniqueOrThrowArgs} args - Arguments to find a User_sns
     * @example
     * // Get one User_sns
     * const user_sns = await prisma.user_sns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_snsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_snsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>>

    /**
     * Find the first User_sns that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snsFindFirstOrThrowArgs} args - Arguments to find a User_sns
     * @example
     * // Get one User_sns
     * const user_sns = await prisma.user_sns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_snsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_snsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__user_snsClient<user_sns>, Prisma__user_snsClient<user_snsGetPayload<T>>>

    /**
     * Count the number of User_sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snsCountArgs} args - Arguments to filter User_sns to count.
     * @example
     * // Count the number of User_sns
     * const count = await prisma.user_sns.count({
     *   where: {
     *     // ... the filter for the User_sns we want to count
     *   }
     * })
    **/
    count<T extends user_snsCountArgs>(
      args?: Subset<T, user_snsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_snsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_snsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_snsAggregateArgs>(args: Subset<T, User_snsAggregateArgs>): PrismaPromise<GetUser_snsAggregateType<T>>

    /**
     * Group by User_sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_snsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_snsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_snsGroupByArgs['orderBy'] }
        : { orderBy?: User_snsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_snsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_snsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_sns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_snsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends userArgs = {}>(args?: Subset<T, userArgs>): CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user_sns base type for findUnique actions
   */
  export type user_snsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * Filter, which user_sns to fetch.
     * 
    **/
    where: user_snsWhereUniqueInput
  }

  /**
   * user_sns: findUnique
   */
  export interface user_snsFindUniqueArgs extends user_snsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_sns base type for findFirst actions
   */
  export type user_snsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * Filter, which user_sns to fetch.
     * 
    **/
    where?: user_snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sns to fetch.
     * 
    **/
    orderBy?: Enumerable<user_snsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sns.
     * 
    **/
    cursor?: user_snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sns from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sns.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sns.
     * 
    **/
    distinct?: Enumerable<User_snsScalarFieldEnum>
  }

  /**
   * user_sns: findFirst
   */
  export interface user_snsFindFirstArgs extends user_snsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_sns findMany
   */
  export type user_snsFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * Filter, which user_sns to fetch.
     * 
    **/
    where?: user_snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sns to fetch.
     * 
    **/
    orderBy?: Enumerable<user_snsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_sns.
     * 
    **/
    cursor?: user_snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sns from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sns.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_snsScalarFieldEnum>
  }


  /**
   * user_sns create
   */
  export type user_snsCreateArgs = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * The data needed to create a user_sns.
     * 
    **/
    data: XOR<user_snsCreateInput, user_snsUncheckedCreateInput>
  }


  /**
   * user_sns createMany
   */
  export type user_snsCreateManyArgs = {
    /**
     * The data used to create many user_sns.
     * 
    **/
    data: Enumerable<user_snsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_sns update
   */
  export type user_snsUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * The data needed to update a user_sns.
     * 
    **/
    data: XOR<user_snsUpdateInput, user_snsUncheckedUpdateInput>
    /**
     * Choose, which user_sns to update.
     * 
    **/
    where: user_snsWhereUniqueInput
  }


  /**
   * user_sns updateMany
   */
  export type user_snsUpdateManyArgs = {
    /**
     * The data used to update user_sns.
     * 
    **/
    data: XOR<user_snsUpdateManyMutationInput, user_snsUncheckedUpdateManyInput>
    /**
     * Filter which user_sns to update
     * 
    **/
    where?: user_snsWhereInput
  }


  /**
   * user_sns upsert
   */
  export type user_snsUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * The filter to search for the user_sns to update in case it exists.
     * 
    **/
    where: user_snsWhereUniqueInput
    /**
     * In case the user_sns found by the `where` argument doesn't exist, create a new user_sns with this data.
     * 
    **/
    create: XOR<user_snsCreateInput, user_snsUncheckedCreateInput>
    /**
     * In case the user_sns was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<user_snsUpdateInput, user_snsUncheckedUpdateInput>
  }


  /**
   * user_sns delete
   */
  export type user_snsDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
    /**
     * Filter which user_sns to delete.
     * 
    **/
    where: user_snsWhereUniqueInput
  }


  /**
   * user_sns deleteMany
   */
  export type user_snsDeleteManyArgs = {
    /**
     * Filter which user_sns to delete
     * 
    **/
    where?: user_snsWhereInput
  }


  /**
   * user_sns: findUniqueOrThrow
   */
  export type user_snsFindUniqueOrThrowArgs = user_snsFindUniqueArgsBase
      

  /**
   * user_sns: findFirstOrThrow
   */
  export type user_snsFindFirstOrThrowArgs = user_snsFindFirstArgsBase
      

  /**
   * user_sns without action
   */
  export type user_snsArgs = {
    /**
     * Select specific fields to fetch from the user_sns
     * 
    **/
    select?: user_snsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_snsInclude | null
  }



  /**
   * Model post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    post_id: string | null
    title: string | null
    thumbnail: string | null
    content: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
    author_id: string | null
  }

  export type PostMaxAggregateOutputType = {
    post_id: string | null
    title: string | null
    thumbnail: string | null
    content: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
    author_id: string | null
  }

  export type PostCountAggregateOutputType = {
    post_id: number
    title: number
    thumbnail: number
    content: number
    createAt: number
    updateAt: number
    deleteAt: number
    author_id: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    post_id?: true
    title?: true
    thumbnail?: true
    content?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    author_id?: true
  }

  export type PostMaxAggregateInputType = {
    post_id?: true
    title?: true
    thumbnail?: true
    content?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    author_id?: true
  }

  export type PostCountAggregateInputType = {
    post_id?: true
    title?: true
    thumbnail?: true
    content?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    author_id?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which post to aggregate.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: postWhereInput
    orderBy?: Enumerable<postOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    post_id: string
    title: string
    thumbnail: string
    content: string
    createAt: Date
    updateAt: Date
    deleteAt: Date | null
    author_id: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect = {
    post_id?: boolean
    title?: boolean
    thumbnail?: boolean
    content?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    author_id?: boolean
    author?: boolean | userArgs
    comments?: boolean | commentFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type postInclude = {
    author?: boolean | userArgs
    comments?: boolean | commentFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type postGetPayload<
    S extends boolean | null | undefined | postArgs,
    U = keyof S
      > = S extends true
        ? post
    : S extends undefined
    ? never
    : S extends postArgs | postFindManyArgs
    ?'include' extends U
    ? post  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? userGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'comments' ? Array < commentGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? userGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'comments' ? Array < commentGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof post ? post[P] : never
  } 
    : post
  : post


  type postCountArgs = Merge<
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface postDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'post'> extends True ? CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>> : CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'post'> extends True ? CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>> : CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postWithPost_idOnly = await prisma.post.findMany({ select: { post_id: true } })
     * 
    **/
    findMany<T extends postFindManyArgs>(
      args?: SelectSubset<T, postFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends postCreateArgs>(
      args: SelectSubset<T, postCreateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {postCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postCreateManyArgs>(
      args?: SelectSubset<T, postCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends postDeleteArgs>(
      args: SelectSubset<T, postDeleteArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postUpdateArgs>(
      args: SelectSubset<T, postUpdateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postDeleteManyArgs>(
      args?: SelectSubset<T, postDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postUpdateManyArgs>(
      args: SelectSubset<T, postUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends postUpsertArgs>(
      args: SelectSubset<T, postUpsertArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Find one Post that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, postFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postFindFirstOrThrowArgs>(
      args?: SelectSubset<T, postFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends userArgs = {}>(args?: Subset<T, userArgs>): CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>;

    comments<T extends commentFindManyArgs = {}>(args?: Subset<T, commentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<comment>>, PrismaPromise<Array<commentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * post base type for findUnique actions
   */
  export type postFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }

  /**
   * post: findUnique
   */
  export interface postFindUniqueArgs extends postFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * post base type for findFirst actions
   */
  export type postFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * post: findFirst
   */
  export interface postFindFirstArgs extends postFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * post findMany
   */
  export type postFindManyArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post create
   */
  export type postCreateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to create a post.
     * 
    **/
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs = {
    /**
     * The data used to create many posts.
     * 
    **/
    data: Enumerable<postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to update a post.
     * 
    **/
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs = {
    /**
     * The data used to update posts.
     * 
    **/
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     * 
    **/
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The filter to search for the post to update in case it exists.
     * 
    **/
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     * 
    **/
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }


  /**
   * post delete
   */
  export type postDeleteArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter which post to delete.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs = {
    /**
     * Filter which posts to delete
     * 
    **/
    where?: postWhereInput
  }


  /**
   * post: findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs = postFindUniqueArgsBase
      

  /**
   * post: findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs = postFindFirstArgsBase
      

  /**
   * post without action
   */
  export type postArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
  }



  /**
   * Model comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    comment_id: string | null
    comment: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
    author_id: string | null
    post_id: string | null
  }

  export type CommentMaxAggregateOutputType = {
    comment_id: string | null
    comment: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
    author_id: string | null
    post_id: string | null
  }

  export type CommentCountAggregateOutputType = {
    comment_id: number
    comment: number
    createAt: number
    updateAt: number
    deleteAt: number
    author_id: number
    post_id: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    comment_id?: true
    comment?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    author_id?: true
    post_id?: true
  }

  export type CommentMaxAggregateInputType = {
    comment_id?: true
    comment?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    author_id?: true
    post_id?: true
  }

  export type CommentCountAggregateInputType = {
    comment_id?: true
    comment?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    author_id?: true
    post_id?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which comment to aggregate.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: commentWhereInput
    orderBy?: Enumerable<commentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    comment_id: string
    comment: string
    createAt: Date
    updateAt: Date
    deleteAt: Date | null
    author_id: string
    post_id: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect = {
    comment_id?: boolean
    comment?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    author_id?: boolean
    author?: boolean | userArgs
    post_id?: boolean
    post?: boolean | postArgs
  }

  export type commentInclude = {
    author?: boolean | userArgs
    post?: boolean | postArgs
  }

  export type commentGetPayload<
    S extends boolean | null | undefined | commentArgs,
    U = keyof S
      > = S extends true
        ? comment
    : S extends undefined
    ? never
    : S extends commentArgs | commentFindManyArgs
    ?'include' extends U
    ? comment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? userGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'post' ? postGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? userGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'post' ? postGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof comment ? comment[P] : never
  } 
    : comment
  : comment


  type commentCountArgs = Merge<
    Omit<commentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface commentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, commentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'comment'> extends True ? CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>> : CheckSelect<T, Prisma__commentClient<comment | null >, Prisma__commentClient<commentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, commentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'comment'> extends True ? CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>> : CheckSelect<T, Prisma__commentClient<comment | null >, Prisma__commentClient<commentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentWithComment_idOnly = await prisma.comment.findMany({ select: { comment_id: true } })
     * 
    **/
    findMany<T extends commentFindManyArgs>(
      args?: SelectSubset<T, commentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<comment>>, PrismaPromise<Array<commentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends commentCreateArgs>(
      args: SelectSubset<T, commentCreateArgs>
    ): CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {commentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends commentCreateManyArgs>(
      args?: SelectSubset<T, commentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends commentDeleteArgs>(
      args: SelectSubset<T, commentDeleteArgs>
    ): CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commentUpdateArgs>(
      args: SelectSubset<T, commentUpdateArgs>
    ): CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commentDeleteManyArgs>(
      args?: SelectSubset<T, commentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commentUpdateManyArgs>(
      args: SelectSubset<T, commentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends commentUpsertArgs>(
      args: SelectSubset<T, commentUpsertArgs>
    ): CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>>

    /**
     * Find one Comment that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, commentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, commentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__commentClient<comment>, Prisma__commentClient<commentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__commentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends userArgs = {}>(args?: Subset<T, userArgs>): CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>;

    post<T extends postArgs = {}>(args?: Subset<T, postArgs>): CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * comment base type for findUnique actions
   */
  export type commentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comment to fetch.
     * 
    **/
    where: commentWhereUniqueInput
  }

  /**
   * comment: findUnique
   */
  export interface commentFindUniqueArgs extends commentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comment base type for findFirst actions
   */
  export type commentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comment to fetch.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * comment: findFirst
   */
  export interface commentFindFirstArgs extends commentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comment findMany
   */
  export type commentFindManyArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comments to fetch.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * comment create
   */
  export type commentCreateArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * The data needed to create a comment.
     * 
    **/
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }


  /**
   * comment createMany
   */
  export type commentCreateManyArgs = {
    /**
     * The data used to create many comments.
     * 
    **/
    data: Enumerable<commentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * comment update
   */
  export type commentUpdateArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * The data needed to update a comment.
     * 
    **/
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     * 
    **/
    where: commentWhereUniqueInput
  }


  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs = {
    /**
     * The data used to update comments.
     * 
    **/
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     * 
    **/
    where?: commentWhereInput
  }


  /**
   * comment upsert
   */
  export type commentUpsertArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * The filter to search for the comment to update in case it exists.
     * 
    **/
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     * 
    **/
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }


  /**
   * comment delete
   */
  export type commentDeleteArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter which comment to delete.
     * 
    **/
    where: commentWhereUniqueInput
  }


  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs = {
    /**
     * Filter which comments to delete
     * 
    **/
    where?: commentWhereInput
  }


  /**
   * comment: findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs = commentFindUniqueArgsBase
      

  /**
   * comment: findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs = commentFindFirstArgsBase
      

  /**
   * comment without action
   */
  export type commentArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CommentScalarFieldEnum: {
    comment_id: 'comment_id',
    comment: 'comment',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deleteAt: 'deleteAt',
    author_id: 'author_id',
    post_id: 'post_id'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostScalarFieldEnum: {
    post_id: 'post_id',
    title: 'title',
    thumbnail: 'thumbnail',
    content: 'content',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deleteAt: 'deleteAt',
    author_id: 'author_id'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    useremail: 'useremail',
    username: 'username',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deleteAt: 'deleteAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_snsScalarFieldEnum: {
    seq: 'seq',
    sns_id: 'sns_id',
    sns_type: 'sns_type',
    user_id: 'user_id'
  };

  export type User_snsScalarFieldEnum = (typeof User_snsScalarFieldEnum)[keyof typeof User_snsScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: StringFilter | string
    useremail?: StringFilter | string
    username?: StringFilter | string
    password?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    deleteAt?: DateTimeNullableFilter | Date | string | null
    sns_id?: XOR<User_snsRelationFilter, user_snsWhereInput> | null
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    useremail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    sns_id?: user_snsOrderByWithRelationInput
    posts?: postOrderByRelationAggregateInput
    comments?: commentOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = {
    id?: string
    useremail?: string
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    useremail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    useremail?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type user_snsWhereInput = {
    AND?: Enumerable<user_snsWhereInput>
    OR?: Enumerable<user_snsWhereInput>
    NOT?: Enumerable<user_snsWhereInput>
    seq?: IntFilter | number
    sns_id?: StringFilter | string
    sns_type?: EnumPROVIDERFilter | PROVIDER
    user_id?: StringFilter | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type user_snsOrderByWithRelationInput = {
    seq?: SortOrder
    sns_id?: SortOrder
    sns_type?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type user_snsWhereUniqueInput = {
    seq?: number
    sns_id?: string
    user_id?: string
  }

  export type user_snsOrderByWithAggregationInput = {
    seq?: SortOrder
    sns_id?: SortOrder
    sns_type?: SortOrder
    user_id?: SortOrder
    _count?: user_snsCountOrderByAggregateInput
    _avg?: user_snsAvgOrderByAggregateInput
    _max?: user_snsMaxOrderByAggregateInput
    _min?: user_snsMinOrderByAggregateInput
    _sum?: user_snsSumOrderByAggregateInput
  }

  export type user_snsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_snsScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_snsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_snsScalarWhereWithAggregatesInput>
    seq?: IntWithAggregatesFilter | number
    sns_id?: StringWithAggregatesFilter | string
    sns_type?: EnumPROVIDERWithAggregatesFilter | PROVIDER
    user_id?: StringWithAggregatesFilter | string
  }

  export type postWhereInput = {
    AND?: Enumerable<postWhereInput>
    OR?: Enumerable<postWhereInput>
    NOT?: Enumerable<postWhereInput>
    post_id?: StringFilter | string
    title?: StringFilter | string
    thumbnail?: StringFilter | string
    content?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    deleteAt?: DateTimeNullableFilter | Date | string | null
    author_id?: StringFilter | string
    author?: XOR<UserRelationFilter, userWhereInput>
    comments?: CommentListRelationFilter
  }

  export type postOrderByWithRelationInput = {
    post_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    author?: userOrderByWithRelationInput
    comments?: commentOrderByRelationAggregateInput
  }

  export type postWhereUniqueInput = {
    post_id?: string
  }

  export type postOrderByWithAggregationInput = {
    post_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    _count?: postCountOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: Enumerable<postScalarWhereWithAggregatesInput>
    OR?: Enumerable<postScalarWhereWithAggregatesInput>
    NOT?: Enumerable<postScalarWhereWithAggregatesInput>
    post_id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    thumbnail?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    author_id?: StringWithAggregatesFilter | string
  }

  export type commentWhereInput = {
    AND?: Enumerable<commentWhereInput>
    OR?: Enumerable<commentWhereInput>
    NOT?: Enumerable<commentWhereInput>
    comment_id?: StringFilter | string
    comment?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    deleteAt?: DateTimeNullableFilter | Date | string | null
    author_id?: StringFilter | string
    author?: XOR<UserRelationFilter, userWhereInput>
    post_id?: StringFilter | string
    post?: XOR<PostRelationFilter, postWhereInput>
  }

  export type commentOrderByWithRelationInput = {
    comment_id?: SortOrder
    comment?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    author?: userOrderByWithRelationInput
    post_id?: SortOrder
    post?: postOrderByWithRelationInput
  }

  export type commentWhereUniqueInput = {
    comment_id?: string
  }

  export type commentOrderByWithAggregationInput = {
    comment_id?: SortOrder
    comment?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    post_id?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<commentScalarWhereWithAggregatesInput>
    OR?: Enumerable<commentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<commentScalarWhereWithAggregatesInput>
    comment_id?: StringWithAggregatesFilter | string
    comment?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    author_id?: StringWithAggregatesFilter | string
    post_id?: StringWithAggregatesFilter | string
  }

  export type userCreateInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sns_id?: user_snsCreateNestedOneWithoutUserInput
    posts?: postCreateNestedManyWithoutAuthorInput
    comments?: commentCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sns_id?: user_snsUncheckedCreateNestedOneWithoutUserInput
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
    comments?: commentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sns_id?: user_snsUpdateOneWithoutUserNestedInput
    posts?: postUpdateManyWithoutAuthorNestedInput
    comments?: commentUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sns_id?: user_snsUncheckedUpdateOneWithoutUserNestedInput
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: commentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_snsCreateInput = {
    sns_id: string
    sns_type: PROVIDER
    user: userCreateNestedOneWithoutSns_idInput
  }

  export type user_snsUncheckedCreateInput = {
    seq?: number
    sns_id: string
    sns_type: PROVIDER
    user_id: string
  }

  export type user_snsUpdateInput = {
    sns_id?: StringFieldUpdateOperationsInput | string
    sns_type?: EnumPROVIDERFieldUpdateOperationsInput | PROVIDER
    user?: userUpdateOneRequiredWithoutSns_idNestedInput
  }

  export type user_snsUncheckedUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    sns_id?: StringFieldUpdateOperationsInput | string
    sns_type?: EnumPROVIDERFieldUpdateOperationsInput | PROVIDER
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_snsCreateManyInput = {
    seq?: number
    sns_id: string
    sns_type: PROVIDER
    user_id: string
  }

  export type user_snsUpdateManyMutationInput = {
    sns_id?: StringFieldUpdateOperationsInput | string
    sns_type?: EnumPROVIDERFieldUpdateOperationsInput | PROVIDER
  }

  export type user_snsUncheckedUpdateManyInput = {
    seq?: IntFieldUpdateOperationsInput | number
    sns_id?: StringFieldUpdateOperationsInput | string
    sns_type?: EnumPROVIDERFieldUpdateOperationsInput | PROVIDER
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type postCreateInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author: userCreateNestedOneWithoutPostsInput
    comments?: commentCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
    comments?: commentUncheckedCreateNestedManyWithoutPostInput
  }

  export type postUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: userUpdateOneRequiredWithoutPostsNestedInput
    comments?: commentUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postCreateManyInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
  }

  export type postUpdateManyMutationInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author: userCreateNestedOneWithoutCommentsInput
    post: postCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
    post_id: string
  }

  export type commentUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: userUpdateOneRequiredWithoutCommentsNestedInput
    post?: postUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateManyInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
    post_id: string
  }

  export type commentUpdateManyMutationInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentUncheckedUpdateManyInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type User_snsRelationFilter = {
    is?: user_snsWhereInput | null
    isNot?: user_snsWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    useremail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    useremail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    useremail?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumPROVIDERFilter = {
    equals?: PROVIDER
    in?: Enumerable<PROVIDER>
    notIn?: Enumerable<PROVIDER>
    not?: NestedEnumPROVIDERFilter | PROVIDER
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_snsCountOrderByAggregateInput = {
    seq?: SortOrder
    sns_id?: SortOrder
    sns_type?: SortOrder
    user_id?: SortOrder
  }

  export type user_snsAvgOrderByAggregateInput = {
    seq?: SortOrder
  }

  export type user_snsMaxOrderByAggregateInput = {
    seq?: SortOrder
    sns_id?: SortOrder
    sns_type?: SortOrder
    user_id?: SortOrder
  }

  export type user_snsMinOrderByAggregateInput = {
    seq?: SortOrder
    sns_id?: SortOrder
    sns_type?: SortOrder
    user_id?: SortOrder
  }

  export type user_snsSumOrderByAggregateInput = {
    seq?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumPROVIDERWithAggregatesFilter = {
    equals?: PROVIDER
    in?: Enumerable<PROVIDER>
    notIn?: Enumerable<PROVIDER>
    not?: NestedEnumPROVIDERWithAggregatesFilter | PROVIDER
    _count?: NestedIntFilter
    _min?: NestedEnumPROVIDERFilter
    _max?: NestedEnumPROVIDERFilter
  }

  export type postCountOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
  }

  export type PostRelationFilter = {
    is?: postWhereInput
    isNot?: postWhereInput
  }

  export type commentCountOrderByAggregateInput = {
    comment_id?: SortOrder
    comment?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    post_id?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    comment?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    post_id?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    comment_id?: SortOrder
    comment?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
    author_id?: SortOrder
    post_id?: SortOrder
  }

  export type user_snsCreateNestedOneWithoutUserInput = {
    create?: XOR<user_snsCreateWithoutUserInput, user_snsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_snsCreateOrConnectWithoutUserInput
    connect?: user_snsWhereUniqueInput
  }

  export type postCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type commentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<commentCreateWithoutAuthorInput>, Enumerable<commentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutAuthorInput>
    createMany?: commentCreateManyAuthorInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type user_snsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<user_snsCreateWithoutUserInput, user_snsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_snsCreateOrConnectWithoutUserInput
    connect?: user_snsWhereUniqueInput
  }

  export type postUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type commentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<commentCreateWithoutAuthorInput>, Enumerable<commentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutAuthorInput>
    createMany?: commentCreateManyAuthorInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type user_snsUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_snsCreateWithoutUserInput, user_snsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_snsCreateOrConnectWithoutUserInput
    upsert?: user_snsUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: user_snsWhereUniqueInput
    update?: XOR<user_snsUpdateWithoutUserInput, user_snsUncheckedUpdateWithoutUserInput>
  }

  export type postUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type commentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutAuthorInput>, Enumerable<commentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: commentCreateManyAuthorInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type user_snsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_snsCreateWithoutUserInput, user_snsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_snsCreateOrConnectWithoutUserInput
    upsert?: user_snsUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: user_snsWhereUniqueInput
    update?: XOR<user_snsUpdateWithoutUserInput, user_snsUncheckedUpdateWithoutUserInput>
  }

  export type postUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type commentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutAuthorInput>, Enumerable<commentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: commentCreateManyAuthorInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type userCreateNestedOneWithoutSns_idInput = {
    create?: XOR<userCreateWithoutSns_idInput, userUncheckedCreateWithoutSns_idInput>
    connectOrCreate?: userCreateOrConnectWithoutSns_idInput
    connect?: userWhereUniqueInput
  }

  export type EnumPROVIDERFieldUpdateOperationsInput = {
    set?: PROVIDER
  }

  export type userUpdateOneRequiredWithoutSns_idNestedInput = {
    create?: XOR<userCreateWithoutSns_idInput, userUncheckedCreateWithoutSns_idInput>
    connectOrCreate?: userCreateOrConnectWithoutSns_idInput
    upsert?: userUpsertWithoutSns_idInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutSns_idInput, userUncheckedUpdateWithoutSns_idInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutPostsInput = {
    create?: XOR<userCreateWithoutPostsInput, userUncheckedCreateWithoutPostsInput>
    connectOrCreate?: userCreateOrConnectWithoutPostsInput
    connect?: userWhereUniqueInput
  }

  export type commentCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type commentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type userUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<userCreateWithoutPostsInput, userUncheckedCreateWithoutPostsInput>
    connectOrCreate?: userCreateOrConnectWithoutPostsInput
    upsert?: userUpsertWithoutPostsInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutPostsInput, userUncheckedUpdateWithoutPostsInput>
  }

  export type commentUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type commentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type userCreateNestedOneWithoutCommentsInput = {
    create?: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentsInput
    connect?: userWhereUniqueInput
  }

  export type postCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postCreateWithoutCommentsInput, postUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentsInput
    connect?: postWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentsInput
    upsert?: userUpsertWithoutCommentsInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutCommentsInput, userUncheckedUpdateWithoutCommentsInput>
  }

  export type postUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<postCreateWithoutCommentsInput, postUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentsInput
    upsert?: postUpsertWithoutCommentsInput
    connect?: postWhereUniqueInput
    update?: XOR<postUpdateWithoutCommentsInput, postUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumPROVIDERFilter = {
    equals?: PROVIDER
    in?: Enumerable<PROVIDER>
    notIn?: Enumerable<PROVIDER>
    not?: NestedEnumPROVIDERFilter | PROVIDER
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumPROVIDERWithAggregatesFilter = {
    equals?: PROVIDER
    in?: Enumerable<PROVIDER>
    notIn?: Enumerable<PROVIDER>
    not?: NestedEnumPROVIDERWithAggregatesFilter | PROVIDER
    _count?: NestedIntFilter
    _min?: NestedEnumPROVIDERFilter
    _max?: NestedEnumPROVIDERFilter
  }

  export type user_snsCreateWithoutUserInput = {
    sns_id: string
    sns_type: PROVIDER
  }

  export type user_snsUncheckedCreateWithoutUserInput = {
    seq?: number
    sns_id: string
    sns_type: PROVIDER
  }

  export type user_snsCreateOrConnectWithoutUserInput = {
    where: user_snsWhereUniqueInput
    create: XOR<user_snsCreateWithoutUserInput, user_snsUncheckedCreateWithoutUserInput>
  }

  export type postCreateWithoutAuthorInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    comments?: commentCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateWithoutAuthorInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    comments?: commentUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutAuthorInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput>
  }

  export type postCreateManyAuthorInputEnvelope = {
    data: Enumerable<postCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type commentCreateWithoutAuthorInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    post: postCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutAuthorInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    post_id: string
  }

  export type commentCreateOrConnectWithoutAuthorInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutAuthorInput, commentUncheckedCreateWithoutAuthorInput>
  }

  export type commentCreateManyAuthorInputEnvelope = {
    data: Enumerable<commentCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type user_snsUpsertWithoutUserInput = {
    update: XOR<user_snsUpdateWithoutUserInput, user_snsUncheckedUpdateWithoutUserInput>
    create: XOR<user_snsCreateWithoutUserInput, user_snsUncheckedCreateWithoutUserInput>
  }

  export type user_snsUpdateWithoutUserInput = {
    sns_id?: StringFieldUpdateOperationsInput | string
    sns_type?: EnumPROVIDERFieldUpdateOperationsInput | PROVIDER
  }

  export type user_snsUncheckedUpdateWithoutUserInput = {
    seq?: IntFieldUpdateOperationsInput | number
    sns_id?: StringFieldUpdateOperationsInput | string
    sns_type?: EnumPROVIDERFieldUpdateOperationsInput | PROVIDER
  }

  export type postUpsertWithWhereUniqueWithoutAuthorInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutAuthorInput, postUncheckedUpdateWithoutAuthorInput>
    create: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput>
  }

  export type postUpdateWithWhereUniqueWithoutAuthorInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutAuthorInput, postUncheckedUpdateWithoutAuthorInput>
  }

  export type postUpdateManyWithWhereWithoutAuthorInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutPostsInput>
  }

  export type postScalarWhereInput = {
    AND?: Enumerable<postScalarWhereInput>
    OR?: Enumerable<postScalarWhereInput>
    NOT?: Enumerable<postScalarWhereInput>
    post_id?: StringFilter | string
    title?: StringFilter | string
    thumbnail?: StringFilter | string
    content?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    deleteAt?: DateTimeNullableFilter | Date | string | null
    author_id?: StringFilter | string
  }

  export type commentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutAuthorInput, commentUncheckedUpdateWithoutAuthorInput>
    create: XOR<commentCreateWithoutAuthorInput, commentUncheckedCreateWithoutAuthorInput>
  }

  export type commentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutAuthorInput, commentUncheckedUpdateWithoutAuthorInput>
  }

  export type commentUpdateManyWithWhereWithoutAuthorInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentScalarWhereInput = {
    AND?: Enumerable<commentScalarWhereInput>
    OR?: Enumerable<commentScalarWhereInput>
    NOT?: Enumerable<commentScalarWhereInput>
    comment_id?: StringFilter | string
    comment?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    deleteAt?: DateTimeNullableFilter | Date | string | null
    author_id?: StringFilter | string
    post_id?: StringFilter | string
  }

  export type userCreateWithoutSns_idInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    posts?: postCreateNestedManyWithoutAuthorInput
    comments?: commentCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateWithoutSns_idInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
    comments?: commentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userCreateOrConnectWithoutSns_idInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSns_idInput, userUncheckedCreateWithoutSns_idInput>
  }

  export type userUpsertWithoutSns_idInput = {
    update: XOR<userUpdateWithoutSns_idInput, userUncheckedUpdateWithoutSns_idInput>
    create: XOR<userCreateWithoutSns_idInput, userUncheckedCreateWithoutSns_idInput>
  }

  export type userUpdateWithoutSns_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postUpdateManyWithoutAuthorNestedInput
    comments?: commentUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateWithoutSns_idInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: commentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type userCreateWithoutPostsInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sns_id?: user_snsCreateNestedOneWithoutUserInput
    comments?: commentCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateWithoutPostsInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sns_id?: user_snsUncheckedCreateNestedOneWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userCreateOrConnectWithoutPostsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPostsInput, userUncheckedCreateWithoutPostsInput>
  }

  export type commentCreateWithoutPostInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author: userCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutPostInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
  }

  export type commentCreateOrConnectWithoutPostInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentCreateManyPostInputEnvelope = {
    data: Enumerable<commentCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutPostsInput = {
    update: XOR<userUpdateWithoutPostsInput, userUncheckedUpdateWithoutPostsInput>
    create: XOR<userCreateWithoutPostsInput, userUncheckedCreateWithoutPostsInput>
  }

  export type userUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sns_id?: user_snsUpdateOneWithoutUserNestedInput
    comments?: commentUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sns_id?: user_snsUncheckedUpdateOneWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type commentUpsertWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentUpdateWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
  }

  export type commentUpdateManyWithWhereWithoutPostInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type userCreateWithoutCommentsInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sns_id?: user_snsCreateNestedOneWithoutUserInput
    posts?: postCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateWithoutCommentsInput = {
    id?: string
    useremail: string
    username: string
    password?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sns_id?: user_snsUncheckedCreateNestedOneWithoutUserInput
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userCreateOrConnectWithoutCommentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
  }

  export type postCreateWithoutCommentsInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author: userCreateNestedOneWithoutPostsInput
  }

  export type postUncheckedCreateWithoutCommentsInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
  }

  export type postCreateOrConnectWithoutCommentsInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutCommentsInput, postUncheckedCreateWithoutCommentsInput>
  }

  export type userUpsertWithoutCommentsInput = {
    update: XOR<userUpdateWithoutCommentsInput, userUncheckedUpdateWithoutCommentsInput>
    create: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
  }

  export type userUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sns_id?: user_snsUpdateOneWithoutUserNestedInput
    posts?: postUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    useremail?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sns_id?: user_snsUncheckedUpdateOneWithoutUserNestedInput
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type postUpsertWithoutCommentsInput = {
    update: XOR<postUpdateWithoutCommentsInput, postUncheckedUpdateWithoutCommentsInput>
    create: XOR<postCreateWithoutCommentsInput, postUncheckedCreateWithoutCommentsInput>
  }

  export type postUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: userUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postUncheckedUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type postCreateManyAuthorInput = {
    post_id?: string
    title: string
    thumbnail: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type commentCreateManyAuthorInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    post_id: string
  }

  export type postUpdateWithoutAuthorInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutAuthorInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateManyWithoutPostsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentUpdateWithoutAuthorInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post?: postUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutAuthorInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyWithoutCommentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateManyPostInput = {
    comment_id?: string
    comment: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    author_id: string
  }

  export type commentUpdateWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: userUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}