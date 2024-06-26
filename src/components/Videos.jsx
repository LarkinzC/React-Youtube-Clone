import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Videos = ({videos, direction}) => {
  if(!videos?.length) return '...loading'

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      { videos.map((vid, idx) => (
        <Box key={idx}>
          {vid.id.videoId && <VideoCard video={vid}/>}
          {vid.id.channelId && <ChannelCard channelDetail={vid}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos