import React, { useEffect, useState } from 'react';

import TodoList from './TodoList';

const todosList = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut na facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];

const TodoListContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(todosList);
      }, 3000);
    });

    promise.then((res) => {
      setList(res);
    });
  }, []);

  return <TodoList todos={list} />;
};

export default TodoListContainer;
