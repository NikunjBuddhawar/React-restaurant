import React from "react";
import "./Content1.css";

function Content1() {
    return (
        <div className="cc">
            <div className="content-conainter">
                <div className="first">
                    <div className="left">
                        <h2>Welcome</h2>
                        <p>Welcome to The Palate Emporium, where culinary artistry meets warm hospitality. Indulge in our exquisite

                            dishes crafted from the finest ingredients, served in an elegant and inviting ambiance.<span> Whether you're

                                here for a casual meal or a special occasion, we promise an unforgettable dining experience. Sit back,

                                relax, and let us delight your senses with our exceptional cuisine and service. Thank you for choosing The Palate Emporium.
                            </span>
                        </p>
                        <button className="btn"><a href="/menu">View Menu</a></button>
                    </div>
                    <div className="right">
                        <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" alt="food" />
                    </div>
                </div>
                <div className="first">
                    <div className="low">
                        <img src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg" alt="food" />
                    </div>
                    <div className="high">
                        <h2>HOST AN EVENT</h2>
                        <p> Atithi Devo Bhava translated in English to 'a guest is like a God', embodies the spirit of event service at SONA.

                            Whether you're looking for a celebration hosted in one of our private dining rooms, or

                            an off-site catered event at your home, we take pride in our ability to make your occasion all that you envision.
                        </p>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                <div className="first">
                    <div className="red">
                        <h2>Reserve a Table</h2>
                        <p>Secure your spot at The Palate Emporium for an unforgettable dining experience.

                            Reserve your table now and indulge in our exquisite cuisine and elegant ambiance.
                        </p>
                        <button><a href="/Reserve">Reserve Now</a></button>
                    </div>
                    <div className="right">
                        <img src="https://restaurantcopenhagen.com/images/Copenhagen_Table_Booking.jpg" alt="reserve"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content1;