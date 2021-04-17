const SIZE = {
    SP_S: 320,
    SP_M: 375,
    SP_L: 425,
    BORDER: 768,
    PC_S: 1024,
    PC_M: 1440,
    PC_L: 2560
}

const DEVICE = {
    SP_S: `(min-width: ${SIZE.SP_S}px)`,
    SP_M: `(min-width: ${SIZE.SP_M}px)`,
    SP_L: `(min-width: ${SIZE.SP_L}px)`,
    BORDER: `(min-width: ${SIZE.BORDER}px)`,
    PC_S: `(min-width: ${SIZE.PC_S}px)`,
    PC_M: `(min-width: ${SIZE.PC_M}px)`,
    PC_L: `(min-width: ${SIZE.PC_L}px)`,
} as const

const FONT_SIZE = {
    XXXLARGE: 2.5,//40px
    XXLARGE: 2,//32px
    XLARGE: 1.5,//24px
    LARGE: 1.3125,//21px
    LMEDIUM: 1.125,//18px
    MEDIUM: 1,//16px
    LBASE: 0.9375,//15px
    BASE: 0.875,//14px
    SBASE: 0.8125,//13px
    SMALL: 0.75,//12px
    XSMALL: 0.6875,//11px
    XXSMALL: 0.625,//10px
    XXXSMALL: 0.5,//8
} as const

const FONT_WEIGHT = {
    NORMAL: 400,
    BOLD: 600,
} as const

const BORDER_WHIGHT = {
    NORMAL: 1,
    BOLD: 2,
} as const

const BORDER_RADIUS = 4

const COLOR = {
    PRIMARY: '#111111',
    SECONDARY: '#555555',
    TINT: '#999999',
    BLACK_HIGH: 'rgba(0,0,0,0.87)',
    BLACK_MIDDLE: 'rgba(0,0,0,0.54)',
    BLACK_LOW: 'rgba(0,0,0,0.26)',
    BLACK_XLOW: 'rgba(0,0,0,0.12)',
    WHITE_HIGH: 'rgba(255,255,255,1)',
    WHITE_MIDDLE: 'rgba(255,255,255,0.7)',
    WHITE_LOW: 'rgba(255,255,255,0.3)',
    WHITE_XLOW: 'rgba(255,255,255,0.1)',

} as const

export {
    SIZE,
    DEVICE,
    FONT_SIZE,
    FONT_WEIGHT,
    BORDER_WHIGHT,
    BORDER_RADIUS,
    COLOR,
}