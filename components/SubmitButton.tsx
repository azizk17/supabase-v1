import { useTranslate } from '@pankod/refine-core'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from './ui2'

const SubmitButton = ({ title, disabled, onClick }) => {
    const t = useTranslate();
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
            color='primary'
            endIcon={<FaArrowRight />} >
            {title ? title : t('submit')}
        </Button>
    )
}

export default SubmitButton