import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

const useStyles = makeStyles({
	ul: {
		listStyle: 'none',
		padding: 0,
		margin: 0,
		display: 'flex',
	},
});
function Pagination2({ itemsCount, handlePageChange }) {
	const pageSize = 3;
	const classes = useStyles();
	const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
	// if (pageCount === 1) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음

	// const pages = _.range(1, pageCount + 1);
	const { items } = usePagination({
		count: pageCount,
		showFirstButton: true,
		showLastButton: true,
		siblingCount: 3,
		boundaryCount: 1,
	});
	console.log('items: ', items);

	return (
		<nav>
			<ul className={classes.ul}>
				{items.map(({ page, type, selected, ...item }, index) => {
					let children = null;
					console.log('--------------------------');
					console.log('type: ', type);
					console.log('selected: ', selected);
					console.log('item: ', item);
					console.log('page: ', page);
					console.log('index: ', index);
					// if (selected) {
					// 	handlePageChange(page);
					// }
					if (type === 'start-ellipsis' || type === 'end-ellipsis') {
						children = '…';
					} else if (type === 'page') {
						children = (
							<button
								type="button"
								style={{ fontWeight: selected ? 'bold' : undefined }}
								disabled={item.disabled}
								onClick={(e) => {
									item.onClick(e);
									handlePageChange(page);
								}}
								// {...item}
							>
								{page}
							</button>
						);
					} else {
						switch (type) {
							case 'first': {
								children = (
									<button
										type="button"
										style={{ cursor: 'pointer' }}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										◀◀
									</button>
								);
								break;
							}
							case 'previous': {
								children = (
									<button
										type="button"
										style={{ cursor: 'pointer' }}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										◀
									</button>
								);
								break;
							}
							case 'next': {
								children = (
									<button
										type="button"
										style={{ cursor: 'pointer' }}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										▶
									</button>
								);
								break;
							}
							case 'last': {
								children = (
									<button
										type="button"
										style={{ cursor: 'pointer' }}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										▶▶
									</button>
								);
								break;
							}
							default: {
								break;
							}
						}
						// children = (
						// 	// <button type="button" {...item}>
						// 	// 	{type}
						// 	// </button>
						// 	<a>◀</a>
						// );
					}

					return <li key={index}>{children}</li>;
				})}
			</ul>
		</nav>
	);
}
export default Pagination2;
