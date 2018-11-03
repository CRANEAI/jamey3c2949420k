
/*
geography view
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
import { Row, Col , Navbar, NavItem, NavbarBrand, Button, Nav } from 'reactstrap';
        
        
        import {  }  from '../actions/geographyActions.js'; 

        
        
       
        class geographyView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        				<Button className="btn button-gray-white"><!-- --></Button> 

			</Col>

			<Col md={12}>
				<p className="label-gray-white"> winchester </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for san_diego button-gray-white action --> */}
				<Button 
                        className="btn btn-lg btn-block button-gray-white" 
                        onClick={() => this.san_diego()}>san diego</Button> 

			</Col>

			<Col md={12}>
				<p className="label-white-standard"> pittsburgh </p>
			</Col>

			<Col md={12}>
				<p className="label-gray-very-light-yellow-small"> powerups ® 4100 </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> 480 </p>
			</Col>

			<Col md={12}>
				<p className="label-very-light-yellow-brown"> 240 </p>
			</Col>

<Nav tabs> 
</Nav> 

                           
   
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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(geographyView);
    
        