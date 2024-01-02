import React from 'react';
import './Moviespage.css';
import { Link } from 'react-router-dom';
const ProfileCard = ({ name, imageSrc, postCount, likeCount }) => (
  <div className="card">
    <img src={imageSrc} alt="Person" className="card__image" />
    <p className="card__name">{name}</p>
    <div className="grid-container">
      <div className="grid-child-posts">{postCount} ratings</div>
      <div className="grid-child-followers">{likeCount} votes</div>
    </div>
    <ul className="social-icons">
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>
    <button className="btn draw-border">ADD TO CART</button>
    <Link to="/Calendar">
    <button className="btn draw-border">
      BOOK TICKET
    </button>
    </Link>
  </div>
);

const ProfileList = () => (
  <div className="container">
    <div>
    <ProfileCard
      name="Lily-Grace Colley"
      imageSrc="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/saba-nayagan-et00380404-1703065790.jpg"
      postCount={8.1}
      likeCount={3400}
      />
    <button >
      <Link to="/movie1">
        VIEW DETAILS
        </Link>
        </button>
    </div>
    <div>
    <ProfileCard
      name="Murray Reeve"
      imageSrc="https://tse4.mm.bing.net/th?id=OIP.UZDia2IS9JxIz8BWxGOB5AHaEK&pid=Api&P=0&h=180"
      postCount={8.4}
      likeCount={5025}
     
    />
    <button><Link to="/movie2">
      VIEW DETAILS
      </Link>
      </button>
    </div>
    <div>
    <ProfileCard
      name="Bianca Serrano"
      imageSrc="https://tse3.mm.bing.net/th?id=OIP.DtIf0I11u5oii1yz8R62UQHaFj&pid=Api&P=0&h=180"
      postCount={9.1}
      likeCount={9099}
    />
    
    <button><Link to="/movie3">
      VIEW DETAILS
      </Link>
      </button>
    </div>
    <div>
    <ProfileCard
      name="Lily-Grace Colley"
      imageSrc="https://tse1.mm.bing.net/th?id=OIP.HdylC63rIeEGneiCpnCVMgHaE-&pid=Api&P=0&h=180"
      postCount={7.8}
      likeCount={1012}
    />
    <button>VIEW DETAILS</button>
    </div>
    <div>
    <ProfileCard
      name="Murray Reeve"
      imageSrc="https://tse3.mm.bing.net/th?id=OIP.qddt_KCK0mbzY_CvgDWHKwHaEK&pid=Api&P=0&h=180"
      postCount={9.1}
      likeCount={8099}
    />
    <button>VIEW DETAILS</button>
    </div><div>
    <ProfileCard
      name="Bianca Serrano"
      imageSrc="https://tse4.mm.bing.net/th?id=OIP.FT2faI3irOBl9-ZBrKf2lAHaGJ&pid=Api&P=0&h=180"
      postCount={9.5}
      likeCount={9098}
    />
    <button>VIEW DETAILS</button>
    </div><div>
    <ProfileCard
      name="Lily-Grace Colley"
      imageSrc="https://tse4.mm.bing.net/th?id=OIP.1kwOxf3F55rgRSyivbAexwHaEK&pid=Api&P=0&h=180"
      postCount={8.9}
      likeCount={8096}
    />
    <button>VIEW DETAILS</button>
    </div>
    <div>
    <ProfileCard
      name="Murray Reeve"
      imageSrc="https://tse1.mm.bing.net/th?id=OIP.jEw5nrdPvx1CPFZDHlOr9QHaJ3&pid=Api&P=0&h=180"
      postCount={8.8}
      likeCount={8079}
    />
    <button>VIEW DETAILS</button>
    </div>
    <div>
    <ProfileCard
      name="Bianca Serrano"
      imageSrc="https://tse4.mm.bing.net/th?id=OIP.U1Q7j3u6HzMV-zO_8BhFswHaJ4&pid=Api&P=0&h=180"
      postCount={9.2}
      likeCount={9300}
    />
    <button>VIEW DETAILS</button>
    </div>
  </div>
);

export default ProfileList;
