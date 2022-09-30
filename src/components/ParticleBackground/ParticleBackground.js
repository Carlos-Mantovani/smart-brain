import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main)
    }
    const particlesLoaded = (container) => {
        console.log(container);
    }
    return (
        <Particles className='particles' id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={{
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 1,
                    width: 0.6,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 600,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5, max: 3 },
                },
            },
            detectRetina: true,
        }} />
    )
}

export default ParticleBackground;
