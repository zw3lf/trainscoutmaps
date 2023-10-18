import {MapComponent} from "./MapComponent";
import {ButtonComponent} from "./ButtonComponent";
import styles from "./scout.module.css";

const createLocations = (mapData) => {
    console.log(Object.keys(mapData))
    return mapData.coords.map(c => {
        return <ButtonComponent point={c} mapData={mapData}/>
    })
}

export const ScoutingMapComponent = (props) => (
    <div className={styles.parent}>
        <MapComponent imagePath={`/images/${props.mapData.image}`}/>
        {createLocations(props.mapData)}
    </div>
);
