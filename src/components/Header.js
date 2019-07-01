import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import { Menu, Dropdown } from 'antd';


import { slide as SlideMenu } from 'react-burger-menu';

// import SideDrawer from './SideDrawer';


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/orders">
        Orders
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/contact">
        Contact us
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const UserDropDown = () => (
  <div className="user-dropdown">
    <Dropdown overlay={menu}>
      <a className="user" href="#">
        user
      </a>
    </Dropdown>
  </div>
);

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false,
        menu: false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }


    handleScroll = () => {
       if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
       } else {
            this.setState({
                headerShow: false
            })
       }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    toggleMenu = () => {
      this.setState({
        menu: !this.state.menu
      });
    };
    
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#966c4c' : 'transparent',
                    boxShadow: 'none',
                    padding: '5px 0px',
                }}
            >
                <Toolbar>

                    <div className="logo">
                      <a href="/">
                        <img src="/images/welcome_logo.png"/>
                      </a>
                    </div>

                    <div className="top-menu">
                     
                          <a href="/" className="header_btn"> Home</a>            
                          <a href="/packages" className="header_btn">Packages </a>         
                          <a href="/contact" className="header_btn"> Contact us </a>

                    </div>

                    <UserDropDown/>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;


// import React, { Component } from 'react';
// import { Menu, Dropdown } from 'antd';
// import { slide as SlideMenu } from 'react-burger-menu';
// import AppBar from '@material-ui/core/AppBar';

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="/orders">
//         Orders
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="/contact">
//         Contact us
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         Logout
//       </a>
//     </Menu.Item>
//   </Menu>
// );

// const UserDropDown = () => (
//   <div className="user-dropdown">
//     <Dropdown overlay={menu}>
//       <a className="user" href="#">
//         user
//       </a>
//     </Dropdown>
//   </div>
// );

// const MobileMenu = ({ toggleMenu, open }) => (
//   <div className="mobile-menu2">
//     <SlideMenu>
//       <a id="home" className="menu-item" href="/">
//         Home
//       </a>
//       <a id="about" className="menu-item" href="/about">
//         About
//       </a>
//       <a id="contact" className="menu-item" href="/contact">
//         Contact
//       </a>
//       <a onClick={toggleMenu} className="menu-item--small" href="">
//         Settings
//       </a>
//     </SlideMenu>
//   </div>
// );

// export default class Header extends Component {
//   state = {
//     headerShow: false,
//     menu: false
//   };

//   // componentDidMount(){
//   //   window.addEventListener('scroll',() => this.handleScroll());
//   //   this.handleScroll = () => {
//   //     if(window.scrollY > 0){
//   //           this.setState({
//   //               headerShow: true
//   //           })
//   //     } else {
//   //           this.setState({
//   //               headerShow: false
//   //           })
//   //     }
//   //     console.log(this.state.headerShow)
//   //   }
//   //   console.log(this.state.headerShow)
//   // }

//   componentDidMount() {
//     window.addEventListener("scroll", () => this.handleScroll())
//   }

//   handleScroll = () => {
//     if(window.scrollY > 0){
//       this.setState({
//         headerShow: true
//       })
//     }else{
//       this.setState({
//         headerShow: false
//       })
//     }
//   }
  

  // toggleMenu = () => {
  //   this.setState({
  //     menu: !this.state.menu
  //   });
  // };

//   componentDidMount() {
//     window.onscroll = () => this.myFunction();
//     this.header = document.getElementById("myHeader")
//     this.sticky = this.header.offsetTop;
//     this.myFunction = () => {
//       if (window.pageYOffset > this.sticky) {
//         this.header.classList.add("sticky");
//       } else {
//         this.header.classList.remove("sticky");
//       }
//     }
//   }
  


  

//   render() {
//     return (
//       <div>
//         {/* <header 
//           className="top-nav" 
//           position="fixed" id="myHeader" 
//           style={{
//             background: this.state.headerShow ? 'red' : 'transparent',
//             }}
//         > */}
//         <AppBar
//           className="top-nav"
//           id="myHeader"
//           style={{
//             background: this.state.headerShow ? 'red' : 'transparent',
//           }}
//         >
//           <div className="logo">
//             <img src="/images/logo.svg" />
//           </div>
          // <div className="top-menu">
          //   <ul>
          //     <li>
          //       <a href="/"> Home</a>{' '}
          //     </li>
          //     <li>
          //       <a href="/packages">Packages </a>{' '}
          //     </li>
          //     <li>
          //       <a href="/contact"> Contact us </a>
          //     </li>
          //   </ul>
          // </div>
          // <UserDropDown />
           {/* <MobileMenu toggleMenu={this.toggleMenu} open={this.state.menu} />  */}
//         {/* </header> */}
//         </AppBar>
//       </div>
//     );
//   }
// }
