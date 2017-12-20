import React from 'react';
import {Link} from 'react-router';

class SpotCard extends React.Component {

  render() {
    console.log(this.props.name);
    const businessHour = this.props.businessHour ? (<p>{this.props.businessHour}</p>) : '';
    const building = this.props.building ? (<p>{this.props.building}</p>) : '';
    return (
      <div
        className="spot"
      >
        <div className="spot__left">
          <a href={`https://pathee.com/spots/${this.props.spot_id}`} target="_blank">
            <h3>{this.props.name}</h3>
          </a>
          <p>{this.props.keywords.join(" ")}</p>
          {businessHour}
          {building}
          <div className="spot__option">

            <div className="spot__option__photo">
              <img src="/home.svg" role="presentation" />
              <p>{this.props.photo.original}</p>
            </div>
            <div className="spot__option__photo">
              <img src="/globe.svg" role="presentation" />
              <p>{this.props.photo.other}</p>
            </div>

          </div>
        </div>
        <div className="spot__right">
          <div className="spot__right__container">
            <div className="spot__right__container__top">
              <div className="spot__right__container__top__distance">
                <p>{this.props.distance}<span>m</span></p>
              </div>
            </div>
            <div className="spot__right__container__action">
              <a href={`https://www.google.co.jp/maps?q=${this.props.address}`} target="_blank">
                <img
                  className="spot__right__container__action__map"
                  src="/map.svg"
                  role="presentation"
                />
              </a>
              <Link to={`/upload/${this.props.spot_id}`} target="_blank">
                <img
                  className="spot__right__container__action__upload"
                  src="/camera.svg"
                  role="presentation"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotCard;
