import './Animation.css'

export default function Animation({isPlaying}: {isPlaying: boolean}) {
    const boxClass = isPlaying ? "box active" : "box"

  return (
    <>
        <div className='animation-container'>
            <div className={`${boxClass} box1`}></div>
            <div className={`${boxClass} box2`}></div>
            <div className={`${boxClass} box3`}></div>
            <div className={`${boxClass} box4`}></div>
            <div className={`${boxClass} box5`}></div>
            <div className={`${boxClass} box6`}></div>
            <div className={`${boxClass} box7`}></div>
            <div className={`${boxClass} box2`}></div>
            <div className={`${boxClass} box3`}></div>
            <div className={`${boxClass} box4`}></div>
            <div className={`${boxClass} box5`}></div>
            <div className={`${boxClass} box6`}></div>
            <div className={`${boxClass} box7`}></div>
            <div className={`${boxClass} box1`}></div>
        </div>
    </>
  )
}
