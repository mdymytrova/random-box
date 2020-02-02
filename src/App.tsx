import * as React from 'react';
import './App.scss';
import Box from './Box';
import { AllColors } from './allColors.constant';

type Props = {
	allColors: string[]
};
type State = {
	boxColors: string[]
};

class App extends React.Component<Props, State> {
	private boxesNumber: number = 32;

	static defaultProps: Props = {
		allColors: AllColors
	};

	  constructor(props: Props) {
		super(props);

		this.state = {
			boxColors: this.getInitialColors()
		};

		setInterval((): void => {
			this.updateRandomBoxColor();
		}, 300);

	  }
	  
	render(): React.ReactNode {
		const { boxColors } = this.state; 
		return (
			<div className="app">
			  	{boxColors.map((color: string, index: number) => {
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
		const boxColors: string[] = [...this.state.boxColors];
		boxColors[this.getRandomIndex()] = allColors[this.getRandomIndex(allColors.length)];
		this.setState({boxColors});
	}

	private getRandomIndex = (length: number = this.boxesNumber): number => {
		return Math.floor(Math.random() * length);
	}
}

export default App;