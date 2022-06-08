import React, { useState } from 'react';
import { getKey } from '../lib/util';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo({ key: getKey(), text, done: false });
      setText('');
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Todoを入力してください"
      />
    </div>
  );
}

export default Input;
