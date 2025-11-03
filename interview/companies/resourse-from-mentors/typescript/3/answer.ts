type UnUnser<K> = {
  [key in keyof K]?: K[key];
};
