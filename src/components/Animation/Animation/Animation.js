import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Import React Spring hooks
import './Animation.css'; // Import CSS for container styles

const Animation = () => {
    // Define spring animation for horizontal movement
    const slideProps = useSpring({
        from: { opacity: 0, transform: 'translateX(-100%)' }, // Start off-screen on the left
        to: async (next) => {
            while (true) {
                await next({ opacity: 1, transform: 'translateX(0)' }); // Slide to center
                await next({ opacity: 0, transform: 'translateX(100%)' }); // Slide off-screen to the right
            }
        },
        config: { duration: 3000 }, // Set duration of each slide-in/out
        loop: true, // Infinite loop for the sliding effect
    });

    return (
        <div className="animation-container">
            {/* Use animated.h1 for the spring-based animation */}
            <animated.h1 style={slideProps} className="welcome-title">
                Welcome to Helping-Hand
            </animated.h1>
        </div>
    );
};

export default Animation;
