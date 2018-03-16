export const isType = (value) => {
  return (value && Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1]);
};
