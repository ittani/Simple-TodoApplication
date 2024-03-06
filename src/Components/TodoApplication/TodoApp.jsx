import { useState } from 'react'
import {BrowserRouter,  Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){

    return (
        <div className="TodoApp">

             <HeaderComponent />

            <BrowserRouter>
            <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/Welcome/:username' element={<WelcomeComponent />} />
            <Route path='*' element={<ErrorComponent />} />
            <Route path='/todos' element={<ListTodoComponent />} />
            <Route path='/logout' element={<LogoutComponent />} />
            </Routes>
            </BrowserRouter>

           <FooterComponent />

        </div>
    )
}

function LoginComponent(){

  const [username, setUsername] =  useState('ittani')

  const [password, setPassword] =  useState('')

  const [SuccessfullMessage, setShowSuccessMessage] = useState(false)
  const [FailedMessage, setShowFailedMessage] = useState(false)
 
  const navigate = useNavigate();

  function hangleUsernameChange(event) {
    setUsername(event.target.value);

  }

  function hanglePasswordChange(event) {
    setPassword(event.target.value);

  }

  function handleSubmit(){

    if (username === 'ittani' && password === '12345')
    {
        console.log('success');
        setShowSuccessMessage(true);
        setShowFailedMessage(false);
        navigate(`/welcome/${username}`);
    }
    else
    {
        console.log('Authentication failed, check your credentials and try again');
        setShowFailedMessage(true);
        setShowSuccessMessage(false);
    }
  }

  function SuccessfullMessageComponent()
{
    if (SuccessfullMessage)
    {
        return <div className='SuccessfullMessage'>Authentication successful</div>
    }
   
    return null;
    
}

function ErrorMessageComponent()
{
    if (FailedMessage)
    {
        return  <div className="FailedMessage">Authentication Faied. Please check  your credentials and try again</div>
    }
   
    return null;
    
}

    return (
        <div className="Login"> 
        <SuccessfullMessageComponent />
        <ErrorMessageComponent />  
              <div className="LoginForm">
                <h1>Log in</h1>
                  <div>
                 <label>User name:</label>
                 <input type="text" name="username" value={username}  onChange={hangleUsernameChange}/>
                  </div>
                  <div>
                 <label>Password:</label>
                 <input type="password" name="password"  value={password}  onChange={hanglePasswordChange} ></input>
                  </div>
                  <div>
                    <button type="button" name="login"  onClick={handleSubmit}>login</button>
                  </div>
              </div>
        
        </div>
    )
}

// Update the WelcomeComponent function
function WelcomeComponent() {
    const { username } = useParams();
  
    return (
      <div className="Welcome">
        <h1 className="Welcome-heading">Welcome, {username}!</h1>
        <div className="Welcome-content">
          <p>
            We're glad to have you on board. Here, you can manage your todos and stay organized.
          </p>
          <p>
            Explore the following features to get started:
          </p>
          <ul>
            <li>Create new todos</li>
            <li>Mark todos as complete</li>
            <li>Delete completed todos</li>
          </ul>
          <p>
            Ready to get started? <Link to="/todos">Go to your todos</Link>.
          </p>
        </div>
      </div>
    );
  }
  
function ErrorComponent(){

    return (
        <div className="ErrorComponent"> 
          <h1>We are really working hard!</h1>
          <div>
            Aplogies for 404 Error. Reach out to our team at maemoGlobals.com
          </div>
</div>
    )
}

function ListTodoComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12 , today.getMonth(), today.getDate());

    const todos = [
        {id:1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id:2, description: 'Learn Docker',  done: false, targetDate: targetDate},
        {id:3, description: 'Learn Full-stack API',  done: false, targetDate: targetDate},
        {id:4, description: 'Learn DevOps',  done: false, targetDate: targetDate}
    ]; 

    return (
        <div className="ListTodoComponent"> 
            <h1 className="Todo-heading">Things You Want to Do</h1>
            <div className="Todo-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function HeaderComponent(){

    return (
        <header className="header"> 
          <div className='container'>
          <ul>
          <li><a href='/welcome/ittani'>Home</a></li>
          <li><a href='/todos'>Todos</a></li>
            <li><a href='/logout'>logout</a></li>
            </ul>
          </div>
</header>
    )
}

function FooterComponent(){

  return (
      <footer className="footer"> 
        <div className='container'>
           Reach out to our team: ittani@gmail.com
        </div>
        </footer>
  )
}

function LogoutComponent() {
  const navigate = useNavigate();

  function handleLogout() {
    // Perform logout actions here
    // For example, clear user session, remove tokens, etc.
    // Then navigate to the login page
    navigate('/login');
  }

  return (
    <div className="LogoutComponent">
      <div className="logout-message">
        <h2>We're sorry to see you leave!</h2>
        <p>Are you sure you want to log out?</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}