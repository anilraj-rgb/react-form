import { useState } from 'react'

const articlesArray = [
  'Base Text 1',
  'Base Text 2',
  'Base Text 3',
  'Base Text 4',
  'Base Text 5',
  'Base Text 6',
  'Base Text 7',
  'Base Text 8',
  'Base Text 9',
  'Base Text 10'
]
function App() {

  const [articles, setArticles] = useState(articlesArray)
  const [newArticle, setNewArticle] = useState('')

  const createArticle = (e) => {
    e.preventDefault()
    setArticles([...articles, newArticle])
    setNewArticle('')
  }

  const deleteArticle = (index) => {
    const updatedArticles = [...articles]
    updatedArticles.splice(index, 1)
    setArticles(updatedArticles)
  }

   return (
      <>
        <div className="container">
          <h1>React Form</h1>
          <ul>
            {articles.map((element, index) => (
              <li key={index}>
                {element}
                <button onClick={() => deleteArticle(index)}>Delete</button>
              </li>
            ))}
          </ul>
  
          <form onSubmit={createArticle}>
            <input type="text" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} />
            <button>Add to List</button>
          </form>
        </div>
      </>
    )
  }
  
  export default App