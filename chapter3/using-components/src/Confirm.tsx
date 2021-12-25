import React, { Component } from 'react';
import './Confirm.css';
class Confirm extends Component {
	public render() {
		return (
			<div className="confirm-wrapper confirm-visible">
				<div className="confirm-container">
					<div className="confirm-title-container">
						<span>Title</span>
					</div>
					<div className="confirm-content-container">
						<p>Content</p>
					</div>
					<div className="confirm-buttons-container">
						<button className="confirm-cancel">Cancel</button>
						<button className="confirm-ok">Okay</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Confirm;
