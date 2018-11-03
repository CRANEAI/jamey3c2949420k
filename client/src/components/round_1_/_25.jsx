
/*
round 1 / 25 view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the round 1 / 25 view has a status bar located at the very-top across the full width of the view
round 1 / 25 view has Navigation Bar located at the very-top across the full width of the view
round 1 / 25 view has an Image located at the very-top right of the view. this is a placeholder and should be updated with higher resolution Image
round 1 / 25 view has a Label located at the very-top left of the view with text i @jameyﬁ
round 1 / 25 view has a Label located at the top center of the view with text i @jameyﬁ
round 1 / 25 view has an Image located at the mid-top in the center of the view. this is a placeholder and should be updated with higher resolution Image
round 1 / 25 view has a Label located at the main area center of the view with text v ‘
round 1 / 25 view has an Image located at the bottom center of the view. this is a placeholder and should be updated with higher resolution Image
round 1 / 25 view has an Image located at the bottom left of the view. this is a placeholder and should be updated with higher resolution Image
round 1 / 25 view has an Image located at the bottom center of the view. this is a placeholder and should be updated with higher resolution Image
the geography view has a back icon located at the very-top left of the view which on click will trigger the back() action
the geography view has a add icon located at the top center of the view which on click will trigger the add() action
the round 1 / 25 view has a back icon located at the very-top left of the view which on click will trigger the back() action
the round 1 / 25 view has a add icon located at the top center of the view which on click will trigger the add() action
the geography view has a back icon located at the very-top left of the view which on click will trigger the back() action
the geography view has a add icon located at the top center of the view which on click will trigger the add() action
the round 1 / 25 view has a back icon located at the very-top left of the view which on click will trigger the back() action
the round 1 / 25 view has a add icon located at the top center of the view which on click will trigger the add() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand } from 'reactstrap';
        
        
        import {  }  from '../actions/round_1_/_25Actions.js'; 

        
        
       
        class round1/25View extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        <Navbar color="light navigation-bar-light-sky-blue-dark-cyan" light expand="md"> 
    <NavbarBrand>round 1 25 cd</NavbarBrand> 
</Navbar> 
			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-brown-light-sky-blue-small"> i @jameyﬁ </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-paragraph"> v ‘ </p>
			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(round1/25View);
    
        