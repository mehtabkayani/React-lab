import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import {addBook, fetchBooks, requestKey, url } from "./utils/api"
import Main from "./components/ui/Main/Main"
import BookList from "./components/ui/BookList/BookList"
import Input from "./components/ui/Input/Input"

class App extends Component {
  constructor(props){
    super (props)
    this.state = {
      books: []
    }
 this.booksHandler = this.booksHandler.bind(this)
  }

booksHandler(book, id){
  this.setState ({
    books: [...this.state.books, { ...book, id }]
  })
}

    componentDidMount(){
  console.log('mount')
  // fetchBooks(({data}) => {
  //   console.log('data', data)
  //   this.setState({
  //     books: [...data]
  //
  //   })
  //
  // })
  const key = localStorage.getItem('apiKey')

  if (key) {
    fetch(url + 'op=select' + '&key=' + key)
      .then(response => response.json())
      .then(data => {
        if(data.status === 'success') {
        this.setState({
          books: data.data
        })
      }
      })
  } else {
    fetch(url + 'requestKey')
      .then(response => response.json())
      .then(data => {
        fetch(url + 'op=select' + '&key=' + data.key)
          .then(response => response.json())
          .then(data => {
            if(data.status === 'success') {
            this.setState({
              books: data.data
            })
          }
          })
      })
  }
}

  render() {

    return (


      <div className="App">
        <Header />
        <Main booksHandler={this.booksHandler}/>
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default App
