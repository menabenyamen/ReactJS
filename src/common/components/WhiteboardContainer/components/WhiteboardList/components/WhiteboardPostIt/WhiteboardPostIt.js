import React from 'react';

import whiteboardPostItProps from './WhiteboardPostIt.props';
import { COLOR_1, COLOR_2, COLOR_3, COLOR_4, COLOR_NAME_1, COLOR_NAME_2, COLOR_NAME_3, COLOR_NAME_4 } from '../../../constants';
import './WhiteboardPostIt.css';

const WhiteboardPostIt = (props) => {
  let title;
  let infoList;
  let authorName;
  let color;
  let visible;
  let editVisible;

  const handleRemove = () => {
    props.onRemove(props.id);
  };

  const showInput = () => {
    visible.style.display = 'block';
    editVisible.style.display = 'none';
  };

  const hideInput = () => {
    visible.style.display = 'none';
    editVisible.style.display = 'block';
  };

  const handleUpdate = () => {
    props.onUpdate(props.id,
      title.value,
      infoList.value,
      authorName.value,
      color.value,
    );
    hideInput();
  };

  const animateClass = props.animate ? 'added-post-it' : '';
  return (
    <li
      className={`WhiteboardPostIt-post-it ${animateClass}`}
      style={{ backgroundColor: props.color }}
    >
      <div className="WhiteboardPostIt">
        <button id="remove" onClick={handleRemove}>
        X
        </button>
        <div className="title">
          <h1 className="title">{props.title}</h1>
        </div>

        <div className="info-list">
          <ul>
            <li>{props.infoList}</li>
          </ul>
        </div>

        <div className="author-name">
          <h5>{props.authorName}</h5>
        </div>
      </div>

      <button
        ref={(currentElement) => { editVisible = currentElement; }}
        id="edit"
        onClick={showInput}
      >
      Edit
      </button>
      <div
        className="inputs"
        ref={(currentElement) => { visible = currentElement; }}
      >
        <input
          type="text"
          ref={(currentElement) => { title = currentElement; }}
          defaultValue={props.title}
        />
        <textarea
          ref={(currentElement) => { infoList = currentElement; }}
          defaultValue={props.infoList}
        />
        <input
          type="text"
          ref={(currentElement) => { authorName = currentElement; }}
          defaultValue={props.authorName}
        />
        <select
          name="color"
          ref={(currentElement) => { color = currentElement; }}
          defaultValue={props.color}
        >
          <option value={COLOR_1}>{COLOR_NAME_1}</option>
          <option value={COLOR_2}>{COLOR_NAME_2}</option>
          <option value={COLOR_3}>{COLOR_NAME_3}</option>
          <option value={COLOR_4}>{COLOR_NAME_4}</option>
        </select>
        <button
          id="save"
          onClick={handleUpdate}
        >
            Save
        </button>
      </div>
    </li>
  );
};

WhiteboardPostIt.propTypes = whiteboardPostItProps;

export default WhiteboardPostIt;
