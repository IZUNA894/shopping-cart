import React ,{Component} from "react";
import Catergories from "./catergoryNavigation.js";
import ProductList from "./productList.js";
import ShoppingCart from "./CartSummary.js"
export class Shop extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row bg-dark">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">
                Online-store
            </div>
          </div>
         <div className="col-6 bg-dark text-white">
           <div className="">
            <ShoppingCart />
           </div>
         </div>
        </div>

        <div className="row">
          <div className="col-3 p-2">
          <Catergories baseurl="/shop/products/" catergories={this.props.shop.catergories}/>
          </div>
          <div className="col-9 p-2">
          <ProductList products={this.props.products} />
          </div>
        </div>
      </div>
    )
  }
}
