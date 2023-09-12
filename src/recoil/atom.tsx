import { atom } from 'recoil';
export type HeaderColorType = 'transparent' | 'white'; //추가 가능
export const currHeaderAtom = atom<HeaderColorType>({
  key: 'currHeader',
  default: 'white',
});
