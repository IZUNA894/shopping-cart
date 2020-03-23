import React ,{Component} from "react";
//import {Link} from "react-router-dom";
import ToggleLink from "../toggleLink";
export default class App extends Component{
  render(){
    //console.log(this.props.catergories);
    return(<React.Fragment>
        <ToggleLink to={this.props.baseurl} exact={true}>ALL</ToggleLink>
        {this.props.catergories && this.props.catergories.map((cat)=>{
          return <ToggleLink to={`${this.props.baseurl}`+`${cat.toLowerCase()}`}>{cat}</ToggleLink>
        })}
      </React.Fragment>
    )
}
}
