import { keys, pipe } from '../utils/utils'

export const toBase = (px) => px / 16

export const rem = pipe(toBase, (x) => `${x}rem`)

export const spacing = (tracking, fontSize) => tracking / (fontSize * 16) * 1

export const weightValues = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
}

export const leadings = {
  headline1: rem(96),
  headline2: rem(60),
  headline3: rem(50),
  headline4: rem(40),
  headline5: rem(32),
  headline6: rem(32),
  subtitle1: rem(28),
  subtitle2: rem(22),
  body1: rem(24),
  body2: rem(20),
  caption: rem(20),
  button: rem(36),
  overline: rem(32),
}

export const sizes = {
  headline1: rem(96),
  headline2: rem(60),
  headline3: rem(48),
  headline4: rem(34),
  headline5: rem(24),
  headline6: rem(20),
  subtitle1: rem(16),
  subtitle2: rem(14),
  body1: rem(16),
  body2: rem(14),
  caption: rem(12),
  button: rem(14),
  overline: rem(10),
}

export const trackings = {
  headline1: `${spacing(-1.5, toBase(96))}em`,
  headline2: `${spacing(-0.5, toBase(60))}em`,
  headline3: 'normal',
  headline4: `${spacing(0.25, toBase(34))}em`,
  headline5: 'normal',
  headline6: `${spacing(0.25, toBase(20))}em`,
  subtitle1: `${spacing(0.15, toBase(16))}em`,
  subtitle2: `${spacing(0.1, toBase(14))}em`,
  body1: `${spacing(0.5, toBase(16))}em`,
  body2: `${spacing(0.25, toBase(14))}em`,
  caption: `${spacing(0.4, toBase(12))}em`,
  button: `${spacing(0.125, toBase(14))}em`,
  overline: `${spacing(2, toBase(10))}em`,
}

export const weights = {
  headline1: weightValues.light,
  headline2: weightValues.light,
  headline3: weightValues.regular,
  headline4: weightValues.regular,
  headline5: weightValues.regular,
  headline6: weightValues.medium,
  subtitle1: weightValues.regular,
  subtitle2: weightValues.medium,
  body1: weightValues.regular,
  body2: weightValues.regular,
  caption: weightValues.regular,
  button: weightValues.medium,
  overline: weightValues.regular,
}

export const decorations = {
  headline1: 'inherit',
  headline2: 'inherit',
  headline3: 'inherit',
  headline4: 'inherit',
  headline5: 'inherit',
  headline6: 'inherit',
  subtitle1: 'inherit',
  subtitle2: 'inherit',
  body1: 'inherit',
  body2: 'inherit',
  caption: 'inherit',
  button: 'none',
  overline: 'none',
}

export const transforms = {
  headline1: 'inherit',
  headline2: 'inherit',
  headline3: 'inherit',
  headline4: 'inherit',
  headline5: 'inherit',
  headline6: 'inherit',
  subtitle1: 'inherit',
  subtitle2: 'inherit',
  body1: 'inherit',
  body2: 'inherit',
  caption: 'inherit',
  button: 'uppercase',
  overline: 'uppercase',
}

export const createTypescale = (typescale = leadings, props = {
  leadings,
  sizes,
  weights,
  trackings,
  decorations,
  transforms,
}) =>
  keys(typescale).reduce((acc, scale) => {
    acc[scale] = `
      font-size: ${props.sizes[scale]};
      line-height: ${props.leadings[scale]};
      font-weight: ${props.weights[scale]};
      letter-spacing: ${props.trackings[scale]};
      text-decoration: ${props.decorations[scale]};
      text-transform: ${props.transforms[scale]};
    `
    return acc
  }, {})


export const defaultTypography = createTypescale()
