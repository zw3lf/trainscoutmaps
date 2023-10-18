import styles from "./scout.module.css";

const convertCoordToPixel = (point, map) => {
    const width = 'mapWidth' in map ? map.mapWidth : 42;
    let x = point.x / width * 1024 -15;
    let y = point.y / width * 1024 -15;
    console.log(`${point.x} ${point.y} ${x} ${y}`)
    return {left: `${x}px`, top: `${y}px`}
}

export const ButtonComponent = (props) => {
    return <button
        className={styles.mark}
        id={`${props.mapData.name}-${props.mapData.coords.findIndex((e) => JSON.stringify(e) === JSON.stringify(props.point))}`}
        style={
            convertCoordToPixel(props.point, props.mapData)
        }>
    </button>
}