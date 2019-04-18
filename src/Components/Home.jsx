import React from "react";
import * as userService from "../services/userServices";
import * as peopleService from "../services/peopleService";
import PeopleCard from "./PeopleCard2";
import Pagination from "./Pagination";
import NavBar from "./NavBar";
import ProfileDisplay from "./Profile";
import AlertResults from "./Alert";

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
      totalPages: null,
      pageSize: 6,
      currentPage: 0,
      hasNext: true,
      hasPrevious: false,
      pageIndex: null,
      showProfile: false,
      person: [],
      isUpdated: false,
      searchTerm: "",
      alert: false,
      showCounter: false
    };
  }

  componentDidMount() {
    //this.currentUser();
    userService
    .currentUser()
    .then(this.currentUserSuccess)
    .catch(this.currentUserError)
  }

  currentUser = () => {
    userService
      .currentUser()
      .then(this.currentUserSuccess)
      .catch(this.currentUserError);
  };

  currentUserSuccess = res => {
    this.setState({ id: res.item.actualUserId });
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
    this.setState({
      firstName: res.item.firstName,
      lastName: res.item.lastName,
      email: res.item.email
    });
  };
  currentUserIdError = error => console.log(error);

  getPagination = (pageNumber, pageSize) => {
    peopleService
      .getPagination(this.state.currentPage, this.state.pageSize)
      .then(this.onPaginationSuccess)
      .catch(this.paginationError);
  };

  onPaginationSuccess = res => {
    this.setState({
      profiles: res.item.pagedItems,
      totalPages: res.item.totalPages,
      hasNext: res.item.hasNextPage,
      hasPrevious: res.item.hasPreviousPage,
      pageIndex: res.item.pageIndex,
      showCounter: true
    });
  };

  paginationError = error => {
    console.log(error);
  };

  allUserError = error => {
    console.log(error);
  };

  logoutUser = () => {
    userService
      .logoutUser()
      .then(this.logoutSuccess)
      .catch(this.logoutError);
  };

  logoutSuccess = res =>{
    console.log(res);
     } 

  logoutError = error => console.log(error);

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  next = (pageNumber, pageSize) => {
    if (this.state.hasNext) {
      this.setState({ currentPage: this.state.currentPage + 1 }, () =>
        this.getPagination(this.state.currentPage, this.pageSize)
      );
    }
  };

  previous = () => {
    if (this.state.hasPrevious) {
      this.setState({ currentPage: this.state.currentPage - 1 }, () =>
        this.getPagination(this.state.currentPage, this.pageSize)
      );
    }
    return this.state.currentPage;
  };

 // getProfileById = id => {
    //userService
  //  peopleService
  //    .getProfileById(id)
   //   .then(this.getProfileByIdSuccess)
   //   .catch(this.getProfileByIdError);
 // };
 // getProfileByIdSuccess = item => {
 //   const items = item.item;
 //   let profile = { ...items };
 //   let primaryImage = { ...profile.primaryImage };
 //   profile.primaryImage = primaryImage;

  //  this.setState((prevState, props) => {
  //    return {
  //      person: profile,
  //      showProfile: true
  //    };
  //  });
 // };

  getProfileByIdSuccess2 = (profile) =>{
    console.log("getProfileByIdSuccess2",profile)
    this.setState((prevState, props)=> {
      return{
        person:profile,
        showProfile:true
      };
    });

  };
  updatePeopleCards=(payload)=>{
   //let newItems = payload.skills.toString()
   //let newSkills = newItems.split(",").map(item =>{
   //   return { "name": item}
   // })
    //payload.skills = newSkills
    const index = this.state.profiles.findIndex((profile)=>profile.id===payload.id),
    profiles = [...this.state.profiles]
    profiles[index] = payload;
    console.log(profiles)
   this.setState({profiles},()=>this.state.profiles.map(this.mapPeopleCard))
  }

  updateProfileById = (id, payload) => {
    //userService
    peopleService
      .updateProfileById(id, payload)
      .then(this.updateProfileSuccess)
      .catch(this.updateProfileError);
  };

  updateProfileSuccess = ({ res, payload }) => {
  //  this.getPagination(this.state.currentPage, this.state.pageSize);
    this.setState({ showProfile: false },()=>this.updatePeopleCards(payload));
     };

  updateProfileError = error => {
    console.log(error);
  };

  getProfileByIdError = results => console.log(results);

  submitUpdateForm = value => {
    console.log("submitUpdateForm",value);
    //let skill = value.skills.split(",");
    //value.skills = skill;
    this.updateProfileById(value.id, value);
  };

  searchByInput = (search, onSuccess, onError) => {
    peopleService
      .searchByInput(this.state.searchTerm)
      .then(this.searchByInputSuccess)
      .catch(this.searchByInputError);
  };

  searchByInputSuccess = res => {
    this.setState({ profiles: res.item.pagedItems });
    console.log(res.item.pagedItems);
  };
  searchByInputError = error => {
    this.setState({ profiles: [], alert: true });
  };
  handleSearchChange = search => {
    this.setState({ searchTerm: search });
  };

  onAlertDismiss = () => {
    this.setState({ alert: false });
  };

  getProfileById = (blog)=>{
    console.log(blog)
  }

  mapPeopleCard = (profile, index) => (
    <PeopleCard
     key={index}
      image={
        !(profile.primaryImage === null) ? profile.primaryImage.imageUrl || profile.primaryImage : ""
      }
      people={profile}
      index={index}
      getProfileById={this.getProfileByIdSuccess2}
    />
  );

  //Rendering For Page/////

  render() {
    const currentPage = this.state.currentPage;
    if (this.state.showProfile) {
      return (
        <ProfileDisplay
          person={this.state.person}
          update={this.updateProfileById}
          submitUpdateForm={this.submitUpdateForm}
        />
      ); 
    } else {
      var pageCounter = (
        <div>
          {this.state.hasNext
            ? `Page ${currentPage + 1} of ${this.state.totalPages}`
            : `End Of Record`}
        </div>
      );
      var peopleList = this.state.profiles.map(this.mapPeopleCard);
    }
    return (
      <div>
        <NavBar
          logoutUser={this.logoutUser}
          email={this.state.email}
          getPagination={this.getPagination}
          handleSearchChange={this.handleSearchChange}
          search={this.state.searchTerm}
          searchByTerms={this.searchByInput}
        />
        <div className=" col-md-3 center-text">
          <Pagination
            pagination={this.pagination}
            next={this.next}
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            previous={this.previous}
          />
        </div>
        <h5>
          {" "}
          Welcome {this.state.firstName} {this.state.lastName}{" "}
          {this.state.showCounter ? pageCounter : ""}
        </h5>
        {peopleList}
        <AlertResults
          alert={this.state.alert}
          onDismiss={this.onAlertDismiss}
        />
      </div>
    );
  }
}

