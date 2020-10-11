import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
// eslint-disable-next-line no-unused-vars
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";

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
      </div>
      <div className="searchPage__results">{/* results */}</div>
    </div>
  );
}

export default SearchPage;
