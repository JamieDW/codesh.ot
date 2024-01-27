export type Direction = {
	name: string;
	class: string;
};

export const directions: Direction[] = [
	{
		name: 'To Top',
		class: 'bg-gradient-to-t'
	},
	{
		name: 'To Top Right',
		class: 'bg-gradient-to-tr'
	},
	{
		name: 'To Right',
		class: 'bg-gradient-to-r'
	},
	{
		name: 'To Bottom Right',
		class: 'bg-gradient-to-br'
	},
	{
		name: 'To Bottom',
		class: 'bg-gradient-to-b'
	},
	{
		name: 'To Bottom Left',
		class: 'bg-gradient-to-bl'
	},
	{
		name: 'To Left',
		class: 'bg-gradient-to-l'
	},
	{
		name: 'To Top Left',
		class: 'bg-gradient-to-tl'
	},
	{
		name: 'Radial Center',
		class: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Top',
		class: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Top Right',
		class: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Right',
		class: 'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Bottom Right',
		class: 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Bottom',
		class: 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Bottom Left',
		class: 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Left',
		class: 'bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Radial Top Left',
		class: 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Center',
		class: 'bg-[conic-gradient(var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Top',
		class: 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Top Right',
		class: 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Right',
		class: 'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Bottom Right',
		class: 'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Bottom',
		class: 'bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Bottom Left',
		class: 'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Left',
		class: 'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]'
	},
	{
		name: 'Conic Top Left',
		class: 'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]'
	}
];
