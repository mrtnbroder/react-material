
import React from 'react'
import styled from 'styled-components'

import { fastOutSlowIn } from '../_internal/styles/transitions'

export const MenuItem = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: rgba(0, 0, 0, .87);
  font-weight: 400;

  padding: 4px 24px;
  cursor: pointer;
  position: relative;

  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 225ms ${fastOutSlowIn};


  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }
`
