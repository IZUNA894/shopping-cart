import React ,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from "../data/actionCreator.js";
import {DataTypes} from "../data/Types.js";
import {Shop} from "./shop.js";

const mapStateToProps = (dataStore)=>(
  {
    ...dataStore
  }
)

const mapDispatchToProps = ()=>({
  loadData
})

const filterProducts = (products=[] ,catergory)=>(
  (!catergory || catergory=="ALL")? products:
  products.filter(p=>(p.catergory.toLowerCase() === catergory.toLowerCase()))
);
export const ShopConnector = connect(mapStateToProps,mapDispatchToProps)(
  class App extends Component{
    componentDidMount(){
      this.props.loadData(DataTypes.CATERGORIES);
      this.props.loadData(DataTypes.PRODUCTS);
    }
    render(){
      console.log(this.props);
      return(
        <Switch >
          <Route path="/shop/products/:catergory?"
           render={ (routeProps)=>(
                      <Shop { ...this.props} {...routeProps}
                    products={filterProducts(this.props.shop.products,routeProps.match.params.catergory)} /> )}/>
          <Redirect to="shop/products" />
        </Switch>

      )
    }

  }
)
