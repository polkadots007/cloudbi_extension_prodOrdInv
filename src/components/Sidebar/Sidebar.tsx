import { Box, MenuList, MenuItem, MenuItemProps } from '@looker/components'
import { ArrowBack } from '@styled-icons/material'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import omit from 'lodash/omit'
// import './Sidebar.css'
import React from 'react'


const SideBar = ({ route, routeSet }: any) => {

    return (
    <div className='sidebar' style={{width: '300px'}}>
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
        <StyledRouterLink to={routeSet['Order Line Item - Summary']}>
          <MenuItem selected={route === routeSet['Order Line Item - Summary']}>
             Order Summary
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