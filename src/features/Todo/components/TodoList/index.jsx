import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

// Tạo 1 mảng default khi không có dữ liệu truyền vào bằng rỗng
TodoList.defaultProps = {
    todoList: [],
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        if (!onTodoClick) return;

        onTodoClick(todo, index)
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;