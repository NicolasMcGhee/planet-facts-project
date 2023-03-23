import UranusImg from '../../public/assets/planet-Uranus.svg'
import UranusInternal from '../../public/assets/planet-uranus-internal.svg'
import Planet from "components/Planet";
import Header from "components/Header";

export default function Uranus(props) {
    return(
        <>
            <Header/>
            <Planet 
                planetName="URANUS"
                Image={UranusImg}
                Internal={UranusInternal}
                overview="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
                surfaceGeo="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
                interalStr="The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
                planetLink="https://en.wikipedia.org/wiki/Uranus"
                rotation="17.2 Hours"
                revolution="84 Years"
                radius="25,362 KM"
                averageTemp="-195°c"
            />
        </>
    )
}
