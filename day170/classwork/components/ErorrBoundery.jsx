import React from 'react';


export default class erorrboundery extends React.Component {
   constructor(props) {
     super(props)

     this.state = {error : null};
     
   }


  static getDerivedStateFromError(error) {
    return {error}
  }



  render() {
    if(this.state.error) {
      return(
        <div>

          <h2>erorr</h2>
        </div>
      )
    }
    return this.props.children;
  }
}
