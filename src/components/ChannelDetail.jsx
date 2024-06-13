import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchFromAPI } from "../utils/FetchFromAPI";

import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`channels?part="snippet"&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  console.log(channelDetail, videos);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(131,58,180,1) 1%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} 
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
  
};

export default ChannelDetail;
