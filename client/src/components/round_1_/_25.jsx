
/*
round 1 / 25 view
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
    
        