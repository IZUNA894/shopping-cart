import React ,{Component} from "react";
import {connect} from "react-redux";
import {AddToCart,RemoveFromCart,UpdateCartQuantity} from "../data/cartActionCreator.js";


 class ProductList extends Component{
  handleClick = (item)=>{
    // console.log(this.props.AddToCart);
     this.props.addToCart({id:6,name:"abc",catergory:"chess",description:"bla bal bal",price:45},1)
   }
  render(){
    if(this.props.products == null || this.props.products.length == 0){
    return <div className="" >No products to show today</div>
    }
    else{
      return this.props.products.map((item)=>{
        return <div className="card p-1 m-1 bg-light" key={item.id}>
            <h2 className="">{item.name}</h2>
            <div className="row center" style={{justifyContent:"center"}}>
            <button type="button" className="btn col-3 center btn-primary"  onClick={ (item)=>{this.handleClick(item);}}>${item.price.toFixed(2)}</button>
            </div>
            <div className="card-text bd-white p-1">
              {item.description}
            </div>
        </div>
      })
    }
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
            addToCart: (item,quantity)=>dispatch(AddToCart(item,1)),
            //RemoveFromCart,
            //UpdateCartQuantity
}
};
export default connect(null,mapDispatchToProps)(ProductList)
