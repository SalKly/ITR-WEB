export const TryParseJson = (json: string): object | undefined => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return undefined;
  }
};
