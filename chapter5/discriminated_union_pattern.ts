export interface ITextbox {
	control: 'Textbox';
	value: string;
	multilini: boolean;
}

export interface IDatePicker {
	control: 'DatePicker';
	value: Date;
}
export interface INumberSlider {
	control: 'NumberSlider';
	value: number;
}
export interface ICheckbox {
	control: 'Checkbox';
	value: boolean;
}
export type Field = ITextbox | IDatePicker | INumberSlider | ICheckbox;

export function initializeValue(field: Field) {
	switch (field.control) {
		case 'Textbox':
			field.value = '';
			break;
		case 'DatePicker':
			field.value = new Date();
			break;
		case 'NumberSlider':
			field.value = 0;
			break;
		case 'Checkbox':
			field.value = false;
			break;
		default:
			const shouldNotReach: never = field;
	}
}
