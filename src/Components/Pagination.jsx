import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick = () =>{
    this.props.next(this.props.newArray, this.props.currentPage, this.props.perPage)
  }
 
  render() {
    return (
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
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={this.handleClick}next href="#" />
        </PaginationItem>
      </Pagination>
    )
  }
}