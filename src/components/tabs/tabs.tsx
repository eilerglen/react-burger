import tabStyles from './tabs.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {FC} from 'react';

type TTab = {
  value: string;
  title: string
}

const tabs: Array<TTab>  = [
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

const Tabs: FC<ITab> = ({ current, onClick }) =>{

  return (
    <div className={tabStyles.tab_container}>
      <Tab value="bun" active={current === 'bun'} onClick={onClick}>Булки</Tab>
      <Tab value="main" active={current === 'main'} onClick={onClick}>Начинки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={onClick}>Соусы</Tab>
    </div>
  );
}



export default Tabs
