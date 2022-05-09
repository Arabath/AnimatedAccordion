import React from 'react'
import AccordionItem from './AccordionItem';


class Accordion extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: 0
		};
		
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}
	
	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
					<AccordionItem
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel } 
						activateTab={ this.activateTab.bind(null, index) }
					/>
				)}
			</div>
		);
	}
}

const panels = [
	{
		label: 'Label 1',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
	},
	{
		label: 'Label 2',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
	},	
	{
		label: 'Label 3',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
	},
	{
		label: 'Label 4',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
	},
	{
		label: 'Label 5',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
];

const App = document.querySelector('#app');

ReactDOM.render(<Accordion panels={ panels }/>, App);