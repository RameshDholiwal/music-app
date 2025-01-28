import './PlaySong.css'

export default function PlaySong({currentTrack}: {currentTrack:any}) {
  return (
    <>
      <div className='playsong-container'>
        <div className="play-image">
          <img src={currentTrack?.image} alt="play-image" />
        </div>
        <div className='play-text'>
          <p className='text-title'>
            {currentTrack?.title} - {currentTrack?.artists}
          </p>
          <p className="text-detail">
            {currentTrack?.title} is an type by {currentTrack?.artists} with 10 tracks
          </p>
          <p className="text-date">
            Release Date: {currentTrack?.dtime}
          </p>
        </div>
      </div>
    </>
  )
}
