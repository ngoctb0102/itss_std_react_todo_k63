/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ filterItems, filter, setFilter }) {
  const handleClick = (e, filter) => {
    e.preventDefault();
    setFilter(filter);
  };

  return (
    <div className="panel-tabs">
      {filterItems.map((tabItem, index) => (
        <a
          key={index}
          href="/"
          className={`${filter === tabItem ? 'is-active' : ''}`}
          onClick={(e) => handleClick(e, tabItem)}
        >
          {tabItem}
        </a>
      ))}
    </div>
  );
}

export default Filter