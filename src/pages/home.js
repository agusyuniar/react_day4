import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col, Table, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

class home extends Component{
    state={
        data:[]
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

    contoh=()=>{
        // Axios.get('http://localhost:2000/users')
        // .then((res)=>{
        //     // console.log(res.data)
        //     this.setState({data:res.data})
        //     // console.log(this.state.data[2].first_name)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }

    renderUserData=()=>{
        return this.state.data.map((val,nomor)=>{
            return(
                // <div>
                //     <h1>{val.first_name}</h1>
                //     <h2>{val.last_name}</h2>
                //     <p>{val.email}</p>
                // </div>
            //     <Row>
            //     <Col sm="2" className="text-center">
            //       <Card body>
            //         <CardTitle >{val.first_name} {val.last_name}</CardTitle>
            //         <CardText>email : {val.email}</CardText>
            //         <Button>Go somewhere</Button>
            //       </Card>
            //     </Col>
            //   </Row>
              
                <tr>
                  <th scope="row">{nomor+1}</th>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td><Button color='danger '  onClick={()=>{this.removeData(val.id)}}>DELETE</Button></td>
                  <td><Button color='warning'  onClick={()=>{this.editData(val.id)}}>EDIT</Button></td>
                  {/* panggil render input text, lalu ambil valuenya */}
                </tr>
            )
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
           this.componentDidMount()
       })
    console.log(pjg)
   }
   editData=(a)=>{ //triall
       var url= `http://localhost:2000/users/`
       var pjg = a
       Axios.put(url+pjg)
       .then((res)=>{
           this.componentDidMount()
       })
    console.log(pjg)
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
            this.componentDidMount()
            this.refs.firstname.value = ''
            this.refs.lastname.value = ''
            this.refs.email.value = ''
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className="m-auto ">
                <h1 className="text-center">Ini Home</h1>
                <Link to='/bukan'>
                    <center>
                        <button className="m-auto btn btn-success shadow">pindah ke Not Home</button>
                    </center>
                </Link>
                    <button onClick={this.contoh}>Klik Saya</button>
                <Table striped  className='container col-4 text-center'>
                    <thead>
                        <tr>
                        <th >#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderUserData()} 
                    </tbody>
                </Table>   
                    <Form>
                {/* <FormGroup>
                  <Label for="first-name">First Name</Label>
                  <Input type="text" name="first-name" ref="firstname" placeholder="First Name" />
                  </FormGroup>
                  <FormGroup>
                  <Label for="last-name">Last Name</Label>
                  <Input type="text" name="last-name" ref="lastname" placeholder="Last Name" />
                  </FormGroup>
                  <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" ref="email" placeholder="email@email.email" />
                </FormGroup> */}
                <input type="text" ClassName="form-control" ref="firstname" placeholder="First Name" />
                <input type="text" ClassName="form-control" ref="lastname" placeholder="Last Name" />
                <input type="email" ClassName="form-control" ref="email" placeholder="Email" />
                <Button color='success'  onClick={this.submitData}>Submit</Button>
              </Form>
            </div>
        )
    }
}

export default home