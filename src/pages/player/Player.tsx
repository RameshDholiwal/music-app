import { useEffect, useState } from 'react'
import PlayCard from '../../compnents/player/PlayCard'
import PlaySong from '../../compnents/player/PlaySong'
import QueueList from '../../compnents/player/QueueList'
import SongList from '../../compnents/player/SongList'
import './Player.css'
import { ListData } from '../../compnents/SongsList'

type tracksclass = {
  _id: number,
  image: string,
  artists: string,
  title: string,
  dtime: string,
  duration: string,
  url: string,
  mimeType: string
}
export default function Player() {
  const [tracks, setTracks] = useState<tracksclass[]>([])
  const [currentTrack, setCurrentTrack] = useState<tracksclass | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setTracks(ListData)
    setCurrentTrack(ListData[0])
  }, [])

  useEffect(() => {
    console.log("2", currentIndex)
    setCurrentTrack(ListData[currentIndex])
  }, [currentIndex])

  return (
    <>
      <div className='player-container'>
        <div className="player-playcard">
          <PlayCard currentTrack={currentTrack} tracks={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
        <div className="player-playsong">
          <PlaySong currentTrack={currentTrack} />
        </div>
        <div className="player-songlist">
          <SongList />
        </div>
        <div className="player-queuelist">
          <QueueList tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </>
  )
}
