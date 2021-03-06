import React from 'react';
import { routesMap , urlBuilder } from '~/routes';
import { Link, NavLink, Switch,Route } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import './style.less';
// routes 
import Product from '~p/product';
import ProductsList from '~p/productsList';
import Cart from '~p/cart';

// other
<<<<<<< HEAD
import rightMenuBg from "./imgs/menu.png"
import logo from "./imgs/Logo.png"


=======

// import Title from "~c/other/header/header.js"



import logo from "./assets/Logo.png";

>>>>>>> productPage







@inject('stores') @observer class Header extends React.Component{

    constructor(props) {
        super(props);
        this.nav = React.createRef();
        
            this.state = {
                scrollTop: 0,
                
                lastScrollTop:0,
            }
        
      }

    

      componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
           
        
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        
        let nav = this.nav.current;
        
        

        let st = this.state.scrollTop;
        

        if(st > this.state.lastScrollTop ){
            
            // down
            nav.classList.add("scrollDown")
            nav.classList.remove("scrollUp")

    }else if(st < this.state.lastScrollTop && st !==0){  
            // up
            nav.classList.add("scrollUp")
            nav.classList.remove("scrollDown")

    }
    
        this.state.lastScrollTop = st;



        
        this.setState({
            scrollTop:window.scrollY
        });

       
    }
    

    render(){
        

        
        
        return(
       
        <div className="container">
            <div ref={this.nav} className="common_title_wrapper">
                <div className="leftside_inner">
                    <Link to={routesMap.home} className="homeLink"><img src={logo} alt=""/></Link>
                    <div className="common__title"> FIND YOUR BEST AIR </div>
                </div>
                <div className="right_nav">
                    <img className="menu_bg" src={rightMenuBg} alt=""/>
                    <div className="right_nav_inner">
                        <NavLink to={`${routesMap.products}/cart`}> <img className="search_icon" src="/dist/imgs/imgsForHomeUsage/avatar.png" alt=""/></NavLink>
                        <NavLink to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-search-64.png" alt=""/></NavLink>
                        <NavLink to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-heart-52.png" alt=""/></NavLink>
                        <NavLink to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-shopping-cart-128.png" alt=""/></NavLink>
                    </div>
                </div>
            </div>
                <Switch>
                    <Route exact={true} path="/products/list" component={ProductsList}/>
                    <Route exact={true} path="/products/cart" component={Cart}/>
                    <Route exact={true} path="/products/:url" component={Product}/>
                </Switch>

        </div>
        );
    }
        
        
}

export default Header;