import React from 'react';

const Book = (props) => {
  return (
    <div>
      <h1>책의 이름은 {props.name}임.</h1>
      <h2>이 책은 모두 {props.numOfPage}로 구성되어 있음.</h2>
    </div>
  );
};

export default Book;