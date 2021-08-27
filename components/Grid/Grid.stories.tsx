import {Grid, GridProps} from "./Grid";

export default {
    component: Grid,
    title: 'Grid'
}

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Template = (args: GridProps) => <Grid {...args} />

export const WithPortraitItems = Template.bind({});
WithPortraitItems.args = {
    data: testData.map((data)=>{
        return {
            name: `name-${data}`,
            domain: 'comics',
            id: data,
            thumbnail: {
                path: 'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73'
            }
        }
    }),
    title: 'Grid title',
    justifyContent: 'center',
    titleAlignment: 'center'
}

export const LeftAligned = Template.bind({});
LeftAligned.args = {
    data: testData.map((data)=>{
        return {
            name: `name-${data}`,
            domain: 'characters',
            id: data,
            thumbnail: {
                path: 'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73'
            }
        }
    }),
    title: 'Grid title',
    justifyContent: 'flex-start',
    titleAlignment: 'left'
}
