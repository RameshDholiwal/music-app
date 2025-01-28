import './AlbumData.css'

export default function AlbumData({title, subList, image}: {title: string, subList: string, image: string}) {
  return (
    <>
        <div className="album-container">
            <img src={image} alt={title} />
            <div className="album-detail">
                <div className='album-title'>
                    {title}
                </div>
                <div className="album-sublist">
                    {subList}
                </div>
            </div>
        </div>
    </>
  )
}
