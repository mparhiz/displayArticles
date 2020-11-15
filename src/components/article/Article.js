import React, { useState } from 'react';
import './Article.scss';
import { Modal, Card, Button } from 'react-bootstrap';

function ShowArticleModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Article
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>{props.article.title}</h4>
				<p><small>{props.article.date}</small></p>
				<p>{props.article.body}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

const Article = (props) => {
	const { article , bgcIndex } = props;
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Card className={"card" + " bgc-" + bgcIndex}>
				<Card.Body>
					<Card.Title className="card-title">{article.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
					<Card.Text className="card-content">{article.body}</Card.Text>
					<Button
						className="card-button"
						variant="outline-danger"
						size="sm"
						onClick={() => setModalShow(true)}
					>
						READ MORE
					</Button>
				</Card.Body>
			</Card>

			<ShowArticleModal
				show={modalShow}
				article={article}
        		onHide={() => setModalShow(false)}
      		/>
		</>
	);
}

export default Article;
