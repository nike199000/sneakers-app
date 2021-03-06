import React from 'react';

import {BrowserRouter as Router, Route, Switch, NavLink, withRouter} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import withStore from '~/hocs/withStore';

import "./style.less"







import { TransitionGroup, CSSTransition } from "react-transition-group";
import { reaction, when } from 'mobx';


class App extends React.Component{
    
    constructor(props) {
        super(props);
         
        
      }
   
      
    

    
    render(){
        
        
        

        let routesComponents = routes.map((route) => {
            
            return <Route path={route.url}
                          component={route.component}     
                                                              
                          exact={route.exact} 
                          key={route.url}
                          
                    />;
        });

        let cart = this.props.stores.cart;


        return (
            
                <Router>
                    <div >
                        
                                
                                    {/* <Route > */}
                                        <Switch> 
                                            {routesComponents}
                                        </Switch>
                                    {/* </Route> */}

                                    {/* <div className="cont">
                                    
                                    <Route  render={({location}) =>
                                        <TransitionGroup >
                                            <CSSTransition
                                            key={location.key}
                                            timeout={300}
                                            classNames="page"
                                            
                                            >
                                                <Switch location={location}> 
                                                    {routesComponents}
                                                </Switch>
                                            </CSSTransition>
                                        </TransitionGroup>}>
                                        
                                    </Route>
                                </div> */}

                    </div>
                </Router>

                
            
        )
    }
}


export default withStore(App) ;
