import React, { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

function FoodReel() {
  // Mock video list (you can replace with API later)
  const initialVideos = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    url: `https://www.w3schools.com/html/mov_bbb.mp4`, // sample video
    title: `Delicious Dish ${i + 1}`,
  }))

  const [videos, setVideos] = useState(initialVideos)

  // Load more when scrolled to bottom
  const fetchMoreVideos = () => {
    setTimeout(() => {
      const newVideos = Array.from({ length: 3 }).map((_, i) => ({
        id: videos.length + i + 1,
        url: `https://www.w3schools.com/html/mov_bbb.mp4`,
        title: `Delicious Dish ${videos.length + i + 1}`,
      }))
      setVideos([...videos, ...newVideos])
    }, 1500)
  }

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden">
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreVideos}
        hasMore={true}
        loader={<h4 className="text-center py-4">Loading more reels...</h4>}
        scrollThreshold={0.9}
        height={"100vh"}
      >
        <div className="flex flex-col items-center">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-full h-screen flex flex-col justify-center items-center border-b border-gray-700"
            >
              {/* Video player */}
              <video
                src={video.url}
                controls
                loop
                muted
                autoPlay
                className="h-[60vh] w-auto rounded-xl shadow-lg"
              ></video>

              {/* Overlay title */}
              <p className="mt-2 text-lg font-semibold">{video.title}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default FoodReel
