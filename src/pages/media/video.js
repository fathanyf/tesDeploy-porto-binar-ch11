import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';
import styled from 'styled-components';
import VideoCloud from '../../components/media-components/VideoCloud';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
  `;


const Video = () => {

    return (
        <Container>
            <h1> Upload and Stream Video </h1>
            < VideoCloud />
        </Container>
    );
};

export default Video;