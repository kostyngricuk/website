import type { Config } from 'tailwindcss';

export enum ThemeColors {
  black = '#222831',
  lightBlack = '#31363F',
  white = '#EEEEEE',
  milk = '#FBF8EF',
  blue = '#78B3CE',
  lightBlue = '#C9E6F0',
  orange = '#F96E2A',
  lightOrange = '#FFB38E',
  green = '#9ABF80',
  lightGreen = '#C9DABF',
  yellow = '#FFB200',
  red = '#D91656',
  purple = '#640D5F',
}

enum Screens {
  sm = '480px',
  md = '768px',
  lg = '976px',
  xl = '1440px',
}

enum borderRadiuses {
  none = '0',
  sm = '.125rem',
  DEFAULT = '.25rem',
  lg = '.5rem',
  full = '9999px',
}

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: Screens,
    colors: ThemeColors,
    fontFamily: {
      sans: ['Saira', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['22px', '38px'],
        lg: ['30px', '38px'],
        xl: ['44px', '52px'],
      },
      borderRadius: borderRadiuses,
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
    },
    plugins: [],
  },
} satisfies Config;
