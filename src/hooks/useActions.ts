import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { allActions } from 'store/actions';
import { useAppDispatch } from './useAppDispatch';

export const useActions = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(allActions, dispatch);
};
