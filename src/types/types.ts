import {Location} from 'history'

export interface TLocationState extends Location {
  from: string;
  pushLocation?: Location;
}

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;

}

export type TIngredientList = Array<TIngredient>

export type TFiller = {
  item: TIngredient;
  constructorId: string;
}


// **тип заказа**
export type TOrder = {
  ingredients: Array<string>;
  number: number;
  _id: string;
  owner: TUser;
  status: TOrderStatusCode;
  name: string;
  createdAt: Date;
  price: number;
}

export type TConstructorIngredient = TIngredient & {
  constructorId: string
}

export type TIcons =
    | 'CurrencyIcon'
    | 'BurgerIcon'
    | 'LockIcon'
    | 'DragIcon'
    | 'DeleteIcon'
    | 'ArrowUpIcon'
    | 'MenuIcon'
    | 'CloseIcon'
    | 'CheckMarkIcon'
    | 'ListIcon'
    | 'ProfileIcon'
    | 'EditIcon'
    | 'InfoIcon'
    | 'ShowIcon'
    | 'HideIcon'
    | 'LogoutIcon'

// **useLocation type**
export interface TLocationState extends Location {
  from: string;
  pushLocation?: Location;
}

export type TProtectedHOC = {
  path: string;
  exact: boolean;
}

export type TUser = { email?: string; name?: string; password?: string, token?: string };

export type TOrderStatus = 'Выполнен' | 'Готовится'|'Создан' |'Отменен'
export type TOrderStatusCode = 'done' | 'pending'|'created' |'cancel'

export type TOrderStatuses = {
  [k in TOrderStatusCode]: TOrderStatus
}

export type TAllOrderList = 
| []
| Array<TOrder>

export type TWSAction = {
	wsInit: string,
	wsClose: string,
	wsSendMessage: string,
	onOpen: string,
	onClose: string,
	onError: string,
	onMessage: string
}
export type TOrderList = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number
}