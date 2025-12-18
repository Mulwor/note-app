import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// ? Хук для получения диспетчера Redux-экшенов.
export const useAppDispatch = () => useDispatch<AppDispatch>();

// ? Хук для выбора и получения состояния из Redux-хранилища.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
