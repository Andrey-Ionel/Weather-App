export interface Theme {
  // Background
  systemBackgroundGradient: string[];
  searchBackgroundGradient: string[];

  // Separator
  separatorPrimary: string;

  // Text
  textPrimary: string;
}

export const lightMode: Theme = {
  // Background
  systemBackgroundGradient: ['#3F8D73', '#1A434C', '#102F40', '#061A2F'],
  searchBackgroundGradient: ['#fff', '#EBEBEB', '#CDCDCD', '#828C91'],

  // Separator
  separatorPrimary: '#999999',

  // Text
  textPrimary: '#fff',
};

export default lightMode;