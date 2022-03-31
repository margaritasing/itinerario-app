import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import info1 from "../img/info1.png";
import info2 from "../img/info2.png";
import info3 from "../img/info3.png";
import { useStateValue } from "../reducer/StateProvider";

export default function CardCities() {

  const [{filterCity}] = useStateValue() 

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="cities">
      <div className="title">
        <h2>Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {filterCity?.map((destination) => {
          return (
            <div className="destination" key={destination._id}>
              <img className="cardcities" src={destination.image} alt="" />
              <h2>{destination.name}</h2>
              <h3>{destination.country}</h3>
              <p>{destination.continents}</p>
              <p>{destination.description}</p>
              <p>{destination.demonym}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.currency}</h4>
              </div>
              <div className="distance">
                <span>{destination.region}</span>
                <span>{destination.language}</span>
              </div>
              <Link type="button"  className="btn btn-info" to={"/city/" + destination._id}>
                Info
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .cardcities {
    width: 100%;
    height: 250px;
    border-radius: 15px;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .cardcities {
      width: 100%;
      height: 200px;
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
