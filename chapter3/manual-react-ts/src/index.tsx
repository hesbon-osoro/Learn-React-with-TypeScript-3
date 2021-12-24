import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.SFC = () => {
	return <h1>React and TypeScript</h1>;
};

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
