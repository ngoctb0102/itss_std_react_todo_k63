/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, handleClick }) {
  return (
    <label className={`panel-block ${item.done ? 'has-text-grey-light' : ''}`}>
      <input checked={item.done} onChange={() => handleClick(item.key)} type="checkbox" />
      {item.text}
    </label>
  );

export default TodoItem;