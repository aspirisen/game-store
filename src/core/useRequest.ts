import * as React from "react";

export function useRequest<T>(request: () => Promise<T>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<T | undefined>(undefined);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    setIsLoading(true);

    request()
      .then((v) => isMounted.current && setData(v))
      .finally(() => isMounted.current && setIsLoading(false));
  }, [request]);

  return [data, { isLoading }] as const;
}
