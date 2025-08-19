import { Footer } from "./Footer";
import HomePage from "./Landing";
import ImageSlider from "./Slider";

export default function Dashboard(){
    return<>
        <div className='flex flex-col'>
            <div><ImageSlider/></div>
            <div><HomePage/></div>
      </div>
    </>
}