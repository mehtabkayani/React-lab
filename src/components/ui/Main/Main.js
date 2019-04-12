import React, {Component} from "react"
import Input from "../Input/Input"
import {addBook, fetchBooks, requestKey, url } from "../../../utils/api"

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      author: ""

    }
    this.submitHandler = this.submitHandler.bind(this)
    this.apiHandler = this.apiHandler.bind(this)
    this.titleHandler = this.titleHandler.bind(this)
    this.authorHandler = this.authorHandler.bind(this)
  }

  apiHandler(event){
      event.preventDefault()
        fetch(url + 'requestKey')
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('apiKey', data.key)})
      }

  submitHandler(event){
  event.preventDefault()
  const book = {
    title: this.state.title,
    author: this.state.author

  }
  addBook(book, (id)=>{
    this.props.booksHandler(book, id)

    }
  )

  }

  titleHandler(event){
  this.setState({
    title: event.target.value
  })

  }

  authorHandler(event){
  this.setState({
    author: event.target.value
  })

  }

  render(){


  return(
    <div className="container">
        <div className="row form-section">
          <form className="book-form col-6">
            <legend>Lägg till dina favoritböcker</legend>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="title"
                placeholder="Lägg till titel"
                onChange={this.titleHandler}
              />

              <input
                type="text"
                className="form-control"
                id="author"
                rows="3"
                data-gramm="true"
                data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
                data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
                data-gramm_editor="true"
                placeholder="Lägg till författare"
                onChange={this.authorHandler}
              />
            </div>
            <Input submitHandler={this.submitHandler} apiHandler={this.apiHandler} />
          </form>
        </div>
      </div>




  )
}
};




export default Main
