import { createContext } from 'react';

type Selection = [selected: string, setSelected: (next: string) => void];

const SelectionContext = createContext<Selection>(['', () => {}]);

export default SelectionContext;
