import { useState } from 'react';

import { ArrowDown } from 'lucide-react';
import CheckBox from './checkbox';
import Btn from './btn';

const CustomTaskList = () => {


  const [opened, setOpen] = useState<boolean>(true)
  const [filter, setFilter] = useState(0);

  const [items, setItems] = useState([
      { state: true, text: "Тестовое задание" },
      { state: false, text: "Прекрасный код" },
      { state: true, text: "Перекрытие тестами" },
    ]);

  const filteredItems = items.filter((item) => {
    if (filter === 1) return item.state === true;  // Показывать только `true`
    if (filter === 2) return item.state === false; // Показывать только `false`
    return true; // Показывать все
  });

  const [btns, setbtns] = useState([
      { id: 0, state: true, text: "All" },
      { id: 1, state: false, text: "Complete"},
      { id: 2, state: false, text: "Active"},
    ]);

  const toggleBtn = (index: number) => {
    setFilter(index); // Все
    setbtns((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, state: !item.state } : { ...item, state: false }
      )
    );
  };

  const toggleState = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, state: !item.state } : item
      )
    );
  };

  const clearAll = () => {
  setItems((prevItems) =>
    prevItems.map((item) => ({
      ...item,
      state: false,
    }))
  );
};

  

  return (
      <div className={`flex flex-col justify-center items-center my-4 mx-auto`}>
        <h1 className='text-[100px]'>todos</h1>
          <div className={`overflow-hidden bg-stone-200 ${opened ? 'h-fit': 'h-[54px]'}`}>
            <ul className={`flex flex-col overflow-hidden text-[#000] min-h-[300px] justify-start`}>
              <li className='flex gap-2 cursor-pointer bg-stone-300 h-[54px] items-center px-4' onClick={()=> setOpen(!opened)}>
                <ArrowDown className={opened ? 'rotate-180': 'rotate-0'}/>
                  Whats needs to be done?
                </li>
              {filteredItems.map((item, index) => (
                <CheckBox
                  key={index}
                  state={item.state}
                  text={item.text}
                  onClick={() => toggleState(index)}
                />
              ))}
            </ul>
            <div className="flex justify-between items-center bg-stone-300 text-[#000] px-4 py-2 gap-8">
              {filteredItems.length} items left 
              <div className="flex justify-center gap-2">
                {btns.map((item, index) => (
                  <Btn
                    key={index}
                    state={item.state}
                    text={item.text}
                    onClick={()=>toggleBtn(index)}
                  />
                ))}
              </div>
              <div className="flex flex-end">
                  <Btn
                      state={false}
                      text={'Clear completed'}
                      onClick={() => clearAll()}
                    />
              </div>

            </div>
          </div>
      </div>
  )
}

export default CustomTaskList
