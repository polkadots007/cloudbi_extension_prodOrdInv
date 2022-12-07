import React from 'react'
import { ExtensionProvider2 } from '@looker/extension-sdk-react'
import { Looker40SDK } from '@looker/sdk'
import ProductMain from './ProductMain'

export const App: React.FC<any> = () => {
    return (
        <ExtensionProvider2 type={Looker40SDK}>
            <ProductMain />
        </ExtensionProvider2>
    )
}