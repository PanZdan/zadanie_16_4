import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => (
	<form onSubmit={props.onSubmitHandle}>
		<input type="text" value={props.value} onChange={props.onChangeHandle}/>
		<input type="submit" value="Dodaj"/>
	</form>
);

export default TodoForm;