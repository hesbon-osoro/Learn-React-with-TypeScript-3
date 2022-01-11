export class List<T> {
	private data: T[] = [];
	public getList(): T[] {
		return this.data;
	}
	public add(item: T) {
		this.data.push(item);
	}
	public remove(item: T) {
		this.data = this.data.filter((dataItem: T) => {
			return !this.equals(item, dataItem);
		});
	}
	private equals(obj1: T, obj2: T) {
		return Object.keys(obj1).every(key => {
			return obj1[key] === obj2[key];
		});
	}
}

export interface IPerson {
	id: number;
	name: string;
}
export const billy: IPerson = { id: 1, name: 'Billy' };
export const people = new List<IPerson>();
people.add(billy);
people.remove(billy);

export const items  = people.getList()