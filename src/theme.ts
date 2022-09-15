export const theme: Theme = {
	colors: {
		primary: {
			['Dark cyan']: 'hsl(158, 36%, 37%)',
			['Cream']: 'hsl(30, 38%, 92%)',
		},
		neutral: {
			['Very dark blue']: 'hsl(212, 21%, 14%)',
			['Dark grayish blue']: 'hsl(228, 12%, 48%)',
			['White']: 'hsl(0, 0%, 100%)',
		},
	},
	['Font Size paragraph']: '14px',
	fonts: {
		Montserrat: 'Montserrat',
		Fraunces: 'Fraunces'
	}
};

export type Theme = {
	colors: {
		primary: {
			['Dark cyan']: string;
			['Cream']: string;
		};
		neutral: {
			['Very dark blue']: string;
			['Dark grayish blue']: string;
			['White']: string;
		};
	};
	['Font Size paragraph']: string;
	fonts: {
		Montserrat: string;
		Fraunces: string;
	}
};