export enum DataStateTypeEnum {
  LOADING,
  SUCCESS,
  ERROR
}

export enum AssoActionType {
  GET_ALL_ASSOS = '[Assos] get all Assos',
  SWITCH_ETAT = '[Asso.available] switch etat of Asso',
  DELETE_ASSO = '[Asso] delete the specified Asso',
  GET_ALL_EVENT = '[Event] get all Events',
  SWITCH_ETAT_EVENT = '[Event] switch etat of Event',
  DELETE_EVENT = '[Event] delete the specified Event',
}

export interface ActionEvent {
  actionType?: AssoActionType;
  payload?: any;
}

export interface AssoState<T> {
  data?: T,
  state?: DataStateTypeEnum,
  error?: string
}
