export type ClassType =
  | string
  | Partial<Record<string, boolean>>
  | Array<string | ClassType>
  | undefined;
