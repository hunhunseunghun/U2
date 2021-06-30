import React, { useEffect, useState } from 'react';
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
function Pagination2({ itemsCount, pageSize, handlePageChange }) {
	const classes = useStyles();
	const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
	// console.log('pagination2 caleld');
	// console.log('pageSize: ', pageSize);

	// const pages = _.range(1, pageCount + 1);
	let { items } = usePagination({
		count: pageCount,
		showFirstButton: true,
		showLastButton: true,
		siblingCount: 3,
		boundaryCount: 1,
		defaultPage: 1,
	});
	// let [items2, setItems2] = useState(items);
	// console.log('items2: ', items2);
	// useEffect(() => {
	// 	// items.map(({selected, page})=>{

	// 	// })
	// 	console.log('useEffect called');
	// 	let selectedItem = items2.filter(({ selected }, index) => selected);
	// 	selectedItem.selected = false;
	// 	console.log('selectedItem: ', selectedItem);
	// 	console.log('items2: ', items2);
	// 	setItems2(
	// 		items2.map((item, index) => {
	// 			if (index === 2) {
	// 				item.selected = true;
	// 			}
	// 			if (selectedItem.page === item.page) {
	// 				item.selected = false;
	// 			}
	// 			return item;
	// 		}),
	// 	);
	// }, [pageSize]);//page size가 바꼈을때 리렌더링은 되나 이전에 선택했던 페이지는 바뀌지 않음.
	//material UI가 내부적으로 리렌더링이 될때 이전 렌더링 정보를 저장하는 방식이기 때문에 고치기 쉽지 않음.
	if (pageCount === 1) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음

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
							children = (
								<button
									type="button"
									className={
										(selected ? 'selectedPage' : undefined) + ' ' + `${type}`
									}
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
}
export default Pagination2;
