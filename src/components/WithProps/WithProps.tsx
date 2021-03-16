/* eslint-disable react/prop-types */
import React, { FC } from 'react'

export interface WithPropsInterface {
    tooltipPosition?: string
}

// ok
const WithProps: FC<WithPropsInterface> = ({ tooltipPosition }) => {

// error - no sidebar (reload necessary)
// const WithProps: FC<WithPropsInterface> = ({ tooltipPosition="top" }) => {
    return (
    <>
        tooltipPosition: {tooltipPosition}
    </>
)}

export default WithProps
