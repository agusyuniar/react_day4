import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const Example = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(prevState => !prevState);

//   return (
//     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle caret>
//         Dropdown
//         </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Header</DropdownItem>
//         <DropdownItem>Some Action</DropdownItem>
//         <DropdownItem disabled>Action (disabled)</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Foo Action</DropdownItem>
//         <DropdownItem>Bar Action</DropdownItem>
//         <DropdownItem>Quo Action</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }

// export default Example;

class Asd extends React.Component{
    state = {
        isOpen:false,
        dropdownOpen:false
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    renderItem=(props)=>{
        return(
            <DropdownItem>
                {this.props}
            </DropdownItem>
        )
    }

    render(){
        return(
            <div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                <DropdownToggle caret>
                    Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    {this.renderItem}
                </DropdownMenu>
            </Dropdown>
            </div>
        )
    }
}
export default Asd;