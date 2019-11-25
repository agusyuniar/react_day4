import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class home extends Component{
    render(){
        return(
            <div class="m-auto ">
                <h1 class="text-center">Ini Home</h1>
                <Link to='/bukan'>
                    <center>
                        <button class="m-auto btn btn-success shadow">pindah ke Not Home</button>
                    </center>
                </Link>
            </div>
        )
    }
}

export default home