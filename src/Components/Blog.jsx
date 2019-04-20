import React from "react";
import {
  Col,
  Button,
  Row,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import * as blogsService from "../services/blogsService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./blog.css";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      recentBlog: []
    };
  }

  componentDidMount() {
    this.getRecentBlogs();
  }
  getRecentBlogs = () => {
    blogsService
      .getRecentBlogs()
      .then(this.onRecentBlogsSuccess)
      .then(this.createRecentBlog)
      .catch(this.onRecentBlogsError);
  };

  onRecentBlogsSuccess = res => {
    console.log(res);
    //this.setState({ blogs: res.item.pagedItems });
    this.setState({ blogs: res.items });
    const blog = [];
    blog.push(...this.state.blogs);
  };

  createRecentBlog = () => {
    const blogs = [...this.state.blogs];
    const recentBlog = blogs.splice(0, 1);
    this.setState({ recentBlog, blogs });
  };

  createCurrentDisplayBlog = (e, blog) => {
    const newBlog = [];
    newBlog.push(blog);
    this.setState({ recentBlog: newBlog });
  };

  formatDateString = date => {
    let newDate = date.substring(0, 10);
    return newDate;
  };

  mapRecentBlog = (blog, index) => {
    //let imgs =this.getFirstImage(blog.images);
    return (
      <Card className="card-border blog-large">
        <div className="float-left blog-large" key={index}>
          <CardBody>
            <div className="text-left">
              <h3 className="text-center">{blog.title}</h3>
              <p>
                By: {blog.firstName} {blog.lastName}{" "}
                {this.formatDateString(blog.metaData)}
              </p>
              <p>{blog.shortTitle}</p>
              <p>{blog.shortDescription}</p>
              <p>{blog.content}</p>
              <img
                className="blog-large-img"
                alt=""
                src={blog.primaryImage}
                height="400px"
                width="400px"
              />
            </div>
          </CardBody>
        </div>
      </Card>
    );
  };

  onRecentBlogsError = error => console.log(error);

  //mapImage = images => images.imageUrl;

  //getFirstImage = images => images ? images[0] ?  images[0].imageUrl : null : null;

  mapBlogs = (blog, index) => {
    //let imgs =this.getFirstImage(blog.images);

    return (
      <Card className="card-med" key={index}>
        <CardBody>
          <div className="text-left">
            <div>
              <h5 className="text-center">{blog.shortTitle}</h5>
            </div>
            <p>{blog.shortDescription}</p>
            <div className="blogs-card-image">
              <img
                className="blog-med-img"
                alt=""
                src={blog.primaryImage}
                height="200px"
                width="200px"
              />
            </div>
          </div>
          <Button
            className="float-left"
            type="button"
            color="primary"
            onClick={e => this.createCurrentDisplayBlog(e, blog)}
          >
            View More
          </Button>
          <Button className="float-right" type="button" color="success">
            Edit
          </Button>
        </CardBody>
      </Card>
    ); 
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={{ size: 4, offset: 8 }}>
        
            <div className="blog-nav">
              <h6 className="text-left">
                Recently Added Blogs
                <span className="float-right">
                  <FontAwesomeIcon className="icon"
                    icon={faEdit}
                    size="2x"
                   ></FontAwesomeIcon>
                </span>
              </h6>
              <Pagination size="sm" aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink
                    onClick={this.props.previous}
                    previous
                    href="#"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={this.handleClick} next href="#" />
                </PaginationItem>
              </Pagination>
            </div>
          
          </Col>
        </Row>

        <Row className="main-content">
          <Col md={8}>
            <div>{this.state.recentBlog.map(this.mapRecentBlog)}</div>
          </Col>

          <Col md={4}>
            <div>{this.state.blogs.map(this.mapBlogs)}</div>
          </Col>
        </Row>
      </div>
    );
  }
}
