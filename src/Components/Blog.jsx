import React from 'react'
import {Col, Button,Row, Card, CardBody, Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import * as blogsService from "../services/blogsService"
import { Link} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,} from "@fortawesome/free-solid-svg-icons";
import { link } from 'fs';
import './blog.css'


export default class Blog extends React.Component{

constructor(props){
   super(props)
   this.state ={
       blogs:[],
       recentBlog:[]
   }
}

componentDidMount(){
this.getRecentBlogs()

}
getRecentBlogs = ()=>{
blogsService
.getRecentBlogs()
.then(this.onRecentBlogsSuccess)
.then(this.createRecentBlog)

.catch(this.onRecentBlogsError)
}

onRecentBlogsSuccess = res =>{
this.setState({blogs:res.item.pagedItems})
const blog = []
blog.push(...this.state.blogs)

}

createRecentBlog = () => {
   const blogs = [...this.state.blogs];
   const recentBlog = blogs.splice(0,1);
   console.log(recentBlog)
   this.setState({recentBlog,blogs})
}

formatDateString = (date) =>{
    let newDate = date.substring(0,10)
    return newDate
}

mapRecentBlog = (blog) =>(
   <Card className = "card-border">
       <div className="float-left">
   <CardBody>
       <div className="text-left">
       <h3>{blog.title}</h3>
        <p>By: {blog.author.firstName} {blog.author.lastName} {this.formatDateString(blog.dateCreated)}</p>
        <p>{blog.shortTitle}</p>
        <p>{blog.shortDescription}</p>
        <p>{blog.content}</p>
            <img className="blog-large-img" alt="" src = {blog.author.imageUrl} height="400px" width="400px" />
   </div>
   </CardBody>
  </div>

</Card> 
)

onRecentBlogsError = error =>console.log(error)

mapImage = (images) =>(
   images.imageUrl
)

mapBlogs = (blog, index) =>(
 
           <Card className = "card-med" key = {index}>
               <CardBody>
                   <div className="text-left">
                   <p>{blog.shortTitle}</p>
                   <p>{blog.shortDescription}</p>
                   <p></p>
                   <div className="blogs-card-image">
                   <img className = "blog-med-img" alt='' src={blog.images.map(this.mapImage)} height="200px" width="200px"/>
                   </div>
                   </div>
                   <Button className ="float-left" type="button" color="primary">View More</Button>
                   <Button className="float-right" type="button" color="success">Edit</Button>

                   </CardBody>
                  

                  
               </Card>
);

render(){
   return(
<div>
       <Row>
       <Col md={8}>
<div>
   {this.state.recentBlog.map(this.mapRecentBlog)}
   </div>
</Col>

<Col md={4}>
<div>
    <h6 className="text-left">Recently Added Blogs</h6>
<Pagination size="sm" aria-label="Page navigation example">
      
      <PaginationItem>
        <PaginationLink  onClick={this.props.previous} previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink  href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
        <PaginationItem>
        <PaginationLink onClick={this.handleClick}next href="#" />
      </PaginationItem>
    </Pagination>
</div>
<div>
   {this.state.blogs.map(this.mapBlogs)}
   </div>
</Col>
</Row>
</div>
   )
}

}


