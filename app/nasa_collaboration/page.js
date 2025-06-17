"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { RoverPhoto } from "./components/roverPhoto.jsx";
import { RSCPathnameNormalizer } from "next/dist/server/future/normalizers/request/rsc";

const API_KEY = "NPpoY3W66xTi5d1rO46lyEKyesoY17FlCDruMnWb";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then((response) => response.json());
      setRoverPhoto(roverPhotoResponse);
    };
    fetchRoverPhotos();

    const fetchDailyImg = async () => {
      const dailyImageResposne = await fetch(NASA_URLs.astronomyPicOfTheDay).then((response) => response.json());
      setDailyImg(dailyImageResposne);
    };
    fetchDailyImg();
  }, []);
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <h3>{dailyImg.title}</h3>
          <p>{dailyImg.explanation}</p>
          <img src={dailyImg.url} />
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          <div className={styles.roverPhotoBox}>
            {roverPhoto.photos?.map((item) => (
              <RoverPhoto key={item.id} roverName={item.rover.name} date={item.earth_date} url={item.img_src} />
            ))}
            {/* TASK - React 1 week 3 */}
            {/* Create a react component for the <RoverPhoto />, which should accept the following props */}
            {/* 1. src: source of the img (img_src in the data from the API) */}
            {/* 2. date: earth_date data coming from the API */}
            {/* 3. roverName: will be in the rover object - rover.name */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
