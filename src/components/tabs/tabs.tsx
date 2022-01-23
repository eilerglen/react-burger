import tabStyles from './tabs.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {FC} from 'react';

type TTabs = {
  value: string;
  title: string
}

const tabs: Array<TTabs>  = [
  {
    value: 'bun',
    title: 'Булки'
  },
  {
    value: 'main',
    title: 'Начинки'
  },
  {
    value: 'sauce',
    title: 'Соусы'
  },
]
interface ITab {
  current: string;
}

const Tabs: FC<ITab> = ({ current }) => {
  return (
    <div className={tabStyles.tab_container}>
      {tabs.map(({ value, title }) => (
        <Tab
          value={value}
          key={value}
          active={current === value}
          onClick={()=>{}}
        >
          {title}
        </Tab>
      ))}
    </div>
  );
}
export default Tabs;
