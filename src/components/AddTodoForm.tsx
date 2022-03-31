import React, {FC, useRef} from 'react';

interface AddTodoFormProps {
    addTodo: (title: string) => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({addTodo}) => {

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={formRef}
            onSubmit={(e: React.SyntheticEvent): void => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    todo: { value: string };
                };
                const todo = target.todo.value
                addTodo(todo);
            }}>
            <input name={"todo"}/>
            <button type={"submit"}>Add todo</button>
        </form>
    );
};

export default AddTodoForm;