
/*
geography view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the geography view has a status bar located at the very-top across the full width of the view
geography view has Navigation Bar located at the very-top across the full width of the view
geography view has Label located at the top center of the view, text needs identified
geography view has Label located at the mid-top center of the view, text needs identified
geography view has Label located at the main area center of the view, text needs identified
geography view has Label located at the main area center of the view, text needs identified
geography view has Label located at the bottom left of the view, text needs identified
geography view has a Tabbar located at the bottom across the full width of the view, text of nested elements need better identified
geography view has Label located at the bottom center of the view, text needs identified
geography view has Label located at the bottom center of the view, text needs identified
geography view has Label located at the bottom left of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing

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
    
        