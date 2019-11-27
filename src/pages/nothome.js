import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class nothome extends Component{
    render(){
        return(
            <div className="m-auto">
                <h1 className="text-center">Ini bukan Home</h1>
                <Link to='/'>
                    <button className="col m-auto btn btn-danger shadow">pindah Home</button>
                </Link>
            </div>
        )
    }
}

export default nothome