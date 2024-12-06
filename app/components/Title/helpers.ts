export enum TitleTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

export const getClassName = (size: TitleTypes) => {
  switch (size) {
    case TitleTypes.h1:
      return 'text-6xl';
    case TitleTypes.h2:
      return 'text-5xl';
    case TitleTypes.h3:
      return 'text-4xl';
  }
};
