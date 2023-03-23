import NeptuneImg from '../../public/assets/planet-neptune.svg'
import NeptuneInternal from '../../public/assets/planet-neptune-internal.svg'
import Planet from "components/Planet";
import Header from "components/Header";

export default function Neptune(props) {
    return(
        <>
            <Header/>
            <Planet 
                planetName="NEPTUNE"
                Image={NeptuneImg}
                Internal={NeptuneInternal}
                overview="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
                surfaceGeo="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
                interalStr="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
                planetLink="https://en.wikipedia.org/wiki/Neptune"
                rotation="16.08 Hours"
                revolution="164.79 Years"
                radius="24,622 KM"
                averageTemp="-201°c"
            />
        </>
    )
}