import React from 'react';
import styled from 'styled-components';

// const widthandheight = () => {
//   return { width: '25%', height: '25%' };
// };


const ImageStyle = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: white;
  overflow: hidden;
`;
const TextStyle = styled.div`
  background-color: rgb(50,50,50);
  font-size: 2em;
  text-align: center;
`;

const Artist = (props) => {
  return (
    <div>
      <ImageStyle>
        <img src={props.artist.image} alt="related artist" height="150px" width="150px" />
      </ImageStyle>
      <TextStyle>
        { props.artist.name }
      </TextStyle>
    </div>
  );
};

export default Artist;