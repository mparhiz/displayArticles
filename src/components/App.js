import React, { useState } from 'react';
import './App.scss';
import Articles from './articles/Articles';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const App = () => {
	const [cardCount, setCardCount] = useState(3);
	const [isDisplayButton, setIsDisplayButton] = useState(true);

	let onShowButton = (isDisplay) => {
		setIsDisplayButton(isDisplay);
  	};

	return (
		<Container className="p-1">
			<Jumbotron>
				<h3 className="header">Related Articles</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<Articles cardCount={cardCount} onShowButton={onShowButton}></Articles>
				{isDisplayButton &&
					<div className="btn-alignment">
						<Button variant="outline-danger" onClick={() => setCardCount(cardCount + 3)}>READ MORE</Button>
					</div>
				}
			</Jumbotron>
		</Container>
	);
}

export default App;
