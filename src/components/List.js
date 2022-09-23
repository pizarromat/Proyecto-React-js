import { Component } from "react";
import ComponentTodo from "./ComponentTodo"


/* 
class List extends Component{
    render(){
        return(
            <table>
                <tr>
                    <th>NAME</th>
                    <th>BOTON</th>
                    <th>Options</th>
                </tr>
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </table>
        )
    }
}

class Boton extends Component {
    render(){
        return(
            <button>{this.props.name}</button>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <p>Titulo</p>
        )
    }
}

class Option extends Component {
    render(){
        return(
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        )
    }
}

class Row extends Component {
    render(){
        return(
            <tr>
                <td>
                    <Title></Title>
                </td>
                <td>
                    <Boton name="ROW"></Boton>
                </td>
                <td>
                    <Option></Option>
                </td>
            </tr>
        )
    }
}

 */

const List = ()=>{
    return(
        <table>
            <tr>
                <th>NAME</th>
                <th>BOTON</th>
            </tr>

            <tr>
                <td>
                    <ComponentTodo.Title/>
                </td>
                <td>
                    <ComponentTodo.Boton name="no hacer click"/>
                </td>
            </tr>

            <tr>
                <td>
                    <ComponentTodo.Title/>
                </td>
                <td>
                    <ComponentTodo.Boton name="hacer click"/>
                </td>
            </tr>
        </table>
    )
}




export default List