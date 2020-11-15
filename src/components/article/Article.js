import React, { useState } from 'react';
import './Article.scss';
import { Card, Button } from 'react-bootstrap';

const Article = (props) => {
	const { article , bgcIndex } = props;
	const [isDisplayDesc, setDisplayDesc] = useState(false);

	return (
		<Card className={"bgc-" + bgcIndex}>
			<Card.Body>
				<Card.Title className="title">{article.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
				<Card.Text className="cardContent">{article.body}</Card.Text>
				{isDisplayDesc && <Card.Text className="cardContent">{article.description}</Card.Text>}
				<Button
					variant="outline-danger"
					size="sm"
					onClick={() => setDisplayDesc(!isDisplayDesc)}
				>
					{isDisplayDesc ? "READ LESS" : "READ MORE"}
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Article;
