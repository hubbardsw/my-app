import React from 'react'
import {Col, Button,Row,} from 'reactstrap'
import * as blogsService from "../services/blogsService"

export default class Blog extends React.Component{

constructor(props){
    super(props)
    this.state ={}
}

componentDidMount(){
this.getRecentBlogs()
}

getRecentBlogs = ()=>{
blogsService
.getRecentBlogs()
.then(this.onRecentBlogsSuccess)
.catch(this.onRecentBlogsError)

}

onRecentBlogsSuccess = res =>console.log(res)

onRecentBlogsError = error =>console.log(error)



render(){
    return(
        <div>
Hello
        </div>

    )
}

}

