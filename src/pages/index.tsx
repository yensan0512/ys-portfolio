import styled from 'styled-components';
import Y, { Wrapper as $Y } from '@/components/svg/Y';
import { useState } from 'react';
import S, { Wrapper as $S } from '@/components/svg/S';

const Wrapper = styled.main`


  ${$Y},${$S} {
    height: 150px;
  }
`;

export default function Home() {

  const [animate, setAnimate] = useState(false);

  return (
    <Wrapper>
      <Y animate={animate} />
      <S animate={animate} />

      <button onClick={() => setAnimate(true)}>animate</button>
    </Wrapper>
  )
}
