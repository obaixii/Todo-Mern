import CreateTodo from '../components/CreateTodo';
import Header from '../components/Header';
import TodoListing from './TodoListing';

function Home() {
  return (

    <div className="App container mt-2">
      <Header/>
      <CreateTodo/>
      <TodoListing/>
    </div>
  );
}

export default Home;
