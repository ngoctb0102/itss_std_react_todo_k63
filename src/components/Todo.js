import React from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, setItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  const [filter, setFilter] = React.useState('全て');

  const filterData = React.useMemo(() => {
    if (filter === '全て') {
      return items;
    } else if (filter === '未完了') {
      return items.filter((item) => !item.done);
    } else if (filter === '完了済み') {
      return items.filter((item) => item.done);
    }
  }, [filter, items]);
const addTodo = (todo) => setItems([...items, todo]);

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTodo={addTodo} />
      <Filter filterItems={filterItems} filter={filter} setFilter={setFilter} />
      {filterData.map((item) => (
        <TodoItem handleClick={handleClick} key={item.key} item={item} />
      ))}
      <div className="panel-block">{filterData.length} items</div>
    </div>
  );
}

export default Todo;