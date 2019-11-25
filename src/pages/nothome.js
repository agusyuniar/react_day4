import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class nothome extends Component{
    render(){
        return(
            <div class="m-auto">
                <h1 class="text-center">Ini bukan Home</h1>
                <Link to='/'>
                    <button class="col m-auto btn btn-danger shadow">pindah Home</button>
                </Link>
            </div>
        )
    }
}

export default nothome