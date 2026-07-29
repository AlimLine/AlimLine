import styles from './star-fall.module.scss'
import {useAppSelector} from "@/redux/store.ts";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import {setStarFall} from "@/redux/features/starFall.ts";

const StarFall = () => {
  const starFall = useAppSelector((state) => state.star_fall.star_fall)
  const dispatch = useDispatch()
  const isActive = starFall !== 'none'
  const mapRef = useRef(null);

  useEffect(() => {
    dispatch(setStarFall('star'))
  }, [])

  useEffect(() => {
    if (!isActive) return;

    console.log(starFall)
  }, [starFall])


  return isActive ? (
    <div className={styles.star_fall} ref={mapRef}>
    </div>
  ) : null;
};

export default StarFall;