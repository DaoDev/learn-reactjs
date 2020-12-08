import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'BETTER: Thong diep Tinh Yeu',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/f/b/e/4fbe86c4c580a6e8fdc263106ca9dfea.jpg'
        },
        {
            id: 2,
            name: 'Cau la cua to!',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/5/3/7/d537f267e7b7477b667b4464e0a9ab71.jpg'
        },
        {
            id: 3,
            name: 'Nhac Hay! MV Hot!',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/1/7/9/b179ccc433ad636ca67a5f8892245c2f.jpg'
        },
        {
            id: 4,
            name: 'USUK Thang 11/2020 Co Gi Hot?',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/1/1/6/01162afec2cb7c1e37c6989aaa57abcb.jpg'
        },
    ]

    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;