import { Box, MenuList, MenuItem, MenuItemProps } from '@looker/components'
import { ArrowBack } from '@styled-icons/material'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import omit from 'lodash/omit'
import './Sidebar.css'
import React from 'react'


const SideBar = ({ route, routeSet }: any) => {

    return (
    <div className='sidebar'>
      <Box display="flex" flexDirection="column">
        <MenuList type="none">
        <StyledRouterLink to={routeSet['Home Page']}>
          <MenuItem icon={<ArrowBack />} selected={route === routeSet['Home Page']}>
             Back to Home
          </MenuItem>
        </StyledRouterLink>
        <StyledRouterLink to={routeSet['Overview']}>
          <MenuItem selected={route === routeSet['Overview']}>
             Overview
          </MenuItem>
        </StyledRouterLink>
        <StyledRouterLink to={routeSet['Category Analysis']}>
          <MenuItem selected={route === routeSet['Category Analysis']}>
             Category Analysis
          </MenuItem>
        </StyledRouterLink>
        </MenuList>
      </Box>
      </div>
      )

}

const StyledRouterLinkInner: React.FC<LinkProps & MenuItemProps> = (props) => (
  <Link {...omit(props, 'customizationProps')} />
)

const StyledRouterLink = styled(StyledRouterLinkInner)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`



export default SideBar;