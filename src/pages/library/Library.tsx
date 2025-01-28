import './Library.css'
import { FaPlayCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

export default function Library() {
  const navigate = useNavigate()

  return (
    <>
      <div className='library-container'>
        {
          Array.from({length : 15}).map((_item: any, _index: number) => {
            return (
              <div className='library-detail'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiXXEaHJieKwajM-xL9LTeDOmNDAHY-HhQc2wMHes3sk-ubDNNA8rAGdY9fNrHGwv&s=0&ec=72801007" alt="library" className='library-img' />
                <p className='library-title'>First Library of my songs sing by me all time</p>
                <p className='library-songs'>5 Songs</p>
                <div className='library-play' onClick={() => navigate('/player')}>
                  <IconContext.Provider value={{size: "40px", color: "#f0bb36"}}>
                    <FaPlayCircle />
                  </IconContext.Provider>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
