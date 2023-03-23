import MarsImg from '../../public/assets/planet-mars.svg'
import MarsInternal from '../../public/assets/planet-mars-internal.svg'
import Planet from "components/Planet";
import Header from "components/Header";

export default function Mars(props) {
    return(
        <>
            <Header/>
            <Planet 
                planetName="MARS"
                Image={MarsImg}
                Internal={MarsInternal}
                overview="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
                surfaceGeo="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
                interalStr="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
                planetLink="https://en.wikipedia.org/wiki/Mars"
                rotation="1.03 Days"
                revolution="1.88 Years"
                radius="3,389.5 KM"
                averageTemp="-28°c"
            />
        </>
    )
}