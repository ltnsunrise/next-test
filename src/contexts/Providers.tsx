/* eslint-disable @typescript-eslint/no-explicit-any */

import { getTodoList } from "@/data/get-todo-list";
import { TodoProvider } from "./TodoContext";

/* eslint-disable react/display-name */
type ProviderConfig =
  | {
      provider: React.ComponentType<any>;
      props?: Record<string, any>;
    }
  | null
  | undefined;

export function combineProviders(configs?: ProviderConfig[]) {
  const validConfigs = (configs ?? []).filter((c): c is Exclude<ProviderConfig, null | undefined> => !!c);

  return validConfigs.reduce(
    (Accumulated, { provider: Provider, props }) =>
      ({ children }: { children: React.ReactNode }) =>
        (
          <Accumulated>
            <Provider {...(props || {})}>{children}</Provider>
          </Accumulated>
        ),
    ({ children }: { children: React.ReactNode }) => <>{children}</>,
  );
}

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const Combined = combineProviders([{ provider: TodoProvider, props: { todoPromise: getTodoList() } }]);
  return <Combined>{children}</Combined>;
};
