import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
// eslint-disable-next-line no-unused-vars
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  // eslint-disable-next-line no-unused-vars
  const [{ term }, dispatch] = useStateValue();
  //   LIVE API CALL
  //   const { data } = useGoogleSearch(term);
  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
        <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="/shopping">shopping</Link>
            </div>
            <div className="searchPage__option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
        </div>

        <div className="searchPage__optionsRight">
          <div className="searchPage__option">
            <Link to="/settings">Settings</Link>
          </div>
          <div className="searchPage__option">
            <Link to="/tools">Tools</Link>
          </div>
        </div>
      </div>
      <div className="searchPage__results">{/* results */}</div>
    </div>
  );
}

export default SearchPage;
