import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { allActions } from 'store/actions';
import { asyncActions } from 'store/actions/asyncActions';
import { useAppDispatch } from './useAppDispatch';

export const useActions = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators({ ...allActions, ...asyncActions }, dispatch);
};
