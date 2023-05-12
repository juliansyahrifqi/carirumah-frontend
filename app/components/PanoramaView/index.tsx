"use client"

import React from 'react';
import ReactPannellum, { addScene } from "react-pannellum";

export default function PanoramaView() {  
  const style = {
    width: "100%",
    height: "600px",
    background: "#000000",
    borderRadius: "10px",
    border: "2px solid white"
  }

  return (
    <section id='panorama-view' className='bg-[#1E1E1E] px-12 py-10'>
      <div className='flex items-center justify-between text-white py-4'>
        <h2 className='px-4 text-3xl'>360 View</h2>

        <p className='px-4'>Type of House</p>
      </div>

      <div className='w-full'> 
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
