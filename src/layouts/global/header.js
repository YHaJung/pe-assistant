import Link from "next/link";
import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

import COLORS from "src/constants/colors";

export default function GlobalHeader() {
  return (
    <StyledHeader>
      <InnerWrapper>
        <Link href="/" passHref>
          <A>
            <Heading as="h1" size="lg" color="white">
              체육 수업 도우미
            </Heading>
          </A>
        </Link>
      </InnerWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 4.8rem;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
  background-color: ${COLORS.blue[500]};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
`;

const A = styled.a``;
