import './App.css';
import Header from './components/Header'
import TasksList from './components/TasksList'
import FooterMenu from './components/FooterMenu'

function Logado() {

  const user = {
    id: 1,
    name: 'James',
    lastName: 'Moriarty'
  }

  return (
    <div className="App">
      <Header listTitle={'App cadastro'} user={user}/>
      <TasksList />
      <FooterMenu/>
    </div>
  );
}

export default TasksList;
