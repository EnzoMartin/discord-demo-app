import React from 'react';

function Content({ id, content, handleOnChange }){
  return (
    <div className="content">
      <textarea data-tab-id={id} name="content" onChange={handleOnChange} value={content}/>
    </div>
  );
}

export default Content;
