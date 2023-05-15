"use client"

import React from 'react';
import ReactPannellum, { addScene } from "react-pannellum";

export default function PanoramaView() {
  const style = {
    width: "100%",
    height: "100%",
    background: "#000000",
    borderRadius: "10px",
    border: "2px solid white",
    "@media (min-width: 768px)": {
      height: "20vh"
    }
  }

  return (
    <section id='panorama-view' className='bg-[#1E1E1E] py-10 md:py-12 px-6 md:px-12'>
      <div className='flex items-center justify-between text-white py-4'>
        <h2 className='px-4 text-2xl md:text-3xl'>360 View</h2>

        <p className='px-4 text-sm md:text-base'>Type of House</p>
      </div>

      <div className='w-full h-52 md:h-96 lg:h-screen'> 
        <ReactPannellum
          id="pannellum"
          sceneId="circle"
          imageSource="/room.jpeg"
          config={{
            autoRotate: -2,
            showControls: false,
            showFullscreenCtrl: true,
            uiText: {
              loadButtonLabel: "Load View",
            },
            hotSpots: [
              {
                pitch: -2.1,
                yaw: 132.9,
                type: "scene",
                text: "Exterior",
                sceneId: "house",
              },
            ],
          }}
          style={style}
          onPanoramaLoaded={() => {
            addScene(
              'house',
              {
                title: "Exterior",
                hfov: 110,
                yaw: 5,
                type: "equirectangular",
                imageSource: "https://pannellum.org/images/from-tree.jpg",
                hotSpots: [
                  {
                    pitch: -0.6,
                    yaw: 37.1,
                    type: "scene",
                    text: "Interior",
                    sceneId: "circle",
                    targetYaw: -23,
                    targetPitch: 2,
                  },
                ],
              },
              console.log('Panorama added')
            )
          }}
        />
      </div>
    </section>
  )
}
