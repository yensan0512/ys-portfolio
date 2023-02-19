import styled from 'styled-components';
import Y, { Wrapper as $Y } from '@/components/svg/Y';
import { useState } from 'react';

const Wrapper = styled.main`


  ${$Y} {
    height: 150px;
  }
`;

export default function Home() {

  const [animate, setAnimate] = useState(false);

  return (
    <Wrapper>
      <Y animate={animate} />

      <button onClick={() => setAnimate(true)}>animate</button>
    </Wrapper>
  )
}
