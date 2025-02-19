export const waitMs = (timeout: number): Promise<void> => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, timeout);
  });
};
