import './Home.css'
import ValorantCover from  './valorant_cover.png'

function Home () {
    return (
    <div>
        <img src={ValorantCover} alt='ValorantCover' className='ValCover'/>
        <video loop autoPlay>
            <source src='https://cdn.discordapp.com/attachments/853891866575896586/970776627338416138/jimmy_rage_001.mp4'
            type='video/mp4'
            className='jimmy'/>
        </video>
    </div>
    )
}


export default Home