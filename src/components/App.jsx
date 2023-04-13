import { useRoute } from 'react-router5';

import Nav from '../components/Nav.jsx';

import initUsers from '../components/_users.json';
import UserList from '../components/UserList.jsx';
import PostList from '../components/PostList.jsx';

function Main() {
  const {route} = useRoute();
  console.log('Main',route);
  switch (route?.name) {
    case 'home':
      return <h1>Home</h1>;
    case 'design':
      return <p>Next step to lern UX/UI design</p>;
    case 'users':
      return <UserList users={initUsers}/>;
    case 'posts':
      return <PostList posts={[]}/>;
    default:
      return <h1>Not Found {route.name}</h1>;
  }
}

export default function App() {
  return (
    <>
      <Nav />
      <main><Main /></main>
    </>
  );
}