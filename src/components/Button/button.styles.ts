export interface ColorShades {
  200?: string;
  400?: string;
  500?: string;
  600?: string;
}

export interface Colors {
  primary: ColorShades;
  secondary: ColorShades;
  success: ColorShades;
  warning: ColorShades;
  danger: ColorShades;
}

export const colors: Colors = {
  primary: {
    200: '#FFCEAD',
    500: '#FA8232',
    600: '#DE732D',
  },
  secondary: {
    200: '#ABDBFA',
    500: '#2DA5F3',
    600: '#2484C2',
  },
  success: {
    200: '#ABE0A7',
    500: '#2DB224',
    600: '#248E1D',
  },
  warning: {
    200: '#F7E99E',
    400: '#EFD33D',
    500: '#EBC80C',
    600: '#BCA00A',
  },
  danger: {
    200: '#F8BCBC',
    500: '#EE5858',
    600: '#BE4646',
  },
};
