import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/kissyalone.png',
      name: 'Jhonata Souza',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galera!'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que wemiweim wefnmiowefiowef miomwef iowefopwef mopwef mikowefg mp!'},
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-12 13:47:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content:'Fala galera!'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que wemiweim wefnmiowefiowef miomwef iowefopwef mopwef mikowefg mp!'},
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-13 13:47:00'),
  }
]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


export default App
