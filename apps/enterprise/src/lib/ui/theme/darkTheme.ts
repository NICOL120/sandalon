import { DefaultTheme } from 'styled-components';
import { HSLA } from 'lib/ui/colors/HSLA';
import { sharedColors } from './shared';
import { generateLabelColorGetter } from '../colors/generateLabelColorGetter';

const backgroundHue = 60;
const backgroundSaturation = 28;
const backgroundLightness = 0;
const backgroundAlpa = 0.19;

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    ...sharedColors,

    success: new HSLA(130, 56, 52),
    alert: new HSLA(0, 79, 63),
    idle: new HSLA(32, 79, 48),

    foreground: new HSLA(backgroundHue, backgroundSaturation, backgroundLightness + 3, backgroundAlpa),
    background: new HSLA(0, 0, 0, 1),
    text: new HSLA(0, 0, 100, 0.81),
    textSupporting: new HSLA(0, 0, 0, 1),
    textShy: new HSLA(0, 0, 100, 0.28),

    mist: new HSLA(233, 100, 9, 0.66),
    mistExtra: new HSLA(55, 93, 52, 0.6),

    overlay: new HSLA(backgroundHue, backgroundSaturation, 1, 0.8),

    getLabelColor: generateLabelColorGetter({
      saturation: 56,
      lightness: 52,
    }),

    contrast: new HSLA(0, 0, 100),
  },
  shadows: {
    small: 'rgb(248 231 23 / 20%) 0px 0px 0px 1px, rgb(248 231 23 / 20%) 0px 2px 4px',
    medium: 'rgb(248 231 23 / 10%) 0px 0px 0px 1px, rgb(248 231 23 / 20%) 0px 3px 6px, rgb(248 231 23 / 40%) 0px 9px 24px;',
  },
};
