import { TOrderStatuses } from "../types/types";
export const BASEURL = "https://norma.nomoreparties.space/api";

export const ORDER_STATUS: TOrderStatuses = {
  done: 'Выполнен',
  pending: 'Готовится',
  created: 'Создан',
  cancel: 'Отменен',
};