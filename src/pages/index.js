import Image from 'next/image';
import styles from './scout.module.css';
import {ExpansionMap} from '../app/Coords'

const YourComponent = () => (

    <Image
        className={styles.parent}
        src="/images/shb/lakeland.jpg" // Route of the image file
        width={1698}
        height={1698}
        //height={512} // Desired size with correct aspect ratio
        //width={512} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

const convertCoordToPixel = (point, map) => {
    const width = 'mapWidth' in map ? map.mapWidth : 42;
    let x = point.x / width * 1698 -5;
    let y = point.y / width * 1698 -64;
    console.log(`${point.x} ${point.y} ${x} ${y}`)
    return {left: `${x}px`, top: `${y}px`}
}
export default function FirstPost() {
    return <h1>
        <div>
            <div className={styles.parent}>
                <YourComponent/>
                    <button className={styles.mark} style={convertCoordToPixel(ExpansionMap.shb.coordData[0][0], ExpansionMap.shb.coordData[0])}></button>
            </div>

        </div>
    </h1>;
}