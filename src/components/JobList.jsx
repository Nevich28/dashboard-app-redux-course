import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePosition } from 'store/positions/position-selectors';
import { selectFilters } from 'store/filters/filter-selector';

import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
	const dispatch = useDispatch();
	const currentFilters = useSelector(selectFilters)
	const position = useSelector((state) =>	selectVisiblePosition(state, currentFilters)
	);

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter));
	}

	return (
		<div className='job-list'>
			{position.map(item => (
				<JobPosition
					key={item.id}
					handleAddFilter={handleAddFilter}
					{...item} 
			/>
			))}
		</div>
	)
}

export {JobList};