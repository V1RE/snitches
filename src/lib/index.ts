import { createStitches } from '$lib/createStitches';

export const { css, globalCss, keyframes, getCssText, theme, createTheme, config, styled } =
	createStitches({
		theme: {
			colors: {
				gray400: 'gainsboro',
				gray500: 'lightgray',
				primary: '$gray400'
			}
		},
		media: {
			bp1: '(min-width: 480px)'
		},
		utils: {
			marginX: (value) => ({ marginLeft: value, marginRight: value })
		}
	});
