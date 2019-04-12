import React from "react"

 const input = (props) => {

    return(
      <div>
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        onClick={props.submitHandler}
      >
        Skicka
      </button>
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        onClick={props.apiHandler}
      >
        NewApi
      </button>
      </div>
    )

};

export default input
