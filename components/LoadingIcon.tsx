import * as React from 'react'

import cs from 'classnames'

import styles from './styles.module.css'

export const LoadingIcon = (props) => {
  const { className, ...rest } = props
  return (
    <svg
      className={cs(styles.loadingIcon, className)}
      {...rest}
      viewBox='0 0 24 24'
    >
      <rect
        x='0'
        y='7.6416'
        width='4'
        height='14.7168'
        fill='#00aeff9b'
        opacity='0.2'
      >
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='0.2; 1; .2'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='height'
          attributeType='XML'
          values='10; 20; 10'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='y'
          attributeType='XML'
          values='10; 5; 10'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
      </rect>
      <rect
        x='8'
        y='5.1416'
        width='4'
        height='19.7168'
        fill='#00aeff9b'
        opacity='0.2'
      >
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='0.2; 1; .2'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='height'
          attributeType='XML'
          values='10; 20; 10'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='y'
          attributeType='XML'
          values='10; 5; 10'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
      </rect>
      <rect
        x='16'
        y='7.3584'
        width='4'
        height='15.2832'
        fill='#00aeff9b'
        opacity='0.2'
      >
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='0.2; 1; .2'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='height'
          attributeType='XML'
          values='10; 20; 10'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='y'
          attributeType='XML'
          values='10; 5; 10'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
        ></animate>
      </rect>
    </svg>
  )
}
