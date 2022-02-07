import { TOrderStatuses } from "../types/types";
export const BASEURL = "https://norma.nomoreparties.space/api";

export const WS_URL = 'wss://norma.nomoreparties.space/orders/all';
export const WS_URL_AUTH = 'wss://norma.nomoreparties.space/api/orders';

export const ORDER_STATUS: TOrderStatuses = {
  done: 'Выполнен',
  pending: 'Готовится',
  created: 'Создан',
  cancel: 'Отменен',
};