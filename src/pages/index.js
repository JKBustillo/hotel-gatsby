import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import HotelImage from "../components/hotelImage";
import HomeContent from "../components/homeContent";
import useRooms from "../hooks/useRooms";
import RoomPreview from "../components/roomPreview";

const IndexPage = () => {
  const rooms = useRooms();
  
  return (
    <Layout>
      <HotelImage />
  
      <HomeContent />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our rooms</h2>

      <ul>
        {rooms.map(room => (
          <RoomPreview
            key={room.id}
            room={room}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage;