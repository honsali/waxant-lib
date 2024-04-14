import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IRootState } from './redux.config';

const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useAppSelector;
