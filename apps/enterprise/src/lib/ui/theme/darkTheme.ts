import { GradientBackground, GradientAnimation } from './gradient'; // Ganti dengan path file yang sesuai
import { DefaultTheme } from 'styled-components';
import { HSLA } from 'lib/ui/colors/HSLA';
import { sharedColors } from './shared';
import { generateLabelColorGetter } from '../colors/generateLabelColorGetter';

const backgroundHue = 0;
const backgroundSaturation = 0;
const backgroundLightness = 10;

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    ...sharedColors,

    success: new HSLA(130, 56, 52),
    alert: new HSLA(0, 79, 63),
    idle: new HSLA(32, 79, 48),

    foreground: new HSLA(backgroundHue, backgroundSaturation, backgroundLightness + 3),
    background: new HSLA(backgroundHue, backgroundSaturation, backgroundLightness),
    text: new HSLA(0, 0, 100, 0.81),
    textSupporting: new HSLA(0, 0, 61),
    textShy: new HSLA(0, 0, 100, 0.28),

    mist: new HSLA(0, 0, 100, 0.06),
    mistExtra: new HSLA(0, 0, 0, 0, GradientBackground),
    overlay: new HSLA(backgroundHue, backgroundSaturation, 1, 0.8),

    getLabelColor: generateLabelColorGetter({
      saturation: 56,
      lightness: 52,
    }),

    contrast: new HSLA(0, 0, 100),
  },
  animations: {
    gradientAnimation: GradientAnimation, // Menggunakan animasi gradien
    // ... (properti animasi lainnya)
  },
  shadows: {
    small: 'rgb(248 231 23 / 20%) 0px 0px 0px 1px, rgb(248 231 23 / 20%) 0px 2px 4px',
    medium: 'rgb(248 231 23 / 10%) 0px 0px 0px 1px, rgb(248 231 23 / 20%) 0px 3px 6px, rgb(248 231 23 / 40%) 0px 9px 24px',
  },
};
