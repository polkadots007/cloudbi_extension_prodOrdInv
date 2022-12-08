import { LookerEmbedDashboard, LookerEmbedSDK } from "@looker/embed-sdk";
import { ExtensionContext2, ExtensionContextData2 } from "@looker/extension-sdk-react";
import { Looker40SDK } from "@looker/sdk";
import React, { useCallback, useContext } from "react";
import {DashboardConfig} from "../shared/DashboardDetails";
import { EmbedContainer } from "./EmbedDashboard/EmbedContainer";
import HomePage from "./Home/HomePage";
import SideBar from "./Sidebar/Sidebar";
import { MainProps } from "./types";

export const Main: React.FC<MainProps> = ({ route }) => {
    const [dashboardNext, setDashboardNext] = React.useState(true)
    const [running, setRunning] = React.useState(true)
    const [dashboard, setDashboard] = React.useState<LookerEmbedDashboard>()
    const extensionContext =
      useContext<ExtensionContextData2<Looker40SDK>>(ExtensionContext2)
    
    const isHomePage: boolean = (route === 'home_page')

    const toggleDashboard = () => {
      setDashboardNext(!dashboardNext)
    }
  
    const canceller = (event: any) => {
      return { cancel: !event.modal }
    }
  
    const updateRunButton = (running: boolean) => {
      setRunning(running)
    }
  
    const setupDashboard = (dashboard: LookerEmbedDashboard) => {
      setDashboard(dashboard)
    }
  
    const embedCtrRef = useCallback(
      (el) => {
        const hostUrl = extensionContext?.extensionSDK?.lookerHostData?.hostUrl
        let id = DashboardConfig[route].id
        if (el && hostUrl) {
          el.innerHTML = ''
          LookerEmbedSDK.init(hostUrl)
          const db = LookerEmbedSDK.createDashboardWithId(id as number)
          if (dashboardNext) {
            db.withNext()
          }
          db.appendTo(el)
            .on('dashboard:loaded', updateRunButton.bind(null, false))
            .on('dashboard:run:start', updateRunButton.bind(null, true))
            .on('dashboard:run:complete', updateRunButton.bind(null, false))
            .on('drillmenu:click', canceller)
            .on('drillmodal:explore', canceller)
            .on('dashboard:tile:explore', canceller)
            .on('dashboard:tile:view', canceller)
            .withParams({
              _theme: '{"show_filters_bar": true,"show_title":true,"background_color":"gray","tile_background_color":"black","tile_text_color":"white","title_color":"white"}'
            })
            .build()
            .connect()
            .then(setupDashboard)
            .catch((error: Error) => {
              console.error('Connection error', error)
            })
        }
      },
      [dashboardNext]
    )
  
    const runDashboard = () => {
      if (dashboard) {
        dashboard.run()
      }
    }
    
    const getRoutes = (Config: any) => {
        let routes = {};
        Object.keys(Config).forEach((item: any)=>{
            typeof Config[item]=== 'object' && (routes[Config[item].title] = `/${item}`)
        })
        return routes;
    }
    
 return (
    <>
    {isHomePage ?
        <HomePage />
    :
      <>
        <div className='embed-components' style={{display:'flex',flexDirection:'row'}}>
            <SideBar route={route} routeSet={getRoutes(DashboardConfig)}/>
            <EmbedContainer ref={embedCtrRef} />
        </div>
      </>
    }
    </>
  )
}
