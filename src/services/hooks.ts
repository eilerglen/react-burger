import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type {RootState, AppDispatch} from './store'

type TUseParams = {
  id: string
}

export const useAppParams = () => useParams<TUseParams>()
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
