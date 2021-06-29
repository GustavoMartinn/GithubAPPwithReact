import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import './Form.css'

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        // console.log('Um nome foi enviado: ' + this.state.value);
        // <Link to={`/Cards/${this.state.value}`}></Link>
        event.preventDefault();
        this.props.history.push(`/usuario/${this.state.value}`)
    }
  
    render() {
        return(
            <div className="App">
                <div className="search">
                    <img src="https://image.flaticon.com/icons/png/512/733/733609.png" width="150" height="150"></img>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Usuário" value={this.state.value} onChange={this.handleChange} ></input><br/><br/>
                        <input type="submit" value="ENVIAR"></input>
                    </form>
                </div>
                {/* { error ? ( console.log(error)) : (<Cards {...userInput}></Cards>)} */}
            </div>
            
        );
    }
  }

// function Formulario() {    

//     const [userInput, setUserInput] = useState(' ')

//     const iniciaBusca = (e) => {
//         setUserInput(e.target.value)
//     }

//     return(
//         <div className="App">
//             <div className="navbar">Github search</div>
//             <div className="search">
//                 <form action="/Cards">
//                     <input type="text" placeholder="Usuário"></input>
//                     <input type="submit" value="ENVIAR"></input>
//                 </form>
//             </div>
//             {/* { error ? ( console.log(error)) : (<Cards {...userInput}></Cards>)} */}
//         </div>
//     );

// }

export default withRouter(Formulario);