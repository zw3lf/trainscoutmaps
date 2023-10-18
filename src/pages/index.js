import {ExpansionMap} from '../app/Coords'
import {ScoutingMapComponent} from "../app/ScoutingMapComponent";


const buildMaps = () => {
    return Object.entries(ExpansionMap).flatMap(d => {
        const [expacCode, data] = d;
        return data.coordData.map(m => {
            return <ScoutingMapComponent mapData={m}/>
        })
    })
}

export default function FirstPost() {
    return <div>
        {buildMaps()}
    </div>;
}