import "./HeroSection.css"
import MainImage from "../assets/main.png"
function Hero() {
    return (
        <div className="container">
            {/* left column */}
            <div className="left-content">
                <div className="navigate-btn">
                    <a href="">Learn</a>
                    <a href="">Pratice</a>
                    <a href="">Grow</a>
                </div>
                <div className="heading">
                    <h1>Your Task,</h1>
                    <h1> <span className="word1">Your</span> <span className="word2">Progress</span></h1>
                    <p>Complete your daily tasks, build real projects, track your progress and get one step closer to your dream career.</p>
                </div>
                <div className="routines">
                    <div className="tasks">
                        <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="blue">
                        </svg>
                        <h4>Daily Tasks</h4>
                        <p>Stay consistent
                            and improve</p>
                    </div>
                    <div className="tasks ">
                        <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="violet">
                        </svg>
                        <h4>Hands-on Practice</h4>
                        <p>Build real world
                            projects</p>
                    </div>
                    <div className="tasks">
                        <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="green">
                        </svg>
                        <h4>Track Progress</h4>
                        <p>See your growth over time</p>
                    </div>
                    <div className="tasks">
                        <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="red">
                        </svg>
                        <h4>Community Support</h4>
                        <p>Learn together, move forward</p>
                    </div>
                </div>
                <div className="">
                    <button className="button">View Your Tasks </button>
                    <a href="" className="ink">Watch How It Works</a>
                </div>
            </div >
            <div className="right-content">
                <img src={MainImage} alt='Test Image' />

            </div>

        </div >
    )
}
export default Hero