class SplitText extends React.Component {
    static defaultProps = { delimiter: ',' };
    render() {
        // using the ! to tell the compiler delimiter will never be undefined in TypeScript 2.9
        // const bits = this.props.text.split(this.props.delimiter!)
        // no need to tell the compiler about the delimiter property in TypeScript 3
        const bits = this.props.text.split(this.props.delimiter);
        return ({ bits, : .map((bit) => key = { bit } > { bit } < /li>)
        }
            < /ul>);
    }
}
const App = () => text = "Fred,Jane,Bob" /  >
    /div>;
export default App;
//# sourceMappingURL=some_react.js.map