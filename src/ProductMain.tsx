import { ComponentsProvider } from "@looker/components-providers";
import { ExtensionContext2, ExtensionContextData2 } from "@looker/extension-sdk-react";
import { Looker40SDK } from "@looker/sdk";
import { Main } from './components/Main';
import React, { Suspense, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {DashboardConfig} from "./shared/DashboardDetails";

export const ProductMain: React.FC<any> = () => {
    const extensionContext = useContext<ExtensionContextData2<Looker40SDK>>(ExtensionContext2);


    const makeid = (length: any) => {
            var res = [];
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < length; i++)
              res.push(characters.charAt(Math.floor(Math.random()*characters.length)));

          
            return res.join('');
    }

    return (
        <ComponentsProvider>
            <Suspense fallback={<></>}>
                <Switch>
                    {
                        Object.keys(DashboardConfig).map((item: any)=>{
                            if(typeof DashboardConfig[item] === 'object'){
                                return (
                                    <Route key={makeid(16)} path={`/${item}`}>
                                        <Main route={item} />
                                    </Route>
                                )}
                        })
                    }
                    <Redirect from='*' to={`/${DashboardConfig.defaultUrl}`} />
                </Switch>
            </Suspense>

        </ComponentsProvider>
    )



}

export default ProductMain;