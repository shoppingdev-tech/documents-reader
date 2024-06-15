import {config} from '@tamagui/config';
import {
	createFont,
	createTamagui,
	getVariableValue,
	createTokens,
} from 'tamagui';
import {color, radius, size, space, /*themes,*/ zIndex} from '@tamagui/themes';

const sizes = {
	1: 11,
	2: 12,
	3: 13,
	4: 14,
	true: 14,
};

const tokens = createTokens({
	size,
	space,
	zIndex,
	color: {
		...color,
		primary: '#DC143C',
		backgroundPrimary: '#F2F4F6',
		backgroundGreen: '#F5FCFA',
		borderColor: '#F5F5F5',
		snow: '#FFFAFA',
		grayTextColor: '#717171',
		grayDarkTextColor: '#808080',
		textPrimary: '#1F2937',
		textSecondary: '#374151',
		textTertiary: '#6B7280',
		strokeButton: '#CCD4DC',
		white: '#FFFFFF',
		black: '#000000',
		blackTextColor: '#121212',
		primaryBlue: '#002852',
		purpleTextColor: '#3D5272',
		gray7: '#8C8C8C',
		gray50: '#F9FAFB',
		gray100: '#F3F4F6',
		gray200: '#E5E7EB',
		gray300: '#D1D5DB',
		gray400: '#9CA3AF',
		gray600: '#4B5563',
		gray800: '#1F2937',
		gray900: '#262626',
		green50: '#F0FDF4',
		green500: '#22C55E',
		green600: '#16A34A',
		green300: '#DDF3E4',
		green700: '#15803D',
		green800: '#008A5A',
		green900: '#309763',
		textGreen: '#008053',
		textInputGreen: '#01A86E',
		lightGreen: '#EBF9F4',
		green10: '#EBF6F2',
		green5: '#F5FCF9',
		green6: '#D8F3E9',
		slate900: '#002852',
		slate700: '#4D6986',
		slate500: '#8093A8',
		slate300: '#B2BECB',
		slate350: '#D1E3EF',
		slate400: '#99A9BA',
		slate200: '#CBD5E1',
		slate100: '#E5E9EE',
		slate55: '#E0E5EA',
		slate10: '#f5f5f5',
		warning: '#D46B08',
		error: '#B92406',
		orange10: '#FEF4EC',
		lightError: '#FEF0F0',
		red100: '#FCE2E2',
		red900: '#7F1D1D',
		amber700: '#B45309',
		amber100: '#F2D1AA',
		amber50: '#FDF7F0',
		amber20: '#F8E8D9',
		amber10: '#FDF9F5',
		orange100: '#FFEDD5',
		gray8: '#595959',
		red600: '#DC2626',
		red700: '#B91C1C',
		neutral900: '#1E1E24',
		blackOverlay: 'rgba(0, 0, 0, 1)',
		blue50: '#EFF6FF',
		blue500: '#3B82F6',
		emerald50: '#ECFDF5',
	},
	radius,
});

const sizeLineHeight = (size) => size + 10;
const sizeSize = (size) => size * 1;

const interfont = createFont({
	family: 'Inter',
	size: Object.fromEntries(
		Object.entries(sizes).map(([k, v]) => [k, sizeSize(+v)]),
	),
	lineHeight: Object.fromEntries(
		Object.entries(sizes).map(([k, v]) => [
			k,
			sizeLineHeight(getVariableValue(v)),
		]),
	),
	weight: {
		1: '400',
		2: '500',
		3: '600',
		4: '700',
		true: '400',
	},
	letterSpacing: {
		1: 0,
		2: -1,
		3: -1,
		4: -1,
		true: 0,
	},
	face: {
		400: {normal: 'Inter-Regular', italic: 'Inter-Italic'},
		500: {normal: 'Inter-Medium', italic: 'Inter-MediumItalic'},
		600: {normal: 'Inter-SemiBold', italic: 'Inter-SemiBoldItalic'},
		700: {normal: 'Inter-Bold', italic: 'Inter-BoldItalic'},
	},
});

const poppinsFont = createFont({
	family: 'Poppins',
	size: {
		1: 12,
		2: 14,
		3: 15,
		true: 14,
	},
	lineHeight: {
		// 1 will be 22
		1: 22,
		2: 22,
		3: 22,
		true: 22,
	},
	weight: {
		1: '300',
		// 2 will be 300
		2: '300',
		3: '600',
		true: '300',
	},
	letterSpacing: {
		1: 0,
		2: -1,
		3: -1,
		// 3 will be -1
	},
	// (native) swap out fonts by face/style
	face: {
		300: {normal: 'Poppins-Regular', italic: 'Poppins-Italic'},
		500: {normal: 'Poppins-Medium'},
		700: {normal: 'Poppins-SemiBold', italic: 'Poppins-SemiBoldItalic'},
		900: {normal: 'Poppins-Bold'},
	},
});

const tamagui = createTamagui({
	...config,
	themes: {
		light: {
			background: tokens.color.backgroundPrimary,
			color: tokens.color.textPrimary,
		},
	},
	tokens,
	fonts: {
		heading: interfont,
		body: interfont,
		poppins: poppinsFont,
	},
});

export default tamagui;


