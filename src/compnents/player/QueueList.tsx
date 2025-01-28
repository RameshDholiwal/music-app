import './QueueList.css'

export default function QueueList({tracks, setCurrentIndex}: {tracks:any[], setCurrentIndex:any}) {
  return (
    <>
      <div className="queue-container">
        <div className="queue-title">
          <p>Up Next</p>
        </div>
        <div className="queue-list">
          <div className='songlist'>
            {
              //Array.from({length: 20})
              tracks.map((item: any, index: number) => {
                return (
                  <div key={item._id} className='song-item' onClick={() => setCurrentIndex(index)}>
                    <span>{item.title}</span>
                    <span>{item.duration}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
