/*3*/

import { PropsWithChildren } from "react"

//  export function ListItem({children} : PropsWithChildren){
//      return(
//          <div className="flex justify-center items-center bg-blue-100 text-gray-600">{children}</div>
//      )
//  }

export function ListItem({children} : PropsWithChildren){
    return(
        <div>{children}</div>
    )
}

