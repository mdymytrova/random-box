import * as React from 'react';
import './App.scss';
import Box from './Box';
import { AllColors } from './allColors.constant';

type Props = {
	allColors: string[]
};
class App extends React.Component<Props, {randomBoxNumber: number}> {
	private boxesNumber: number = 32;
	private initialColors: string[];

	static defaultProps: Props = {
		allColors: AllColors
	};

	  constructor(props: Props) {
		super(props);

		this.initialColors = this.getInitialColors();

		setInterval((): void => {
			this.setState({randomBoxNumber: this.getRandomIndex()});
			this.updateRandomBoxColor();
		}, 300);

	  }
	  
	render(): React.ReactNode {
		return (
			<div className="app">
			  	{this.initialColors.map((color: string, index: number) => {
					return (
						<Box key={index} color={color} />
					);
				})}
			</div>
		  );
	}

	private getInitialColors = (): string[] => {
		const { allColors } = this.props;
		return [...new Array(this.boxesNumber)].map((element: any) => {
			return allColors[this.getRandomIndex(allColors.length)];
		});
	}

	private updateRandomBoxColor = (): void => {
		const { allColors } = this.props;
		const { randomBoxNumber } = this.state;
		this.initialColors[randomBoxNumber] = allColors[this.getRandomIndex(allColors.length)];
	}

	private getRandomIndex = (length: number = this.boxesNumber): number => {
		return Math.floor(Math.random() * length);
	}
}

export default App;