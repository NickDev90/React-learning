import React, {useState} from 'react';
import classes from './Paginator.module.css'; 

const Paginator = ({portionSize = 10, currentPage = 1, ...props}) => {
	let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
	let pages = []; 
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let [portionNumber, setPortionNumber] = useState(1);
	let portionCount = Math.ceil(pagesCount / portionSize);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;


	return  <div className={classes.paginator}>
		{
			portionNumber > 1 &&
			<span onClick={ ()=> {
				setPortionNumber(portionNumber - 1);
				props.onPageChanged(leftPortionPageNumber - portionSize); 
			} }
			className={classes.prevArrow}></span>
		}


			{
				pages
					.filter(function(p) {
						return p >= leftPortionPageNumber && p <= rightPortionPageNumber 
					})
					.map( p => {
						return <span className={currentPage == p ? classes.selectedPage : classes.pageNumber}  key={p}
						onClick={ (e) => props.onPageChanged(p) }> {p} </span>;
					})
			}

			{
				portionCount > portionNumber && 
					<span onClick={ ()=> {
						setPortionNumber(portionNumber + 1);
						props.onPageChanged(leftPortionPageNumber + portionSize); 
						}
					}
					className={classes.nextArrow}></span>
			}
		</div>

}

export default Paginator;