import React, {useState, useRef, useEffect} from 'react';
import Container from 'react-bootstrap/Container';


const SecondComponent = ({name, names, setNames}) => {

  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(name.name);

  const myRef = useRef();

  const updateValue = (e, id) => {
    e.preventDefault();
    setNames(names.map(name => name.id === id ? {...name, name: editTodo} : name ));
    setEdit(false);
  };

  const handleDone = (id) => {
    setNames(names.map(name => name.id === id ? {...name, isDone: !name.isDone} : name ));
    setEdit(false);
  };

  const handleDelete = (id) => {
    setNames(names.filter(name => name.id !== id));
  };

  useEffect(() => {
    myRef.current?.focus();
  }, [edit]);

  return (
    <form onSubmit={(e) => updateValue(e, name.id)}>
      
      <Container>
      <h3>Task to do</h3>
      {edit ? (
        
          <input
            ref={myRef}
            value={editTodo} 
            onChange={(e) => setEditTodo( e.target.value )} />

          ) : name.isDone ? (
          
          <s style={{fontSize: '2rem'}}>{name.name}</s>
          
          ) : (
          
          <span style={{fontSize: '2rem'}}>{name.name}</span>
          )
        }
        
        <span style={{fontSize: '1.2rem', margin: '0px 5px'}} 
          onClick={() => {
            if (!edit && !name.isDone) {
              setEdit(!edit)
            }
          }}>Edit</span>

        <span style={{fontSize: '1.2rem', margin: '0px 5px'}} 
          onClick={() => handleDone(name.id)}>Done</span>
        <span style={{fontSize: '1.2rem', margin: '0px 5px'}} 
          onClick={() => handleDelete(name.id)}>Delete</span>

      </Container>
    </form>
  );
};

export default SecondComponent;
