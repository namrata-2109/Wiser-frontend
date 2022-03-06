import React, {useState} from 'react'
import './Feed.css'
import TrendingData from './TrendingData.js'
import FeedData from './FeedData.js'

const Feed = () => {

    const[toggleTopic, setToggleTopic] = useState(1)

    const toggling = (index) => {
        setToggleTopic(index)
    }

    return (
        <div className='main-screen'>
            <div className='main-left'>
                <div className='left-left'>
                    <div className='top-left'>
                        <i class="fa-solid fa-wifi wifi-icon" />
                        <h1 className='wiser_text'>
                            Wiser
                        </h1>
                    </div>
                    <div className='bottom-left'>
                        <h2 className='ong-topics'>Ongoing Topics</h2>
                        <h2 className={toggleTopic === 1 ? "active-topic" : "software" } onClick={() => toggling(1)} >Software</h2>
                        <h2 className={toggleTopic === 2 ? "active-topic" : "python" } onClick={() => toggling(2)} >Python</h2>
                        <h2 className={toggleTopic === 3 ? "active-topic" : "miscellaneous" } onClick={() => toggling(3)} >Miscellaneous</h2>
                    </div>
                </div>

                <div className='left-right'>
                    <div className='top-middle'>
                        <h1 className='wiser-feeds'>
                            Wiser Feeds
                        </h1>
                    </div>

                    <div className='bottom-middle'>
                        {
                            FeedData.map((values) => (
                                <div className='feed-cards'>
                                    <h3 className='title'>{values.title}</h3>
                                    <span className='time'>{values.time}</span>
                                    <br />
                                    <br />
                                    <p className='para'>{values.para}</p>
                                    <div className='cards-icons'>
                                        <div className='left-icons'>
                                            <i class="fa-regular fa-thumbs-up iconss"/>
                                            <i class="fa-solid fa-comments iconss"/>
                                            <i class="fa-solid fa-arrow-up-from-bracket iconss"/>
                                        </div>
                                        <div className='right-icon'>
                                            <i class="fa-solid fa-font-awesome flag"/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className='main-right'>
                <div className='top-right'>
                    <h1 className='trending'>
                        Trending
                    </h1>
                </div>
                <div className='bottom-right'>
                    {TrendingData.map((value) => (
                        <div className='cards'>
                            <h4 className='h4-text'>{value.topic}</h4>
                            <span className='span-text'>{value.body}</span><br />
                            <div className='same-line'>
                                <span className='span-text'>{value.post}</span>
                                <h4 className='h4-text'>{value.user}</h4>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Feed