export type Action = { type: "TOGGLE_MENU"; payload: string };

export const addNote = (stat: string): Action => ({
  type: "TOGGLE_MENU",
  payload: stat,
});