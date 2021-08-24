
import {SliderProps, Slider} from "./Slider";

export default {
    component: Slider,
    title: 'Slider'
}

const Template = (args: SliderProps) => <Slider {...args} />
const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const mixedData = testData.map(i => i % 2 === 0 ?
    `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg` :
    `https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80`);

const fullScreenSliderData = testData.map(()=>'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg');

