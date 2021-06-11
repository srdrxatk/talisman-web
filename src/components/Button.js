import React, { Fragment } from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components'
import { omit } from 'lodash'
import { ReactComponent as IconLoading } from '@assets/icons/loader.svg'

const IconButton = styled(
  ({
    children,
    className,
    ...rest
  }) => 
    <button 
      className={`button icon-button ${className}`}
      {...rest}
      >
      {children}
    </button>
  )
  `
    border: none;
    padding: 0.335em;
    margin: 0;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.2s;
    background: rgba(${({ theme }) => theme?.foreground}, 0.05);
    border-radius: 50%;
    font-size: 1.5em;

    >*{
      line-height: 1em;
    }
  `

const Button = styled(
  ({
    loading,
    children,
    className,
    ...props
  }) => {

    const wrappedChildren = !!loading 
      ? <Fragment><IconLoading data-spin='true'/>&nbsp;{loading}</Fragment>
      : React.Children.map(children, child => React.isValidElement(child) ? child : <span>{child}</span>)

    const _props = omit(props, ['loading', 'disabled', 'boxed', 'round', 'primary', 'tight', 'loose'])

    return !!props?.to
      ? !!props?.navlink 
        ? <NavLink {..._props} className={`button ${className}`}>{wrappedChildren}</NavLink>
        : <Link {..._props} className={`button ${className}`}>{wrappedChildren}</Link>
      : <button {..._props} className={`button ${className}`}>{wrappedChildren}</button>
  })
  `
    border: none;
    padding: 1.3em 2em;
    margin: 0;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: rgb(${({ theme }) => theme?.mid});
    color: rgb(${({ theme }) => theme?.light});
    border-radius: 0.8em;
    font-weight: bold;
    transition: all 0.15s ease-in-out;
    
    >*{
      margin: 0 0.5rem;
      font-size: inherit;
      font: inherit;
      color: inherit;
    }

    &:hover{
      opacity: 0.8;
    }

    ${({primary, theme}) => !!primary && `
      background: rgb(${theme?.primary});
    `}

    ${({small}) => !!small && `
      padding: 1em 1.6em;
    `}

   
    

  `

Button.Icon = IconButton

export default Button