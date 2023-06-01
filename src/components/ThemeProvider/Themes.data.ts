import themes from './Themes.module.scss';

export default {
  default: {
    primaryColor: themes.colorOrange,
    accentColor: themes.colorGreen,
    backgroundColor: themes.colorLightOrange,
    textColor: themes.colorGrey,
    secondaryColor: themes.colorOrangeBrown,
  },
  dark: {
    primaryColor: themes.colorOrange,
    accentColor: themes.colorGreen,
    backgroundColor: themes.colorGrey,
    textColor: themes.colorLightOrange,
    secondaryColor: themes.colorBlack,
  },
} as { [key: string]: { [key: string]: string } };
