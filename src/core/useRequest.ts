import * as React from "react";

export function useRequest<T>(request: () => Promise<T>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<T | undefined>(undefined);

  React.useEffect(() => {
    setIsLoading(true);

    request()
      .then((v) => setData(v))
      .finally(() => setIsLoading(false));
  }, [request]);

  return [data, { isLoading }] as const;
}
