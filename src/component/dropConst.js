import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';



const Derop = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    console.log(props)
      return (        
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Ada isinya
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Data Nama</DropdownItem>
                {props.isi}
            </DropdownMenu>
      </Dropdown>
    );
}
  
export default Derop;