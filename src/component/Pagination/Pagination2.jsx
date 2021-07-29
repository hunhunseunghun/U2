import React, {
	useEffect,
	useState,
	forwardRef,
	useImperativeHandle,
} from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import { Pagination2Styled } from './Pagination2Styled';

const useStyles = makeStyles({
	ul: {
		listStyle: 'none',
		padding: 0,
		margin: 0,
		display: 'flex',
	},
});
const Pagination2 = forwardRef(
	({ itemsCount, pageSize, handlePageChange }, ref) => {
		const classes = useStyles();
		const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
		// console.log('pagination2 caleld');
		let firstPage = {};
		// const pages = _.range(1, pageCount + 1);
		let { items } = usePagination({
			count: pageCount,
			showFirstButton: true,
			showLastButton: true,
			siblingCount: 3,
			boundaryCount: 1,
			defaultPage: 1,
		});
		useImperativeHandle(ref, () => ({
			refreshFirstPage() {
				firstPage.item.onClick();
				// console.log('firstPage: ', firstPage);
			},
		}));
		if (pageCount === 1 || pageCount === 0) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음

		const refreshFirstPage = () => {
			firstPage.item.onClick(firstPage.e);
		};

		return (
			<Pagination2Styled>
				<ul className={classes.ul}>
					{items.map(({ page, type, selected, ...item }, index) => {
						let children = null;
						switch (type) {
							case 'start-ellipsis':
							case 'end-ellipsis':
								children = '…';
								break;

							case 'page': {
								if (page === 1) {
									firstPage.item = item;
								}
								children = (
									<button
										type="button"
										className={
											(selected ? 'selectedPage' : undefined) + ' ' + `${type}`
										}
										ref={page === 1 ? ref : null}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										{page}
									</button>
								);
								break;
							}
							case 'first': {
								children = (
									<button
										type="button"
										className={type}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										{`<<`}
									</button>
								);
								break;
							}
							case 'previous': {
								children = (
									<button
										type="button"
										className={type}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										{`<`}
									</button>
								);
								break;
							}
							case 'next': {
								children = (
									<button
										type="button"
										className={type}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										{`>`}
									</button>
								);
								break;
							}
							case 'last': {
								children = (
									<button
										type="button"
										className={type}
										disabled={item.disabled}
										onClick={(e) => {
											item.onClick(e);
											handlePageChange(page);
										}}
									>
										{`>>`}
									</button>
								);
								break;
							}
							default: {
								break;
							}
						}

						return <li key={index}>{children}</li>;
					})}
				</ul>
			</Pagination2Styled>
		);
	},
);
export default Pagination2;
