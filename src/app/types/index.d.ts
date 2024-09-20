// type DeepPartial<T> = {
//   [P in keyof T]?: T[P] extends (infer U)[]
//     ? DeepPartial<U>[]
//     : T[P] extends readonly (infer U)[]
//     ? readonly DeepPartial<U>[]
//     : T[P] extends object
//     ? DeepPartial<T[P]>
//     : T[P];
// };
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type AxiosRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: import('axios').AxiosRequestConfig };
