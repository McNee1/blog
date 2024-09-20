export const classNames = (
  ...args: (
    | string
    | Record<string, boolean>
    | (string | boolean)[]
    | undefined
    | boolean
  )[]
): string => {
  const res = args
    .filter((cls) => Boolean(cls))
    .map((cls) => {
      if (Array.isArray(cls)) {
        return cls.filter((el) => Boolean(el)).join(' ');
      }
      if (typeof cls === 'object') {
        return (
          Object.entries(cls)
            // TODO
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, val]) => val)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([className, _]) => className)
            .join(' ')
        );
      } else {
        return cls;
      }
    });

  return res.join(' ').trim();
};
