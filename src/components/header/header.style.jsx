import styled from "styled-components"
import { clearfix } from "styles/utilities/floats"

export const MainHeader = styled.header`
  line-height: 70px;
  margin-bottom: 30px;
  position: relative;
  ${clearfix}
`

export const Heading1 = styled.h1`
  float: left;
  margin: 0;
`

export const Navigation = styled.nav`
  float: right;
`

export const ListItem = styled.li`
  display: inline-block;
  cursor: pointer;

  & + li {
    margin-left: 25px;
  }
`
