import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col, Table, Form, FormGroup, Label, Input, FormText, DropdownItem  } from 'reactstrap';
import Kartu from '../component/card'
import Derop from '../component/dropConst';

class home extends Component{
    state={
        data:[],
        selectedId:null
    }

    componentDidMount(){
        Axios.get('http://localhost:2000/users')
        .then((res)=>{
            // console.log(res.data)
            this.setState({data:res.data})
            // console.log(this.state.data[2].first_name)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderDrop = () => {
        return this.state.data.map( (val) => {
            return (
            <DropdownItem>{val.first_name}</DropdownItem>
            );
        })
    }

    renderKartu=()=>{
        return this.state.data.map((val) => {
            return(
                <Kartu 
                contoh={val.first_name} 
                contoh2={val.last_name} 
                contoh3={val.email}/>
            )
        })
    }
    renderUserData=()=>{
        return this.state.data.map((val,nomor)=>{
            if(this.state.selectedId===val.id){
                return(
                    <tr key={val.id}>
                        <th scope="row">{nomor+1}</th>                        
                        {/* cara input text react*/}
                        <td><Input type="text" className="form-control" innerRef={(firstnameBaru)=>this.firstnameBaru=firstnameBaru} placeholder={val.first_name} /></td>
                        {/* cara input text html*/}
                        <td><input type="text" className="form-control" ref="lastnameBaru" placeholder={val.last_name} /></td>
                        <td><input type="email" className="form-control" ref="emailBaru" placeholder={val.email} /></td>
                        <center>
                        <td>
                            <td><Button color='primary ' className='shadow' onClick={()=>{this.submitDataBaru(val.id)}}>Ok</Button></td>
                            <td><Button color='danger '  className='shadow' onClick={() => this.setState({selectedId: null})}>cancel</Button></td>
                        </td>
                        </center>
                        {/* <td><Button color='warning'  onClick={()=>{this.editData(val.id)}}>EDIT</Button></td> */}
                        {/* panggil render input text, lalu ambil valuenya */}
                    </tr>
                )
            }else{
                return(
                    <tr key={val.id}>
                        <th scope="row" >{nomor+1}</th>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                        <td>{val.email}</td>
                        <center>
                        <td>
                            <td><Button color='danger ' className='shadow'  onClick={()=>{this.removeData(val.id)}}>DELETE</Button></td>
                            <td><Button color='warning' className='shadow'  onClick={()=>{this.editData(val.id)}}>EDIT</Button></td>
                        </td>
                        </center>
                    </tr>
                )
            }
        })
    }
    coba=(a)=>{ //triall
        console.log('asd'+a)
    }

    removeData=(a)=>{ //finish
       var url= `http://localhost:2000/users/`
       var pjg = a
       Axios.delete(url+pjg)
       .then((res)=>{
           this.cetak()
       })
    console.log(pjg)
    }

    editData=(z)=>{
        this.setState({selectedId:z})
        console.log(this.state.selectedId)
    
    }

    cetak=()=>{
        Axios.get('http://localhost:2000/users')
        .then((res)=>{
            // console.log(res.data)
            this.setState({data:res.data})
            console.log(this.state.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    submitData=()=>{
        var namaDepan = this.refs.firstname.value
        var namaBlkg = this.refs.lastname.value
        var email = this.refs.email.value
        console.log(namaDepan)
        console.log(namaBlkg)
        console.log(email)

        Axios.post('http://localhost:2000/users',{
            first_name : namaDepan,
            last_name : namaBlkg,
            email : email
        })
        .then((res)=>{
            console.log(res.data)
            this.cetak()
            this.refs.firstname.value = ''
            this.refs.lastname.value = ''
            this.refs.email.value = ''
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    submitDataBaru=(a)=>{
        var namaDepan = this.firstnameBaru.value
        var namaBlkg = this.refs.lastnameBaru.value
        var emailnya = this.refs.emailBaru.value
        if(namaDepan===''){
            namaDepan=this.state.data[a-1].first_name
        }
        if(namaBlkg===''){
            namaBlkg=this.state.data[a-1].last_name
        }
        if(emailnya===''){
            emailnya=this.state.data[a-1].email
        }
        Axios.put(`http://localhost:2000/users/${a}`,{
            first_name : namaDepan,
            last_name : namaBlkg,
            email : emailnya
        })
        .then((res)=>{
            console.log(res.data)
            this.cetak()
            this.setState({selectedId:null})
            // this.refs.firstname.value = ''
            // this.refs.lastname.value = ''
            // this.refs.email.value = ''
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    cancelsubmitDataBaru=()=>{
        return(
            this.setState({selectedId: null})
        )
    }

    render(){
        return(
            <div className="">
                <h1 className="text-center">Ini Home</h1>
                    <center>
                <Link to='/bukan'>
                        <button className="m-auto btn btn-success shadow">pindah ke Not Home</button>
                </Link>
                
                <Derop isi={this.renderDrop()}/>

                    </center>
                <Table bordered className='container text-center'>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Tombol</th>
                        </tr>
                    </thead>
                    <tbody className='align-auto'>
                    {this.renderUserData()} 
                    </tbody>
                    <tfoot>
                    {/* <Form className='container col-6 row m-auto'> */}
                        <td>#</td>
                        <td><input type="text" className="form-control"  ref="firstname" placeholder="First Name" /></td>
                        <td><input type="text" className="form-control" ref="lastname" placeholder="Last Name" /></td>
                        <td><input type="email" className="form-control" ref="email" placeholder="Email" /></td>
                        <td><Button color='success' className='btn' onClick={this.submitData}>Submit</Button></td>
                    {/* </Form> */}
                    </tfoot>
                </Table >   
                <center>
                    <Row className='mb-2'>
                        {this.renderKartu()}
                    </Row>
                </center>
            </div>
        )
    }
}

export default home