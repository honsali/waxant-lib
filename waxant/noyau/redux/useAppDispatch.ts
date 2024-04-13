import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux.config';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
