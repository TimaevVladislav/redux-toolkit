import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {Navbar} from './app/Navbar'
import PostsList from "./components/PostsList"
import AddPostsForm from "./components/AddPostsForm"
import SinglePostPage from "./components/SinglePostPage"
import EditPostForm from "./components/EditPostForm"


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={() => (
              <>
              <AddPostsForm />
              <PostsList />
              </>
            )}
          />
           <Route exact path="/posts/:postId" component={SinglePostPage}/>
           <Route exact path="/editPost/:postId" component={EditPostForm}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
