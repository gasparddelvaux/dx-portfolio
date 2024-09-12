export type Code = {
  variableName: string;
  type: string;
  content: {
    [key: string]: string | string[] | boolean | number | object;
  };
};
