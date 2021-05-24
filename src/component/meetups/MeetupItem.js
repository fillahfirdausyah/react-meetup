import { React, useState } from "react";
import Card from "../card";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswerOutlined';
import ShareIcon from '@material-ui/icons/Share';

function MeetupItem(props) {

  const [like, setLike] = useState(false);

  const Like = () => {
    !like ? setLike(true) : setLike(false)
  }

  return (
    <Card class="card custom-card">
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <Link to="#" className="btn" onClick={Like}>
          { like ?
            <FavoriteIcon style={{ color: "#f9226a" }} />
            :
            <FavoriteIcon />
          }
          { like ? " You and " : null}
          200
        </Link>
        <Link to="#" className="btn">
          <QuestionAnswerIcon titleAccess="Comment" />
        </Link>
        <Link to="#" className="btn">
          <ShareIcon titleAccess="Share" />
        </Link>
      </div>
    </Card>
  );
}

export default MeetupItem;
