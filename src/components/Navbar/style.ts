import styled, { css } from 'styled-components'

import { AiOutlineHome } from 'react-icons/ai'

type Prop = {
  isScroll: boolean
}

export const Header = styled.header<Prop>`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 10;

  height: ${({ isScroll, theme }) => (isScroll ? '6.8rem' : '9rem')};
  width: 100%;
  background-color: ${({ isScroll, theme }) =>
    isScroll ? theme.colors.background_terciary : theme.colors.background};

  transition: all 0.3s ease-out;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div<Prop>`
  ${({ theme, isScroll }) => css`
    display: flex;
    align-items: center;

    h1 {
      text-transform: uppercase;
      color: ${isScroll ? theme.colors.text : theme.colors.text_dark};
      font-size: ${theme.fonts.medium};
      margin-left: 1.5rem;
      font-weight: 600;
    }
  `}
`

export const IconHome = styled(AiOutlineHome)<Prop>`
  ${({ theme, isScroll }) => css`
    font-size: 4rem;
    padding: 0.5rem;
    background-color: ${isScroll
      ? theme.colors.background
      : theme.colors.background_terciary};
    color: ${isScroll ? theme.colors.text_dark : theme.colors.text};
    transition: all 0.3 ease;
  `}
`

export const Nav = styled.nav<Prop>`
  ${({ theme, isScroll }) => css`
    display: flex;

    a,
    svg {
      transition: all 0.3s ease;
      color: ${isScroll ? theme.colors.text : theme.colors.text_dark}!important;
    }
  `}
`

export const Icons = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 4rem;
`

export const Icon = styled.li`
  & + li {
    margin-left: 2rem;
  }
`

export const List = styled.ul`
  display: flex;
`

export const Item = styled.li`
  & + li {
    margin-left: 4rem;
  }
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text_dark};
    font-size: ${theme.fonts.small};
    font-weight: 500;

    svg {
      color: ${theme.colors.text_dark};
      font-size: 1.8rem;
    }
  `}
`
