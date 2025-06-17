"use client";

import React, { useState } from "react";
import styles from "./destination.module.css";
import { PlanetWishlistItem } from "@/app/destination/components/PlanetWishlistItem.jsx";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [wishListName, setWishListName] = useState("");
  const [wishList, setWishList] = useState([]);
  const [error, setError] = useState("");

  const onAddItemPressed = (e) => {
    e.preventDefault();
    if (wishListName.length < 1) {
      setError("Error: The length of the planet name is too short!");
      return;
    }
    setError("");
    const wishListItem = { thumbnail, wishListName };
    setWishList((prevWishList) => [...prevWishList, wishListItem]);
    if (onAddWishlistItem) onAddWishlistItem(wishListItem);

    const onRemove = () => {};

    setWishListName("");
  };

  const removeFromWishlist = (elementToDelete) => {
    setWishList((previous) => previous.filter((element) => element !== elementToDelete));
  };

  const customWishList = () => {
    if (!wishList.length) return `You don't have any items in your custom wish List`;
    if (wishList.length === 1) return `You have ${wishList.length} item in your wish list.`;
    return `You have ${wishList.length} items in your wish list.`;
  };

  console.log(customWishList);

  return (
    <>
      <form onSubmit={onAddItemPressed} className={styles.addWishlistItem}>
        <p>Add custom planet to wishlist</p>
        {error && <div className={styles.error}>{error}</div>}
        <label htmlFor="customWishlist">Wishlist item name</label>
        <input onChange={(e) => setWishListName(e.target.value)} value={wishListName} id="customWishlist" type="text" />
        <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
        <select onChange={(e) => setThumbnail(e.target.value)} value={thumbnail} id="customWishlistThumbnail">
          <option value="/destination/image-europa.png">EUROPA</option>
          <option value="/destination/image-mars.png">MARS</option>
          <option value="/destination/image-moon.png">MOON</option>
          <option value="/destination/image-titan.png">TITAN</option>
        </select>
        <button className={styles.wishlistButton}>ADD CUSTOM</button>
      </form>
      <h3>{customWishList()}</h3>
      <div className={styles.wishlistList}>
        {wishList.map((item, idx) => (
          <PlanetWishlistItem key={idx} name={item.wishListName} onRemove={() => removeFromWishlist(item)} thumbnail={item.thumbnail} />
        ))}{" "}
      </div>
    </>
  );
};
