import './SongList.css'
import AlbumWidget from './AlbumWidget'

export default function SongList() {
  const albumData = [{
    title:'first album', subList:'20 followers', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  },{
    title:'second album', subList:'300 followers', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  },{
    title:'second album', subList:'300 followers', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  },{
    title:'second album', subList:'300 followers', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  },{
    title:'second album', subList:'300 followers', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  }];
  const similarData = [{
    title:'soft pop hits', subList:'20 songs', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  }];
  const releaseData = [{
    title:'harry house', subList:'harry styles', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007'
  }];
  return (
    <>
      <div className="songlist-container">
        <div className="similar-atists">
          <p>similar artists</p>
          <div className='list-data'>
            <AlbumWidget type='artists' data={albumData} />
          </div>
        </div>
        <div className="made-for-you">
          <p>made for you</p>
          <div className='list-data'>
            <AlbumWidget type='similarsong' data={similarData} />
          </div>
        </div>
        <div className="new-releases">
          <p>new releases</p>
          <div className='list-data'>
            <AlbumWidget type='newrelease' data={releaseData} />
          </div>
        </div>
      </div>
    </>
  )
}
