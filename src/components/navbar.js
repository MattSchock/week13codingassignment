import React from 'react';



class NavbarComponent extends React.Component {
    render() {
        return (
            <div>
                <ul className="navbarName">
                    <li><a href="google.com">
                        Link 1
                    </a></li>
                    <li><a href="google.com">
                        Link 2
                    </a></li>
                    <li><a href="google.com">
                        Link 3
                    </a></li>
                    <li><a href="google.com">
                        Link 4
                    </a></li>
                </ul>
            </div>
            

        )
    }
}


export default NavbarComponent