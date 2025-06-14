export interface ModeContextProviderProps {
  children: React.ReactElement;
}

export type ModeType = 'light' | 'dark';

export type Action = { type: 'USE_LIGHT' } | { type: 'USE_DARK' };

export interface IMode {
  activeMode: ModeType;
  modeDispatch: React.Dispatch<Action>;
}

export type State = IMode;
