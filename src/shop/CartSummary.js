import React ,{Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

 class CartSummary extends Component{

  getSummary=()=>{
    if(this.props.trolley.cartItems > 0 ){
      return <span>
      {this.props.trolley.cartItems}item(s),
      ${this.props.trolley.cartPrice.toFixed(2)}
      </span>
    }else{
      return <span>Your Cart :(Empty)</span>
    }
  }
  getLinkClasses =()=>{
    return `btn btn-sm bg-dark text-white ${this.props.trolley.cartItems === 0 ? "disabled":""}`;
  }

  render(){
    return<div className="float-right">
            <small>
             {this.getSummary()}
             <Link className={this.getLinkClasses()}
              to="/shop/cart">
                  <i className="fa fa-shopping-cart"></i>
              </Link>
            </small>
          </div>
  }

}
const mapStateToProps = (dataStore)=>(
  {
    ...dataStore
  }
)

export default connect(mapStateToProps)(CartSummary);
