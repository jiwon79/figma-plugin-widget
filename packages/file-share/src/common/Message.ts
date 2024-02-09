export interface BaseMessage {
  type: string;
  payload: any;
}

export type TemplateWidgetWithUIMessage = {
  type: "SET_NUMBER";
  payload: { number: number };
};
