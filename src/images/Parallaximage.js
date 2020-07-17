import { Parallax } from 'react-scroll-parallax';
import background from './hamiltoncompany.jpg'
const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image src={background} />
    </Parallax>
);

export default ParallaxImage