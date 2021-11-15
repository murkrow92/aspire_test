import { useState, useCallback } from "react";

export const useSetState = (initialState: any) => {
  const [state, set] = useState(initialState);
  const setState = useCallback(
    patch => {
      set((prevState: any) =>
        Object.assign(
          {},
          prevState,
          patch instanceof Function ? patch(prevState) : patch,
        ),
      );
    },
    [set],
  );

  return [state, setState];
};
