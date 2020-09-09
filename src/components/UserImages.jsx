import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import UserIcon from "./UserIcon";

import useFetch from "../hooks/useFetch";
import API from "../utils/API";

import { library, icon } from "@fortawesome/fontawesome-svg-core";
// import { faBoxingGlove } from "@fortawesome/pro-light-svg-icons";
// import { faHeart as faBoxingGloveRegular } from "@fortawesome/regular-light-svg-icons";
// import { faHeart as faBoxingGloveSolid } from "@fortawesome/solid-light-svg-icons";

library.add(fab, icon, faHeart);

export default function UserImages(props) {
  const [data, setData] = useState({ pics: [] });

  // styles
  const redHeart = {
    color: "red",
  };
  const blackHeart = {
    color: "black",
  };

  useEffect(() => {
    axios
      .get("https://pixabay.com/api/?key=17864962-b5b3c380b7c652569844aadb6")
      .then((res) => {
        // console.log("Before useState", res.data.hits);
        let pictures = res.data.hits;
        setData({ pics: pictures });
        // console.log("After useState ", data.pics);
      })
      .catch((err) => console.log(err));
  }, []);

  // const { response, isLoading, error } = useFetch({
  //   api: API,
  //   method: "get",
  //   url: "/?key=b5b3c380b7c652569844aadb6",
  // });
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // console.log(response);
  //   if (response !== null) {
  //     setData(response);
  //   }
  // }, [response]);

  console.log(data);

  return (
    <Main>
      {/* {isLoading} */}

      {/* {error && error.name && error.name === "Error" && (
        <div className="error-grid">
          <h3>{error.name}</h3>
          <p>{error.message}</p>
        </div>
      )} */}

      {data &&
        data.pics.map((data) => (
          <UserBox key={data.id}>
            <Header>
              <UserIcon />
              <Span>{data.user}</Span>
            </Header>
            <div>
              <ImageHolder>
                <Image src={data.webformatURL} alt={data.tags} />
              </ImageHolder>
            </div>

            <FeedBack>
              <Section>
                {/* change the color of heart depending on data.likes */}
                <FontAwesomeIcon
                  icon={data.likes ? solidHeart : faHeart}
                  style={data.likes ? redHeart : blackHeart}
                  size="lg"
                />
                {/* <FontAwesomeIcon icon={faHeart} style={fontStyles} /> */}

                {/* <FontAwesomeIcon icon={solidHeart} size="lg" /> */}

                <p>Hi</p>
              </Section>
            </FeedBack>
          </UserBox>
        ))}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  position: relative;
  margin: 50px 0 0 0;
  padding: 0;
`;

const ImageHolder = styled.div`
  width: 640px;
  
  display: flex;
`;

const Image = styled.img`
  width: 640px;
`;

const UserBox = styled.article`
  padding: 0;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  margin-bottom: 60px;
  width: 640px;
  background: white;
`;
const Header = styled.header`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Span = styled.span`
  margin-left: 15px;
  font-size: 0.8em;
  font-weight: bold;
`;
const FeedBack = styled.div``;
const Section = styled.section`
  padding: 0 16px 0 16px;
`;
const MainSection = styled.section``;

// src='https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
