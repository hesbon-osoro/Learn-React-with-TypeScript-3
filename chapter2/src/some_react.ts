export interface IProps {
	text: string;
	// making delimiter to be optional in TypeScript 2.9
	// delimiter?:string
	// using delimiter in TypeScript 3
	delimiter: string;
}

class SplitText extends React.Component<IProps> {
	static defaultProps = { delimiter: ',' };

	render() {
		// using the ! to tell the compiler delimiter will never be undefined in TypeScript 2.9
		// const bits = this.props.text.split(this.props.delimiter!)
		// no need to tell the compiler about the delimiter property in TypeScript 3
		const bits = this.props.text.split(this.props.delimiter);

		return (
			<ul>
				{bits.map((bit: string) => (
					<li key={bit}>{bit}</li>
				))}
			</ul>
		);
	}
}

const App = () => (
	<div>
		<SplitText text="Fred,Jane,Bob" />
	</div>
);

export default App;
