import Image from 'next/image';
import styles from './scout.module.css';


export const MapComponent = (props) => (
    <Image
        className={styles.parent}
        src={props.imagePath} // Route of the image file
        width={1024}
        height={1024}
        alt="Your Name"
    />
);
