import React from 'react'
import Footer from './Footer'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'

const App = () => (
  <div>
    <AddTask />
    <VisibleTaskList />
    <Footer />
  </div>
)

export default App