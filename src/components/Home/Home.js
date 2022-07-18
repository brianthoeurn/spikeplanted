import './Home.css'
import jimmy from './jimmy.mp4'
import ValorantCover from  './valorant_cover.png'

function Home () {
    return (
    <div>
        <img src={ValorantCover} alt='ValorantCover' className='ValCover'/>
        <video width="300" height="280" controls>
            <source src={jimmy}
            type='video/mp4'
            className='jimmy'/>
        </video>
    </div>
    )
}


export default Home