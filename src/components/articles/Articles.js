import React from 'react';
import './Articles.scss';
import Article from '../article/Article';
import articlesData from '/src/mockData/articlesData'
import { CardColumns } from 'react-bootstrap';

const Articles = (props) => {
	const articleList = articlesData;
	const { cardCount } = props;

	return (
		<>
			{props.onShowButton(articleList.length >= cardCount)}
			<CardColumns>
				{articleList.slice(0, cardCount).map((i, index) =>
					<Article key={index} article={i} bgcIndex={Math.floor(Math.random() * 10)}></Article>
				)}
			</CardColumns>
		</>
	);
}

export default Articles;
