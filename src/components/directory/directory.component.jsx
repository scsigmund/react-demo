import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/10/12/15/00/room-984076_960_720.jpg',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://media.istockphoto.com/photos/scandinavian-farmhouse-living-room-interior-wall-mockup-picture-id1202848203',
                id: 2,
                linkUrl: ''
            },{
                title: 'sneakers',
                imageUrl: 'https://media.istockphoto.com/photos/retro-style-interior-background-picture-id1167055236',
                id: 3,
                linkUrl: ''
            },{
                title: 'womens',
                imageUrl: 'https://media.istockphoto.com/photos/modern-interior-of-living-room-concept-of-classic-blue-color-of-the-picture-id1193587033',
                size: 'large',
                id: 4,
                linkUrl: ''
            },{
                title: 'mens',
                imageUrl: 'https://media.istockphoto.com/photos/home-interior-mockup-with-green-sofa-rope-curtains-and-table-in-room-picture-id1045661884',
                size: 'large',
                id: 5,
                linkUrl: ''
            }
        ]}
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;