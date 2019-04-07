import React from "react";
import * as userService from "../services/userServices";
import PeopleCard from "./PeopleCard";
import Pagination from "./Pagination";
import NavBar from './NavBar'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      profiles: [],
      totalCount: null,
      totalPages: null,
      currentPage:0,
      allProfiles:[]
    };
  }

  componentDidMount() {
    this.currentUser();
  }

  currentUser = () => {
    userService
      .currentUser()
      .then(this.currentUserSuccess)
      .catch(this.currentUserError);
  };

  currentUserSuccess = res => {
    console.log(res.data.item.actualUserId);
    this.setState({ id: res.data.item.actualUserId });
    this.currentUserId(this.state.id);
  };

  currentUserError = error => console.log(error);

  currentUserId = id => {
    userService
      .currentUserId(id)
      .then(this.currentUserIdSuccess)
      .catch(this.currentUserIdError);
  };

  currentUserIdSuccess = res => {
    console.log(res);
    this.setState({
      firstName: res.data.item.firstName,
      lastName: res.data.item.lastName,
      email: res.data.item.email
    });
  };

  currentUserIdError = error => console.log(error);

  allUsers = () => {
    userService
      .allUsers()
      .then(this.allUsersSuccess)
      //.then(this.getPagination(this.state.totalCount))
      .catch(this.allUsersError);
  };

  allUsersSuccess = results => {
    console.log(results.data)
    this.setState({
      profiles: results.data.item.pagedItems,
      totalCount: results.data.item.totalCount,
      totalPages: results.data.item.totalPages
    });
    this.getPagination(this.state.totalCount)
  };

  getPagination = totalCount => {
   userService
   .getPagination(totalCount)
   .then(this.paginationSuccess)
   .catch(this.paginationError)
  }

  paginationSuccess = results => {
    console.log(results);
    this.setState({allProfiles:results.data.item.pagedItems})
    console.log(this.state.allProfiles)

  };

  paginationError = error => {
    console.log(error);
  };

  pagination = () =>{
    this.getPagination(this.state.currentPage)
  }

  allUserError = error => {
    console.log(error);
  };

  logoutUser = () => {
    userService
      .logoutUser()
      .then(this.logoutSuccess)
      .catch(this.logoutError);
  };

  logoutSuccess = res => console.log(res);
  logoutError = error => console.log(error);

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const people = this.state.profiles.map(profile => {
      return (
        <PeopleCard
          key={profile.id}
          name={profile.bio}
          slug={profile.slug}
          image={
            !(profile.primaryImage === null)
              ? profile.primaryImage.imageUrl
              :''
          }
        />
      );
    });
    return (
      <div>
       <NavBar  logoutUser = {this.logoutUser} email={this.state.email} allUsers={this.allUsers} pagination={this.pagination} />
        <h5>
          {" "}
          Welcome {this.state.firstName} {this.state.lastName}{" "}
          <div>
            <Pagination pagination={this.pagination} />
          </div>
        </h5>
        {people}
      </div>
    );
  }
}