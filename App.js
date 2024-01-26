


// BlogList component
// import React from 'react';
// import BlogList from './BlogList';
// import {BlogPosts} from './BlogList.js';
// function App() {
//   const mystyle = {
//     color:"smokewhite",
//     backgroundColor: "green",
//     padding: "30px",
//     fontFamily: "Arial",
//     textAlign: 'center',
//   };
//   const mystyle2={
//     backgroundImage: 'url("paris2.jpg")',
//     backgroundSize: 'cover', 
 
//   }
//   return (

//     <div className="app" style={ mystyle2}>
//       {/* <h1 style={mystyle}>Travel is Fun</h1> */}
//       {/* <BlogList /> */}
//       <h3>{BlogPosts.title} by {BlogPosts.author}</h3>
//       <img
//          src={BlogPosts.imageUrl}
//          alt={BlogPosts.alt}
//          />
//          <p>
//           {BlogPosts.content}
//          </p>
//     </div>
//   );
// }

//  export default App;
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <div class="app">
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </div>
//   );
// }
// import React from 'react';
// import {useState} from 'react';
// let itemsList=[
//   {
//     id:0,
//     title:'React'
    
//   },
//   {
//     id:1,
//     title:'Express'
//   },
//   {
//     id:2,
//     title:'MongoDB'
//   }];
//  export default function DeletableList()
//  {
  
//    const[items,setItems]=useState(itemsList);
//  return(
// <>
//       <h1>Deleting Items:</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.title}{' '}
//             <button onClick={() => {
//               setItems(
//                 items.filter(a =>
//                   a.id !== item.id
//                 )
//               );
//             }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//  )
 
//  }
 
//  import {useState} from 'react';
// export default function ColorChanger()
// {
//   const[backgroundColor,setBgColor]=useState('yellow');

//   const changeColor=()=>{
//     let purple='#A020F0';
//     setBgColor(purple);
//   }
//   return(
//     <div className="app" style={{background:backgroundColor}}>
//       <button onClick={changeColor}>
//         Change
//       </button>

//     </div>
//   );
// }
//  import {useState} from 'react';
//  import { useForm } from 'react';
//  export default function App()
//  {
//   const {
//     handleSubmit,
//     register
//   }=useForm();

//   const onSubmit=(data) => {
//     console.log(data);
//   }
//     return(
//       <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label>Name</label>
//             <input type="text" name="name" {...register("name")}/>
//           </div>
//           <div>
//             <label></label>
//             <button type="submit">Save</button>
//           </div>
//         </form>
//       </div>
//     )
//  }
// import {useState} from 'react';
 
// export default function  Highlighter()  {
// 	const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
		
// 		console.log(event.target.value);
// 	};

// return  (
//   <div>
// <form>
// 	<label>Input Value:
// 	<input  type="text"  value={inputValue} onChange={handleChange} />
// 	</label>
//   <input type="submit"></input>
// 	{ <p>Input Value: {inputValue}</p> }
//   </form>
// </div>
// )};
// import {useState} from 'react';
// export default function Highlighter()
// {
// 	const[isShown,setIsShown]=useState(false);
// 	return(
// 		<>
// 		<button 
// 		onMouseOver={()=>setIsShown(true)}
// 		onMouseOut={()=>setIsShown(false)}>
// 			Hover
// 		</button>
// 		{
// 			isShown && <>
// 			The button is hovered
// 			</>
// 		}
// 		</>
// 	);
// }
// import {useState} from 'react';
 
// export default function  Highlighter()  {
// 	const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
		
// 	};

// return  (
//   <div>
// <form>
// 	<label>Enter value
// 	<input  type="text"  value={inputValue} onChange={handleChange} />
// 	</label>
// 	{ <p>Value entered is: {inputValue}</p> }
//   </form>
// </div>
// )};
import './App.css'
// import React, { useState } from 'react';

// const App = () => {
//   const [items, setItems] = useState(['React', 'JavaScript', 'Java']);

//   const handleDoubleClick = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div className="App">
//       <h1>Double Click to Remove Items</h1>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index} onDoubleClick={() => handleDoubleClick(index)}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;




// const ContextMenu = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     setIsVisible(true);
//   };

//   const handleMenuItemClick = (action) => {
  
//    <p>Clicked on {action}</p>
//     setIsVisible(false);
//   };

//   return (
//     <div onContextMenu={handleContextMenu} style={{ position: 'relative', width: '200px', height: '200px', border: '1px solid #ccc' }}>
//       {isVisible && (
//         <div style={{ position: 'absolute', 
// 		top: `${position.y}px`,
// 		 left: `${position.x}px`, padding: '8px' }}>
//           <div onClick={() => handleMenuItemClick('menu 1')}>Action 1</div>
//           <div onClick={() => handleMenuItemClick('menu  2')}>Action 2</div>
//           <div onClick={() => handleMenuItemClick('menu 3')}>Action 3</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContextMenu;
// export default function App()
// {
// 	const[state,setState]=useState('');
// 	const handleChange=(e)=>{setState(e.key)};
// 	return(
// 		<>
// 		<p>Key pressed is {state}</p>
// 		<input type="text" onKeyPress={(e)=>handleChange(e)}/>
// 		</>
// 	)
// }
// export default function App()
// {
// 	const[date,setDate]=useState(new Date());
// 	const handleChange=(e)=>{setDate(e.getHour())}
// 	return(
// 		<>
// 		<h3> {date.toLocaleString()}</h3>
		
// 		</>
// 	)
// }
// export default function App()
// {
// 	const[count,setCount]=useState(0);
// 	const handleIncre=(e)=>{setCount(count+1);}
// 	const handleDecre=(e)=>{setCount(count-1)}
// 	const handleReset=(e)=>{setCount(0)}
// 	return(
// 		<div className="App">
// 			<button onClick={handleIncre}>Increment</button>
// 			<button onClick={handleDecre}>Decrement</button>
// 			<button onClick={handleReset}>Reset</button>
// 			<h2>current count is {count}</h2>
// 		</div>
// 	)
// }





// const PasswordStrengthIndicator = () => {
//   const [password, setPassword] = useState('');
  
//   const getPasswordStrength = (password) => {
//     if (password.length < 6) {
//       return <h3>Weak</h3>
//     } else if (password.length < 10) {
//       return <h3>Medium</h3>;
//     } else {
//       return <h3>Strong</h3>;
//     }
//   };
  
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const passwordStrength = getPasswordStrength(password);

//   return (
//     <div className="App">
//       <label ><h1>Enter Password: </h1></label>
//       <input
//         type="password"
//         value={password}
//         onChange={handlePasswordChange}
        
//       />
//       <h2>Password Strength: {passwordStrength}</h2>
//     </div>
//   );
// };

// export default PasswordStrengthIndicator;
// import React, { useState } from 'react';
// export default function App()
// {
//   const [inputValue, setInputValue] = useState('');
//   const suggestions = ['apple', 'banana', 'cherry', 'date', 'grape'];

//   return (
//     <div className="App" >
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Type something..."
//       />
//       <ol className="App">
//         {suggestions
//           .filter((suggestion) =>
//             suggestion.includes(inputValue)
//           )
//           .map((suggestion) => (
//           <li>{suggestion}</li> 
//           ))}
//       </ol>
      
//     </div>
//   );
// };
// import react,{useState} from 'react';

// let nextId=0;

// export default function App()
// {
//   const[tasks,setTasks]=useState('');
//   const[taskName,setTaskName]=useState([]);
  
//   return(
//     <div className="App">
//      <h1>Task Manager</h1>
//      <input value={tasks}
//              onChange={e=>setTasks(e.target.value)}
//       />
//       <button onClick={() => {
//           setTaskName([...taskName,{id:nextId++,tasks:tasks}]);
//       }} >
//         Add task
//         </button> 
      
//         <ul>
//           {taskName.map(t=>(
//             <li key={t.id}>{t.tasks}
//             <button onClick={() => {
//               setTaskName(taskName.filter(a => a.id!==taskName.id))
//               .map((a)=>(<li>{a}</li>));
//             }}>Delete</button>
//             </li>
          
//           ))}
         
   
//           </ul>     
//     </div>
//   );

// }
import React, { useState } from 'react';
import './App.css';


const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      
      {/* <h1>Task Manager</h1> */}
      <h2>Manage your team's work,<br/> projects, & tasks <br/>online</h2>
      <div class="container">
     
      </div>
      
      <div>
        <input 
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;








