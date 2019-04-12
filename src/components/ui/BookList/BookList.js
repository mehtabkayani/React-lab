import React, {Component} from "react"

class BookList extends Component {
constructor(props){
  super(props)
  this.state = {
    books: [],
    title: "",
    author: ""
  }

}



render(){
  return(
    <div className="display-books">
        <div className="container">
          <div className="col-12">
            <ul className="list-group">
              <li className="list-item list-group-item d-flex align-items-center">
                <strong className="title">Titel</strong>

                <strong className="author">Författare</strong>

                <div className="buttons">
                  <button type="button" className="btn btn-success">
                    Editera
                  </button>
                  <button type="button" className="btn btn-danger">
                    Ta bort
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <ul className="list-group">
            {this.props.books.map((book) =>
              (<li className="list-item list-group-item d-flex align-items-center">
                <div className="title">{book.title}</div>

                <div className="author">{book.author}</div>

                <div className="buttons">
                  <button type="button" className="btn btn-success">
                    Editera
                  </button>
                  <button type="button" className="btn btn-danger">
                    Ta bort
                  </button>
                </div>
              </li>))}
            </ul>
          </div>

        </div>
      </div>
  )
}


}

export default BookList
