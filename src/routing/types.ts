import React from "react";

export interface IRoute{
    path: string,
    component: React.Component | React.FC,
    routes?: IRoute[]
}