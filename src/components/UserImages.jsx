import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function UserImages() {
  const [data, setData] = useState({ pics: [] });

  useEffect(() => {
    axios
      .get("https://pixabay.com/api/?key=17864962-b5b3c380b7c652569844aadb6")
      .then((res) => {
        console.log("Before useState", res.data.hits);
        let pictures = res.data.hits;
        setData(pictures);
        console.log("After useState ", data.pics);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* {data &&
        data.map(picture => (
          <ImageHolder>
            <Image src={picture.webformatURL} alt="motorcycle" />
          </ImageHolder>
          
        ))
      } */}
    </div>
  );
}

const ImageHolder = styled.div`
  width: 640px;
  display: flex;
`;

const Image = styled.img`
  width: 640px;
`;

// src='https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
