import React from 'react';
import Book from './Book';

const Library = () => {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300}/>
      <Book name="처음 만난 자바" numOfPage={400}/>
      <Book name="처음 만난 C언어" numOfPage={500}/>
    </div>
  );
};

export default Library;