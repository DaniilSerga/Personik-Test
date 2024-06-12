/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px',
			},
			spacing: {
				'17px': '17px',
			},
			colors: {
				'coolGray-50': '#F9FAFB',
				'coolGray-100': '#F3F4F6',
				'coolGray-200': '#E5E7EB',
				'coolGray-300': '#D1D5DB',
				'coolGray-400': '#9CA3AF',
				'coolGray-500': '#6B7280',
				'coolGray-600': '#4B5563',
				'coolGray-700': '#374151',
				'coolGray-800': '#1F2937',
				'coolGray-900': '#111827',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
